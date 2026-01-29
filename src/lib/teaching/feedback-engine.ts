/**
 * Rule-Based Feedback Engine for Music Teaching
 * Provides intelligent feedback based on student performance
 */

import {
    getRandomMessage,
    getStreakMessage,
    CORRECT_NOTE_MESSAGES,
    WRONG_NOTE_MESSAGES,
    STRUGGLE_MESSAGES,
    COMPLETION_MESSAGES,
    EncouragementMessage,
} from "./encouragement";
import { getContextualQuestion, LeadingQuestion } from "./leading-questions";
import { NoteInfo } from "../audio/note-frequencies";

export type FeedbackType =
    | "correct"
    | "wrong"
    | "almost"
    | "flow_issue"
    | "streak"
    | "struggle"
    | "completion"
    | "question";

export interface Feedback {
    type: FeedbackType;
    message: EncouragementMessage;
    expectedNote?: string;
    playedNote?: string;
    suggestion?: EncouragementMessage;
    showDemo?: boolean;
    question?: LeadingQuestion;
}

interface PerformanceState {
    correctStreak: number;
    wrongStreak: number;
    totalCorrect: number;
    totalWrong: number;
    notesPlayed: number;
    lastFeedbackTime: number;
    askedQuestions: number;
}

class FeedbackEngine {
    private state: PerformanceState = {
        correctStreak: 0,
        wrongStreak: 0,
        totalCorrect: 0,
        totalWrong: 0,
        notesPlayed: 0,
        lastFeedbackTime: 0,
        askedQuestions: 0,
    };

    // Configuration
    private readonly ALMOST_CORRECT_CENTS = 30; // Cents threshold for "almost correct"
    private readonly STRUGGLE_THRESHOLD = 3; // Wrong notes before offering help
    private readonly QUESTION_INTERVAL = 5; // Ask a question every N correct notes
    private readonly FEEDBACK_COOLDOWN = 500; // Minimum ms between feedback

    /**
     * Reset the feedback engine state
     */
    reset(): void {
        this.state = {
            correctStreak: 0,
            wrongStreak: 0,
            totalCorrect: 0,
            totalWrong: 0,
            notesPlayed: 0,
            lastFeedbackTime: 0,
            askedQuestions: 0,
        };
    }

    /**
     * Get current accuracy percentage
     */
    getAccuracy(): number {
        if (this.state.notesPlayed === 0) return 0;
        return (this.state.totalCorrect / this.state.notesPlayed) * 100;
    }

    /**
     * Get current state for analytics
     */
    getState(): Readonly<PerformanceState> {
        return { ...this.state };
    }

    /**
     * Generate feedback for a played note
     */
    generateFeedback(
        playedNote: NoteInfo | null,
        expectedNote: string,
        expectedIndianNote?: string
    ): Feedback {
        const now = Date.now();

        // Check cooldown
        if (now - this.state.lastFeedbackTime < this.FEEDBACK_COOLDOWN) {
            return this.createNeutralFeedback();
        }

        this.state.lastFeedbackTime = now;
        this.state.notesPlayed++;

        // No note detected
        if (!playedNote) {
            return this.createWrongFeedback(null, expectedNote, expectedIndianNote);
        }

        const playedNoteName = playedNote.indianNote || playedNote.note;
        const isCorrect = this.isNoteCorrect(playedNote, expectedNote);
        const isAlmostCorrect = !isCorrect && Math.abs(playedNote.cents) < this.ALMOST_CORRECT_CENTS;

        if (isCorrect) {
            return this.createCorrectFeedback(playedNoteName, expectedNote);
        } else if (isAlmostCorrect) {
            return this.createAlmostCorrectFeedback(playedNoteName, expectedNote, expectedIndianNote);
        } else {
            return this.createWrongFeedback(playedNoteName, expectedNote, expectedIndianNote);
        }
    }

    /**
     * Check if played note matches expected note
     */
    private isNoteCorrect(played: NoteInfo, expected: string): boolean {
        // Check both western and Indian note names
        const playedWestern = played.note;
        const playedIndian = played.indianNote || "";

        return (
            playedWestern.toLowerCase() === expected.toLowerCase() ||
            playedIndian.toLowerCase() === expected.toLowerCase()
        );
    }

    /**
     * Create feedback for correct note
     */
    private createCorrectFeedback(playedNote: string, expectedNote: string): Feedback {
        this.state.correctStreak++;
        this.state.wrongStreak = 0;
        this.state.totalCorrect++;

        // Check for streak milestone
        const streakMessage = getStreakMessage(this.state.correctStreak);
        if (streakMessage) {
            return {
                type: "streak",
                message: streakMessage,
                playedNote,
                expectedNote,
            };
        }

        // Ask a question periodically
        if (
            this.state.totalCorrect > 0 &&
            this.state.totalCorrect % this.QUESTION_INTERVAL === 0
        ) {
            this.state.askedQuestions++;
            const question = getContextualQuestion(
                this.state.totalCorrect,
                this.getAccuracy(),
                false
            );
            return {
                type: "question",
                message: getRandomMessage(CORRECT_NOTE_MESSAGES),
                playedNote,
                expectedNote,
                question,
            };
        }

        return {
            type: "correct",
            message: getRandomMessage(CORRECT_NOTE_MESSAGES),
            playedNote,
            expectedNote,
        };
    }

    /**
     * Create feedback for wrong note
     */
    private createWrongFeedback(
        playedNote: string | null,
        expectedNote: string,
        expectedIndianNote?: string
    ): Feedback {
        this.state.correctStreak = 0;
        this.state.wrongStreak++;
        this.state.totalWrong++;

        // Check if struggling
        if (this.state.wrongStreak >= this.STRUGGLE_THRESHOLD) {
            return {
                type: "struggle",
                message: getRandomMessage(STRUGGLE_MESSAGES),
                playedNote: playedNote || "none",
                expectedNote,
                showDemo: true,
                suggestion: {
                    en: `The correct note is ${expectedIndianNote || expectedNote}. Let me show you again.`,
                    hi: `सही स्वर है ${expectedIndianNote || expectedNote}। मैं आपको फिर दिखाता हूँ।`,
                },
            };
        }

        return {
            type: "wrong",
            message: getRandomMessage(WRONG_NOTE_MESSAGES),
            playedNote: playedNote || "none",
            expectedNote,
            suggestion: {
                en: `Try pressing the key for ${expectedIndianNote || expectedNote}.`,
                hi: `${expectedIndianNote || expectedNote} वाली key दबाने की कोशिश करें।`,
            },
        };
    }

    /**
     * Create feedback for almost correct note
     */
    private createAlmostCorrectFeedback(
        playedNote: string,
        expectedNote: string,
        expectedIndianNote?: string
    ): Feedback {
        this.state.wrongStreak++;
        this.state.totalWrong++;

        return {
            type: "almost",
            message: {
                en: "Almost there! Just a tiny adjustment needed.",
                hi: "लगभग सही! बस थोड़ा समायोजन चाहिए।",
            },
            playedNote,
            expectedNote,
            suggestion: {
                en: `You played ${playedNote}, but we need ${expectedIndianNote || expectedNote}. Very close!`,
                hi: `आपने ${playedNote} बजाया, लेकिन हमें ${expectedIndianNote || expectedNote} चाहिए। बहुत करीब!`,
            },
        };
    }

    /**
     * Create neutral/no feedback response
     */
    private createNeutralFeedback(): Feedback {
        return {
            type: "correct",
            message: { en: "", hi: "" },
        };
    }

    /**
     * Generate completion feedback for a lesson
     */
    generateCompletionFeedback(): Feedback {
        const accuracy = this.getAccuracy();
        const completionMessage = getRandomMessage(COMPLETION_MESSAGES);

        let additionalMessage: EncouragementMessage;
        if (accuracy >= 90) {
            additionalMessage = {
                en: `Outstanding! ${accuracy.toFixed(0)}% accuracy!`,
                hi: `उत्कृष्ट! ${accuracy.toFixed(0)}% सटीकता!`,
            };
        } else if (accuracy >= 70) {
            additionalMessage = {
                en: `Great job! ${accuracy.toFixed(0)}% accuracy. Keep practicing!`,
                hi: `बढ़िया! ${accuracy.toFixed(0)}% सटीकता। अभ्यास जारी रखें!`,
            };
        } else {
            additionalMessage = {
                en: `Good effort! Try this lesson again to improve.`,
                hi: `अच्छा प्रयास! सुधार के लिए इस पाठ को दोबारा आज़माएं।`,
            };
        }

        return {
            type: "completion",
            message: completionMessage,
            suggestion: additionalMessage,
        };
    }

    /**
     * Generate flow-related feedback
     */
    generateFlowFeedback(
        isOnBeat: boolean,
        tempoConsistency: number
    ): Feedback | null {
        if (isOnBeat && tempoConsistency > 0.7) {
            return null; // Good flow, no feedback needed
        }

        if (!isOnBeat) {
            return {
                type: "flow_issue",
                message: {
                    en: "Try to keep a steady rhythm. 🎵",
                    hi: "एक स्थिर लय बनाए रखने की कोशिश करें। 🎵",
                },
                suggestion: {
                    en: "Listen for the beat and play along.",
                    hi: "ताल सुनें और साथ में बजाएं।",
                },
            };
        }

        if (tempoConsistency < 0.5) {
            return {
                type: "flow_issue",
                message: {
                    en: "Your tempo is uneven. Try to play more consistently.",
                    hi: "आपकी गति असमान है। और सुसंगत बजाने की कोशिश करें।",
                },
            };
        }

        return null;
    }
}

// Singleton instance
let engineInstance: FeedbackEngine | null = null;

export function getFeedbackEngine(): FeedbackEngine {
    if (!engineInstance) {
        engineInstance = new FeedbackEngine();
    }
    return engineInstance;
}
