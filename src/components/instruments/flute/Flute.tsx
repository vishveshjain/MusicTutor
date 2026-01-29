"use client";

import React, { useState, useCallback, useEffect } from "react";
import styles from "./flute.module.css";
import { getSoundPlayer } from "@/lib/audio/sound-player";

export interface KeyState {
    highlighted: boolean;
    correct: boolean;
    wrong: boolean;
}

export interface FluteProps {
    highlightedNote?: string;
    onNotePlay?: (note: string, fingering: boolean[]) => void;
    keyStates?: Record<number, KeyState>;
    showLabels?: boolean;
    interactive?: boolean;
    showFingeringChart?: boolean;
}

// Flute fingering chart (6 main keys for simplified learning)
const FINGERINGS: Record<string, boolean[]> = {
    "D4": [true, true, true, true, true, true],
    "E4": [true, true, true, true, true, false],
    "F#4": [true, true, true, true, false, false],
    "G4": [true, true, true, false, false, false],
    "A4": [true, true, false, false, false, false],
    "B4": [true, false, false, false, false, false],
    "C5": [false, true, false, false, false, false],
    "D5": [false, true, true, true, true, true],
    "E5": [false, true, true, true, true, false],
    "F#5": [false, true, true, true, false, false],
    "G5": [false, true, true, false, false, false],
    "A5": [false, true, false, false, false, false],
};

const NOTE_NAMES: Record<string, string> = {
    "D4": "D₄", "E4": "E₄", "F#4": "F#₄", "G4": "G₄", "A4": "A₄", "B4": "B₄",
    "C5": "C₅", "D5": "D₅", "E5": "E₅", "F#5": "F#₅", "G5": "G₅", "A5": "A₅",
};

const KEY_LABELS = ["T", "1", "2", "3", "4", "5"];

export function Flute({
    highlightedNote,
    onNotePlay,
    keyStates = {},
    showLabels = true,
    interactive = true,
    showFingeringChart = true,
}: FluteProps) {
    const [pressedKeys, setPressedKeys] = useState<boolean[]>([false, false, false, false, false, false]);
    const [currentNote, setCurrentNote] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preload = async () => {
            try {
                const player = getSoundPlayer();
                await player.loadInstrument("flute");
                setIsLoading(false);
            } catch (error) {
                console.error("[Flute] Failed to preload:", error);
                setIsLoading(false);
            }
        };
        preload();
    }, []);

    // Find note from fingering
    const findNoteFromFingering = useCallback((fingering: boolean[]): string | null => {
        for (const [note, pattern] of Object.entries(FINGERINGS)) {
            if (pattern.every((v, i) => v === fingering[i])) {
                return note;
            }
        }
        return null;
    }, []);

    // Toggle key
    const toggleKey = useCallback(
        async (index: number) => {
            if (!interactive) return;

            const newKeys = [...pressedKeys];
            newKeys[index] = !newKeys[index];
            setPressedKeys(newKeys);

            const note = findNoteFromFingering(newKeys);
            setCurrentNote(note);

            if (note) {
                const player = getSoundPlayer();
                await player.playNote("flute", note, 1.2);

                if (onNotePlay) {
                    onNotePlay(note, newKeys);
                }
            }
        },
        [interactive, pressedKeys, findNoteFromFingering, onNotePlay]
    );

    // Set fingering for note
    const setFingering = useCallback(
        async (note: string) => {
            const pattern = FINGERINGS[note];
            if (pattern) {
                setPressedKeys(pattern);
                setCurrentNote(note);

                const player = getSoundPlayer();
                await player.playNote("flute", note, 1.2);

                if (onNotePlay) {
                    onNotePlay(note, pattern);
                }
            }
        },
        [onNotePlay]
    );

    // Get key class
    const getKeyClassName = (index: number) => {
        const state = keyStates[index] || {};
        const classes = [styles.key];

        if (pressedKeys[index]) {
            classes.push(styles.pressed);
        }

        // Check if this key should be highlighted based on highlightedNote
        const highlightedFingering = highlightedNote ? FINGERINGS[highlightedNote] : null;
        if (highlightedFingering && highlightedFingering[index]) {
            classes.push(styles.highlighted);
        }

        if (state.highlighted) {
            classes.push(styles.highlighted);
        }
        if (state.correct) {
            classes.push(styles.correct);
        }
        if (state.wrong) {
            classes.push(styles.wrong);
        }

        return classes.join(" ");
    };

    return (
        <div className={styles.flute}>
            <div className={styles.fluteContainer}>
                {isLoading && (
                    <div className={styles.loading}>Loading sounds...</div>
                )}

                {/* Flute body */}
                <div className={styles.fluteBody}>
                    {/* Head joint with embouchure */}
                    <div className={styles.headJoint}>
                        <div className={styles.crown} />
                        <div className={styles.embouchurePlate}>
                            <div className={styles.embouchureHole} />
                        </div>
                    </div>

                    {/* Body joint with main keys */}
                    <div className={styles.bodyJoint}>
                        {[0, 1, 2, 3].map((index) => (
                            <div
                                key={index}
                                className={getKeyClassName(index)}
                                onClick={() => toggleKey(index)}
                            >
                                {showLabels && (
                                    <span className={styles.keyLabel}>{KEY_LABELS[index]}</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Foot joint with end keys */}
                    <div className={styles.footJoint}>
                        {[4, 5].map((index) => (
                            <div
                                key={index}
                                className={getKeyClassName(index)}
                                onClick={() => toggleKey(index)}
                            >
                                {showLabels && (
                                    <span className={styles.keyLabel}>{KEY_LABELS[index]}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Current note display */}
                <div className={styles.noteDisplay}>
                    <span className={styles.currentNote}>
                        {currentNote ? NOTE_NAMES[currentNote] || currentNote : "—"}
                    </span>
                    <span className={styles.noteHint}>
                        {currentNote ? "Current fingering" : "Click keys to play"}
                    </span>
                </div>

                {/* Fingering chart */}
                {showFingeringChart && (
                    <div className={styles.fingeringChart}>
                        {Object.entries(FINGERINGS).map(([note, pattern]) => (
                            <div
                                key={note}
                                className={`${styles.fingeringItem} ${currentNote === note ? styles.active : ""}`}
                                onClick={() => setFingering(note)}
                            >
                                <span className={styles.fingeringNoteName}>
                                    {NOTE_NAMES[note]}
                                </span>
                                <div className={styles.fingeringDots}>
                                    {pattern.map((closed, i) => (
                                        <div
                                            key={i}
                                            className={`${styles.fingeringDot} ${closed ? styles.closed : ""}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Flute;
