/**
 * Timing and Flow Analyzer for Music Practice
 * Analyzes rhythm, tempo consistency, and note duration
 */

export interface TimingEvent {
    note: string;
    timestamp: number;
    duration: number;
}

export interface FlowAnalysis {
    averageTempo: number; // BPM
    tempoConsistency: number; // 0-1, higher is more consistent
    rhythmScore: number; // 0-100
    noteTimings: TimingEvent[];
    feedback: FlowFeedback[];
}

export interface FlowFeedback {
    type: "too_fast" | "too_slow" | "inconsistent" | "good" | "excellent";
    message: string;
    messageHi: string;
}

class TimingAnalyzer {
    private noteHistory: TimingEvent[] = [];
    private lastNoteTime: number = 0;
    private expectedTempo: number = 60; // Default 60 BPM
    private tempoTolerance: number = 0.3; // 30% tolerance

    /**
     * Set expected tempo for practice
     */
    setExpectedTempo(bpm: number): void {
        this.expectedTempo = bpm;
    }

    /**
     * Set tempo tolerance (0-1)
     */
    setTempoTolerance(tolerance: number): void {
        this.tempoTolerance = Math.max(0, Math.min(1, tolerance));
    }

    /**
     * Record a note being played
     */
    recordNote(note: string): void {
        const now = Date.now();
        const duration = this.lastNoteTime > 0 ? now - this.lastNoteTime : 0;

        this.noteHistory.push({
            note,
            timestamp: now,
            duration,
        });

        this.lastNoteTime = now;

        // Keep only last 50 notes for analysis
        if (this.noteHistory.length > 50) {
            this.noteHistory.shift();
        }
    }

    /**
     * Clear recorded history
     */
    reset(): void {
        this.noteHistory = [];
        this.lastNoteTime = 0;
    }

    /**
     * Get timing intervals between notes
     */
    private getIntervals(): number[] {
        if (this.noteHistory.length < 2) return [];

        return this.noteHistory.slice(1).map((event) => event.duration);
    }

    /**
     * Calculate average tempo from intervals
     */
    private calculateAverageTempo(): number {
        const intervals = this.getIntervals();
        if (intervals.length === 0) return 0;

        const avgInterval =
            intervals.reduce((sum, i) => sum + i, 0) / intervals.length;
        // Convert ms interval to BPM (60000ms per minute)
        return avgInterval > 0 ? 60000 / avgInterval : 0;
    }

    /**
     * Calculate tempo consistency (standard deviation based)
     */
    private calculateTempoConsistency(): number {
        const intervals = this.getIntervals();
        if (intervals.length < 2) return 1;

        const mean = intervals.reduce((sum, i) => sum + i, 0) / intervals.length;
        const variance =
            intervals.reduce((sum, i) => sum + Math.pow(i - mean, 2), 0) /
            intervals.length;
        const stdDev = Math.sqrt(variance);

        // Convert to 0-1 score (lower stdDev = higher consistency)
        // Using coefficient of variation
        const cv = mean > 0 ? stdDev / mean : 0;
        return Math.max(0, 1 - cv);
    }

    /**
     * Generate flow feedback based on analysis
     */
    private generateFeedback(
        avgTempo: number,
        consistency: number
    ): FlowFeedback[] {
        const feedback: FlowFeedback[] = [];
        const expectedBeatInterval = 60000 / this.expectedTempo;
        const actualBeatInterval = avgTempo > 0 ? 60000 / avgTempo : 0;

        // Check tempo
        if (actualBeatInterval > 0) {
            const tempoRatio = actualBeatInterval / expectedBeatInterval;

            if (tempoRatio < 1 - this.tempoTolerance) {
                feedback.push({
                    type: "too_fast",
                    message: "You're playing a bit too fast. Try to slow down.",
                    messageHi: "आप थोड़ा तेज़ बजा रहे हैं। धीरे बजाने की कोशिश करें।",
                });
            } else if (tempoRatio > 1 + this.tempoTolerance) {
                feedback.push({
                    type: "too_slow",
                    message: "You're playing a bit slowly. Try to pick up the pace.",
                    messageHi: "आप थोड़ा धीरे बजा रहे हैं। गति बढ़ाने की कोशिश करें।",
                });
            }
        }

        // Check consistency
        if (consistency < 0.5) {
            feedback.push({
                type: "inconsistent",
                message:
                    "Your rhythm is uneven. Try to maintain a steady pace between notes.",
                messageHi:
                    "आपकी लय असमान है। नोट्स के बीच एक स्थिर गति बनाए रखने की कोशिश करें।",
            });
        } else if (consistency >= 0.8 && avgTempo > 0) {
            feedback.push({
                type: "excellent",
                message: "Excellent rhythm! Your timing is very consistent.",
                messageHi: "उत्कृष्ट लय! आपका समय बहुत सुसंगत है।",
            });
        } else if (consistency >= 0.6) {
            feedback.push({
                type: "good",
                message: "Good timing! Keep practicing for even better consistency.",
                messageHi:
                    "अच्छा समय! और भी बेहतर सुसंगतता के लिए अभ्यास जारी रखें।,",
            });
        }

        return feedback;
    }

    /**
     * Analyze the current flow and timing
     */
    analyze(): FlowAnalysis {
        const avgTempo = this.calculateAverageTempo();
        const consistency = this.calculateTempoConsistency();
        const feedback = this.generateFeedback(avgTempo, consistency);

        // Calculate rhythm score (0-100)
        const tempoScore = avgTempo > 0 ? Math.min(100, (avgTempo / 120) * 100) : 0;
        const rhythmScore = Math.round((tempoScore * 0.3 + consistency * 100 * 0.7));

        return {
            averageTempo: Math.round(avgTempo),
            tempoConsistency: Math.round(consistency * 100) / 100,
            rhythmScore,
            noteTimings: [...this.noteHistory],
            feedback,
        };
    }

    /**
     * Get the most recent timing event
     */
    getLastTiming(): TimingEvent | null {
        return this.noteHistory.length > 0
            ? this.noteHistory[this.noteHistory.length - 1]
            : null;
    }

    /**
     * Check if the last note was played in time
     */
    isOnBeat(toleranceMs: number = 100): boolean {
        if (this.noteHistory.length < 2) return true;

        const expectedInterval = 60000 / this.expectedTempo;
        const lastInterval =
            this.noteHistory[this.noteHistory.length - 1].duration;

        return Math.abs(lastInterval - expectedInterval) <= toleranceMs;
    }
}

// Singleton instance
let analyzerInstance: TimingAnalyzer | null = null;

/**
 * Get the timing analyzer instance
 */
export function getTimingAnalyzer(): TimingAnalyzer {
    if (!analyzerInstance) {
        analyzerInstance = new TimingAnalyzer();
    }
    return analyzerInstance;
}
