"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef, Suspense } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Harmonium, type KeyState } from "@/components/instruments/harmonium";
import { Piano } from "@/components/instruments/piano";
import { Guitar } from "@/components/instruments/guitar";
import { Ukulele } from "@/components/instruments/ukulele";
import { Flute } from "@/components/instruments/flute";
import { Violin } from "@/components/instruments/violin";
import { Tabla } from "@/components/instruments/tabla";
import { Drums } from "@/components/instruments/drums";
import { Saxophone } from "@/components/instruments/saxophone";
import { getSoundPlayer } from "@/lib/audio/sound-player";
import { getLesson, type Lesson, type LessonStep } from "@/lib/lessons/lesson-content";
import { completeLesson as saveProgress, addPracticeTime } from "@/lib/progress/progress-service";
import { getSong } from "@/lib/songs/song-data";

function LessonContent() {
    const params = useParams();
    const searchParams = useSearchParams();

    const instrument = (params.instrument as string) || "harmonium";
    const lessonId = (params.lesson as string) || "lesson-1";
    const level = (searchParams.get("level") as "beginner" | "intermediate" | "advanced") || "beginner";
    const language = (searchParams.get("lang") as "en" | "hi") || "en";

    const [currentStep, setCurrentStep] = useState(0);
    const [keyStates, setKeyStates] = useState<Record<string, KeyState>>({});
    const [feedback, setFeedback] = useState<string>("");
    const [correctCount, setCorrectCount] = useState(0);
    const [totalAttempts, setTotalAttempts] = useState(0);
    const [sequenceIndex, setSequenceIndex] = useState(0); // Track progress in sequence
    const [lessonCompleted, setLessonCompleted] = useState(false);
    const lessonStartTime = useRef<number>(Date.now());

    // Get lesson based on instrument and level
    const lesson = useMemo(() => {
        if (lessonId.startsWith("song-")) {
            const songId = lessonId.replace("song-", "");
            const song = getSong(songId);
            if (song) {
                return {
                    id: lessonId,
                    titleEn: song.title,
                    titleHi: song.title,
                    steps: [
                        {
                            type: "intro", // Using intro/demo type
                            titleEn: "Get Ready",
                            titleHi: "तैयार हो जाएं",
                            contentEn: `Let's learn ${song.title}! Get your ${instrument} ready.`,
                            contentHi: `${song.title} सीखने के लिए तैयार हो जाएं!`,
                            note: song.notes[0].note // Just for reference
                        },
                        {
                            type: "sequence",
                            titleEn: "Play the Melody",
                            titleHi: "धुन बजाएं",
                            sequence: song.notes.map(n => n.note),
                            contentEn: "Follow the notes to play the song.",
                            contentHi: "सुरों का पालन करें।"
                        },
                        {
                            type: "complete",
                            titleEn: "Song Completed! 🎵",
                            titleHi: "गाना पूरा हुआ! 🎵",
                            contentEn: "You've played the whole song!",
                            contentHi: "आपने पूरा गाना बजा लिया!"
                        }
                    ]
                } as unknown as Lesson;
            }
        }
        return getLesson(instrument, level, lessonId);
    }, [instrument, level, lessonId]);

    // Safely get current step with bounds checking
    const step = lesson.steps[Math.min(currentStep, lesson.steps.length - 1)];


    // Navigate to next step
    const goToNext = useCallback(() => {
        if (currentStep < lesson.steps.length - 1) {
            setCurrentStep(prev => prev + 1);
            setKeyStates({});
            setFeedback("");
            setSequenceIndex(0); // Reset sequence index for new step
        }
    }, [currentStep, lesson.steps.length]);

    // Navigate to previous step
    const goToPrev = useCallback(() => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
            setKeyStates({});
            setFeedback("");
            setSequenceIndex(0);
        }
    }, [currentStep]);

    // Handle demo playback
    const playDemo = useCallback(async () => {
        if (!step || !step.note) return;

        try {
            const player = getSoundPlayer();

            // Highlight the key
            setKeyStates({ [step.note]: { highlighted: true, pressed: false, correct: false, wrong: false } });

            // Play the note
            await player.playNote(instrument, step.note, 0.8);

            // Animate press
            setTimeout(() => {
                if (step.note) {
                    setKeyStates({ [step.note]: { highlighted: true, pressed: true, correct: false, wrong: false } });
                }
            }, 100);

            // Release
            setTimeout(() => {
                if (step.note) {
                    setKeyStates({ [step.note]: { highlighted: true, pressed: false, correct: false, wrong: false } });
                }
            }, 600);
        } catch (error) {
            console.error("Error playing demo:", error);
        }
    }, [step, instrument]);

    // Handle note played from instrument click
    const handleNotePlay = useCallback((fullNote: string) => {
        if (!step) return;

        if (step.type === "practice" && step.expectedNote) {
            setTotalAttempts(prev => prev + 1);

            if (fullNote === step.expectedNote) {
                // Correct!
                setCorrectCount(prev => prev + 1);
                setKeyStates({ [fullNote]: { highlighted: false, pressed: false, correct: true, wrong: false } });
                setFeedback(language === "en" ? "Perfect! 🎵" : "बिल्कुल सही! 🎵");

                // Auto-advance after delay
                setTimeout(() => {
                    goToNext();
                }, 1500);
            } else {
                // Wrong note
                setKeyStates({
                    [fullNote]: { highlighted: false, pressed: false, correct: false, wrong: true },
                });
                setFeedback(language === "en" ? "Try again! Click the highlighted key." : "फिर कोशिश करें!");

                setTimeout(() => {
                    setKeyStates({});
                    setFeedback("");
                }, 1000);
            }
        } else if (step.type === "sequence" && step.sequence) {
            const expectedNote = step.sequence[sequenceIndex];
            setTotalAttempts(prev => prev + 1);

            if (fullNote === expectedNote) {
                // Correct note in sequence!
                setCorrectCount(prev => prev + 1);
                setKeyStates({ [fullNote]: { highlighted: false, pressed: false, correct: true, wrong: false } });

                const nextIndex = sequenceIndex + 1;
                if (nextIndex >= step.sequence.length) {
                    // Completed the sequence!
                    setFeedback(language === "en" ? "Sequence complete! 🎉" : "अनुक्रम पूर्ण! 🎉");
                    setTimeout(() => {
                        goToNext();
                    }, 1500);
                } else {
                    setSequenceIndex(nextIndex);
                    const indianLabel = step.indianSequence?.[nextIndex] || step.sequence[nextIndex];
                    setFeedback(language === "en" ? `Good! Next: ${indianLabel}` : `शाबाश! अगला: ${indianLabel}`);
                }
            } else {
                // Wrong note
                setKeyStates({
                    [fullNote]: { highlighted: false, pressed: false, correct: false, wrong: true },
                });
                const indianLabel = step.indianSequence?.[sequenceIndex] || expectedNote;
                setFeedback(language === "en" ? `Try: ${indianLabel}` : `कोशिश करें: ${indianLabel}`);

                setTimeout(() => {
                    setKeyStates({});
                }, 800);
            }
        }
    }, [step, language, goToNext, sequenceIndex]);

    // Get highlighted notes for current step
    const getHighlightedNotes = useCallback((): string[] => {
        if (!step) return [];
        if (step.highlightKey) {
            return [step.highlightKey];
        }
        if (step.sequence && step.sequence.length > 0) {
            // Only highlight the current note in the sequence
            const currentNote = step.sequence[sequenceIndex];
            return currentNote ? [currentNote] : [];
        }
        return [];
    }, [step, sequenceIndex]);

    // Convert note to guitar fret position (find first valid position)
    const GUITAR_TUNING = ["E4", "B3", "G3", "D3", "A2", "E2"];
    const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

    const noteToMidi = (note: string): number => {
        const match = note.match(/([A-G]#?)(\d)/);
        if (!match) return 0;
        const [, noteName, octave] = match;
        return NOTES.indexOf(noteName) + (parseInt(octave) + 1) * 12;
    };

    const getGuitarPositions = useCallback((notes: string[]): { string: number; fret: number }[] => {
        const positions: { string: number; fret: number }[] = [];
        for (const note of notes) {
            const targetMidi = noteToMidi(note);
            // Find the first string/fret combination that produces this note
            for (let stringIdx = 0; stringIdx < GUITAR_TUNING.length; stringIdx++) {
                const openMidi = noteToMidi(GUITAR_TUNING[stringIdx]);
                const fret = targetMidi - openMidi;
                if (fret >= 0 && fret <= 12) {
                    positions.push({ string: stringIdx, fret: fret === 0 ? 1 : fret });
                    break;
                }
            }
        }
        return positions;
    }, []);

    // Convert note to ukulele fret position
    const UKULELE_TUNING = ["G4", "C4", "E4", "A4"];

    const getUkulelePositions = useCallback((notes: string[]): { string: number; fret: number }[] => {
        const positions: { string: number; fret: number }[] = [];
        for (const note of notes) {
            const targetMidi = noteToMidi(note);
            for (let stringIdx = 0; stringIdx < UKULELE_TUNING.length; stringIdx++) {
                const openMidi = noteToMidi(UKULELE_TUNING[stringIdx]);
                const fret = targetMidi - openMidi;
                if (fret >= 0 && fret <= 12) {
                    positions.push({ string: stringIdx, fret: fret === 0 ? 1 : fret });
                    break;
                }
            }
        }
        return positions;
    }, []);

    // Convert note to violin position
    const VIOLIN_TUNING = ["E5", "A4", "D4", "G3"];
    const getViolinPositions = useCallback((notes: string[]): { string: number; position: number }[] => {
        const positions: { string: number; position: number }[] = [];
        for (const note of notes) {
            const targetMidi = noteToMidi(note);
            for (let stringIdx = 0; stringIdx < VIOLIN_TUNING.length; stringIdx++) {
                const openMidi = noteToMidi(VIOLIN_TUNING[stringIdx]);
                const pos = targetMidi - openMidi;
                if (pos >= 0 && pos <= 8) {
                    positions.push({ string: stringIdx, position: pos });
                    break;
                }
            }
        }
        return positions;
    }, []);

    // Get highlighted note for flute
    const getHighlightedFluteNote = useCallback((): string | undefined => {
        const notes = getHighlightedNotes();
        return notes.length > 0 ? notes[0] : undefined;
    }, [getHighlightedNotes]);

    // Calculate accuracy
    const accuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;

    if (!step) {
        return (
            <main className="lesson-page">
                <div className="error-message">
                    <h1>Lesson not found</h1>
                    <Link href="/" className="btn btn-primary">Go Home</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="lesson-page">
            {/* Header */}
            <header className="lesson-header">
                <div className="lesson-info">
                    <Link href="/" className="back-link">← Back</Link>
                    <div className="lesson-badges">
                        <span className="lesson-badge">
                            {instrument === "harmonium" && "🪗"}
                            {instrument === "piano" && "🎹"}
                            {instrument === "guitar" && "🎸"}
                            {instrument === "ukulele" && "🪕"}
                            {instrument === "flute" && "🎺"}
                            {" "}Lesson {lessonId?.replace("lesson-", "")}
                        </span>
                        <span className={`level-badge level-${level}`}>
                            {level === "beginner" && "🌱 Beginner"}
                            {level === "intermediate" && "🌿 Intermediate"}
                            {level === "advanced" && "🌳 Advanced"}
                        </span>
                    </div>
                    <h1>{language === "en" ? lesson.titleEn : lesson.titleHi}</h1>
                </div>
                <div className="lesson-progress">
                    <span>Step {currentStep + 1} of {lesson.steps.length}</span>
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${((currentStep + 1) / lesson.steps.length) * 100}%` }}
                        />
                    </div>
                </div>
            </header>

            {/* Step content */}
            <section className="step-content">
                <div className="step-header">
                    <h2>{language === "en" ? step.titleEn : step.titleHi}</h2>
                    {step.contentEn && (
                        <p className="step-description">
                            {language === "en" ? step.contentEn : step.contentHi}
                        </p>
                    )}
                </div>

                {/* Demo step */}
                {step.type === "demo" && (
                    <div className="demo-controls">
                        <button className="btn btn-primary btn-lg" onClick={playDemo}>
                            ▶ Play Demo
                        </button>
                        <p className="hint">Click the button to hear the note, then click Next</p>
                    </div>
                )}

                {/* Practice step */}
                {step.type === "practice" && (
                    <div className="practice-controls">
                        <p className="practice-hint">
                            {language === "en"
                                ? "Click the highlighted key on the instrument below"
                                : "नीचे वाद्य पर हाइलाइट की गई key पर क्लिक करें"}
                        </p>
                    </div>
                )}

                {/* Sequence step */}
                {step.type === "sequence" && step.sequence && (
                    <div className="sequence-controls">
                        <p className="hint">
                            {language === "en" ? "Play the sequence in order:" : "क्रम में बजाएं:"}
                        </p>
                        <div className="sequence-notes">
                            {step.indianSequence?.map((note, idx) => (
                                <span
                                    key={idx}
                                    className={`sequence-note ${idx < sequenceIndex ? 'done' : ''} ${idx === sequenceIndex ? 'current' : ''}`}
                                >
                                    {note}
                                </span>
                            )) || step.sequence.map((note, idx) => (
                                <span
                                    key={idx}
                                    className={`sequence-note ${idx < sequenceIndex ? 'done' : ''} ${idx === sequenceIndex ? 'current' : ''}`}
                                >
                                    {note}
                                </span>
                            ))}
                        </div>
                        <p className="sequence-progress">
                            {sequenceIndex}/{step.sequence.length} notes
                        </p>
                    </div>
                )}

                {/* Completion step */}
                {step.type === "complete" && (() => {
                    // Save progress when lesson is completed
                    if (!lessonCompleted) {
                        const practiceMinutes = Math.round((Date.now() - lessonStartTime.current) / 60000);
                        saveProgress(instrument, lessonId, level, accuracy);
                        addPracticeTime(practiceMinutes > 0 ? practiceMinutes : 1);
                        setLessonCompleted(true);
                    }
                    return (
                        <div className="complete-content">
                            <div className="complete-icon">🏆</div>
                            <h2 className="complete-title">{language === "en" ? step.titleEn : step.titleHi}</h2>

                            <div className="complete-stats">
                                <div className="stat-circle">
                                    <span className="stat-value">{accuracy}%</span>
                                    <span className="stat-label">Accuracy</span>
                                </div>
                            </div>

                            <div className="complete-actions">
                                <Link
                                    href={`/learn/${instrument}/lesson-${parseInt(lessonId.replace("lesson-", "")) + 1}?level=${level}&lang=${language}`}
                                    className="btn btn-primary btn-lg"
                                >
                                    Next Lesson →
                                </Link>
                                <button
                                    onClick={() => {
                                        setCurrentStep(0);
                                        setCorrectCount(0);
                                        setTotalAttempts(0);
                                        setSequenceIndex(0);
                                        setFeedback("");
                                    }}
                                    className="btn btn-outline"
                                >
                                    Replay
                                </button>
                                <Link href="/" className="btn btn-ghost">
                                    Home
                                </Link>
                            </div>
                        </div>
                    );
                })()}
            </section>

            {/* Instrument */}
            {step.type !== "complete" && (
                <section className="instrument-section">
                    {instrument === "harmonium" && (
                        <Harmonium
                            octaves={2}
                            highlightedNotes={getHighlightedNotes()}
                            keyStates={keyStates}
                            onNotePlay={handleNotePlay}
                        />
                    )}
                    {instrument === "piano" && (
                        <Piano
                            octaves={2}
                            highlightedNotes={getHighlightedNotes()}
                            keyStates={keyStates}
                            onNotePlay={handleNotePlay}
                        />
                    )}
                    {instrument === "guitar" && (
                        <Guitar
                            frets={12}
                            highlightedPositions={getGuitarPositions(getHighlightedNotes())}
                            onNotePlay={(s, f, note) => handleNotePlay(note)}
                        />
                    )}
                    {instrument === "ukulele" && (
                        <Ukulele
                            frets={12}
                            highlightedPositions={getUkulelePositions(getHighlightedNotes())}
                            onNotePlay={(s, f, note) => handleNotePlay(note)}
                        />
                    )}
                    {instrument === "flute" && (
                        <Flute
                            highlightedNote={getHighlightedFluteNote()}
                            onNotePlay={(note) => handleNotePlay(note)}
                            showFingeringChart={true}
                        />
                    )}
                    {instrument === "violin" && (
                        <Violin
                            highlightedPositions={getViolinPositions(getHighlightedNotes())}
                            onNotePlay={(s, p, note) => handleNotePlay(note)}
                        />
                    )}
                    {instrument === "tabla" && (
                        <Tabla
                            highlightedBol={getHighlightedNotes()[0]}
                            onBolPlay={(bol) => handleNotePlay(bol)}
                        />
                    )}
                    {instrument === "drums" && (
                        <Drums
                            highlightedDrum={getHighlightedNotes()[0]}
                            onDrumPlay={(drum) => handleNotePlay(drum)}
                        />
                    )}
                    {instrument === "saxophone" && (
                        <Saxophone
                            highlightedNote={getHighlightedNotes()[0]}
                            onNotePlay={(note) => handleNotePlay(note)}
                        />
                    )}
                </section>
            )}

            {/* Feedback display */}
            {feedback && (
                <div className="feedback-toast">
                    <span className="feedback-message">{feedback}</span>
                </div>
            )}


            {/* Navigation - hide on completion step */}
            {step.type !== "complete" && (
                <nav className="lesson-nav">
                    <button
                        className="btn btn-ghost"
                        disabled={currentStep === 0}
                        onClick={goToPrev}
                    >
                        ← Previous
                    </button>
                    <button
                        className="btn btn-primary"
                        disabled={currentStep >= lesson.steps.length - 1}
                        onClick={goToNext}
                    >
                        Next →
                    </button>
                </nav>
            )}

            <style jsx>{`
        .lesson-page {
          min-height: 100vh;
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
        }

        .lesson-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-6);
          flex-wrap: wrap;
          gap: var(--space-4);
        }

        .back-link {
          display: block;
          font-size: var(--text-sm);
          color: var(--text-muted);
          margin-bottom: var(--space-2);
        }

        .lesson-badges {
          display: flex;
          gap: var(--space-2);
          flex-wrap: wrap;
          margin-bottom: var(--space-2);
        }

        .lesson-badge {
          display: inline-block;
          padding: var(--space-1) var(--space-3);
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
        }

        .level-badge {
          display: inline-block;
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
          font-size: var(--text-sm);
          font-weight: 600;
        }

        .level-beginner {
          background: linear-gradient(135deg, rgba(76, 175, 80, 0.2), rgba(76, 175, 80, 0.1));
          border: 1px solid rgba(76, 175, 80, 0.5);
          color: #81c784;
        }

        .level-intermediate {
          background: linear-gradient(135deg, rgba(255, 152, 0, 0.2), rgba(255, 152, 0, 0.1));
          border: 1px solid rgba(255, 152, 0, 0.5);
          color: #ffb74d;
        }

        .level-advanced {
          background: linear-gradient(135deg, rgba(156, 39, 176, 0.2), rgba(156, 39, 176, 0.1));
          border: 1px solid rgba(156, 39, 176, 0.5);
          color: #ce93d8;
        }

        .lesson-info h1 {
          font-size: var(--text-2xl);
        }

        .lesson-progress {
          text-align: right;
        }

        .lesson-progress span {
          font-size: var(--text-sm);
          color: var(--text-muted);
        }

        .progress-bar {
          width: 200px;
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          margin-top: var(--space-2);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--gradient-primary);
          transition: width var(--transition-normal);
        }

        .step-content {
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .step-header h2 {
          margin-bottom: var(--space-3);
        }

        .step-description {
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .demo-controls,
        .practice-controls,
        .sequence-controls {
          margin-top: var(--space-6);
        }

        .hint {
          margin-top: var(--space-3);
          font-size: var(--text-sm);
          color: var(--text-muted);
        }

        .practice-hint {
          font-size: var(--text-lg);
          color: var(--color-primary-light);
        }

        .sequence-notes {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-2);
          margin: var(--space-4) 0;
        }

        .sequence-note {
          padding: var(--space-2) var(--space-4);
          background: var(--bg-tertiary);
          border: 2px solid var(--glass-border);
          border-radius: var(--radius-lg);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .sequence-note.done {
          background: rgba(76, 175, 80, 0.2);
          border-color: rgba(76, 175, 80, 0.5);
          color: #81c784;
        }

        .sequence-note.current {
          background: var(--gradient-primary);
          border-color: var(--color-primary);
          color: white;
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(var(--color-primary-rgb), 0.4);
        }

        .sequence-progress {
          font-size: var(--text-sm);
          color: var(--text-muted);
          margin-top: var(--space-2);
        }

        .complete-content {
          padding: var(--space-8) 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .complete-icon {
          font-size: 4rem;
          margin-bottom: var(--space-2);
        }

        .complete-title {
          font-size: var(--text-xl);
          font-weight: 600;
          margin-bottom: var(--space-6);
          color: var(--text-primary);
        }

        .complete-stats {
          margin-bottom: var(--space-6);
        }

        .stat-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: var(--gradient-primary);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(var(--color-primary-rgb), 0.3);
        }

        .stat-circle .stat-value {
          font-size: var(--text-2xl);
          font-weight: 700;
          color: white;
        }

        .stat-circle .stat-label {
          font-size: var(--text-xs);
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .complete-actions {
          display: flex;
          gap: var(--space-3);
          margin-top: var(--space-4);
        }


        .instrument-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow-x: auto;
          padding: var(--space-4) 0;
        }

        .feedback-toast {
          position: fixed;
          bottom: 100px;
          left: 50%;
          transform: translateX(-50%);
          padding: var(--space-4) var(--space-6);
          background: var(--bg-elevated);
          border: 2px solid var(--color-primary);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          z-index: var(--z-toast);
          animation: fadeIn 0.3s ease-out;
        }

        .feedback-message {
          font-size: var(--text-lg);
          font-weight: 600;
        }

        .lesson-nav {
          display: flex;
          justify-content: center;
          gap: var(--space-4);
          padding: var(--space-4) 0;
          border-top: 1px solid var(--glass-border);
        }

        .error-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 50vh;
          gap: var(--space-6);
        }

        @media (max-width: 768px) {
          .lesson-header {
            flex-direction: column;
          }

          .lesson-progress {
            text-align: left;
          }

          .progress-bar {
            width: 100%;
          }
        }
      `}</style>
        </main>
    );
}

export default function LessonPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#0F0A1A]">Loading...</div>}>
            <LessonContent />
        </Suspense>
    );
}
