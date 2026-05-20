"use client";

import React, { useState, useCallback, useEffect } from "react";
import styles from "./guitar.module.css";
import { getSoundPlayer } from "@/lib/audio/sound-player";

export interface FretState {
    pressed: boolean;
    highlighted: boolean;
    correct: boolean;
    wrong: boolean;
}

export interface GuitarProps {
    frets?: number;
    highlightedPositions?: { string: number; fret: number }[];
    highlightedNote?: string;
    onNotePlay?: (string: number, fret: number, note: string) => void;
    fretStates?: Record<string, FretState>;
    showLabels?: boolean;
    interactive?: boolean;
}

// Standard guitar tuning (high to low): E4, B3, G3, D3, A2, E2
const STANDARD_TUNING = ["E4", "B3", "G3", "D3", "A2", "E2"];
const STRING_LABELS = ["e", "B", "G", "D", "A", "E"];

// Note sequence
const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function getNoteFromFret(openNote: string, fret: number): string {
    const match = openNote.match(/([A-G]#?)(\d)/);
    if (!match) return openNote;

    const [, note, octaveStr] = match;
    let octave = parseInt(octaveStr);

    const noteIndex = NOTES.indexOf(note);
    let newNoteIndex = (noteIndex + fret) % 12;
    octave += Math.floor((noteIndex + fret) / 12);

    return `${NOTES[newNoteIndex]}${octave}`;
}

// Fret markers
const FRET_MARKERS = [3, 5, 7, 9, 12, 15, 17, 19, 21];
const DOUBLE_MARKERS = [12];

export function Guitar({
    frets = 14,
    highlightedPositions = [],
    highlightedNote,
    onNotePlay,
    fretStates = {},
    showLabels = true,
    interactive = true,
}: GuitarProps) {
    const [pressedPositions, setPressedPositions] = useState<Set<string>>(new Set());
    const [lastPlayedNote, setLastPlayedNote] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preload = async () => {
            try {
                const player = getSoundPlayer();
                await player.loadInstrument("guitar");
                setIsLoading(false);
            } catch (error) {
                console.error("[Guitar] Failed to preload:", error);
                setIsLoading(false);
            }
        };
        preload();
    }, []);

    const handlePress = useCallback(
        async (stringIndex: number, fretIndex: number) => {
            if (!interactive) return;

            const posKey = `${stringIndex}-${fretIndex}`;
            const openNote = STANDARD_TUNING[stringIndex];
            const note = getNoteFromFret(openNote, fretIndex);

            setPressedPositions((prev) => new Set(prev).add(posKey));
            setLastPlayedNote(note);

            const player = getSoundPlayer();
            await player.playNote("guitar", note, 1.0);

            if (onNotePlay) {
                onNotePlay(stringIndex, fretIndex, note);
            }

            setTimeout(() => {
                setPressedPositions((prev) => {
                    const next = new Set(prev);
                    next.delete(posKey);
                    return next;
                });
            }, 500);
        },
        [interactive, onNotePlay]
    );

    // Keyboard support: keys 1-6 trigger strings
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!interactive) return;
            const key = e.key;
            if (key >= "1" && key <= "6") {
                const stringIndex = parseInt(key) - 1;
                // If this string has a highlighted position, play that fret, else play open
                const targetPos = highlightedPositions.find((p) => p.string === stringIndex);
                const fretIndex = targetPos ? targetPos.fret : 0;
                handlePress(stringIndex, fretIndex);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [interactive, highlightedPositions, handlePress]);

    const getGuitarHint = useCallback(() => {
        if (!highlightedNote) return "Play any string to practice";
        if (highlightedPositions.length === 0) return `Locating ${highlightedNote}...`;

        const pos = highlightedPositions[0];
        const stringName = STRING_LABELS[pos.string];
        const stringNum = pos.string + 1;
        if (pos.fret === 0) {
            return `Play Open String ${stringNum} (${stringName}) [Key ${stringNum}]`;
        }
        return `Press String ${stringNum} (${stringName}) at Fret ${pos.fret} [Key ${stringNum}]`;
    }, [highlightedPositions, highlightedNote]);

    const getCleanNoteName = (noteStr: string | null) => {
        if (!noteStr) return "-";
        return noteStr;
    };

    const isCorrect = lastPlayedNote && highlightedNote && (
        lastPlayedNote === highlightedNote ||
        lastPlayedNote.replace(/\d/, "") === highlightedNote.replace(/\d/, "")
    );

    const getPositionClassName = (stringIndex: number, fretIndex: number) => {
        const posKey = `${stringIndex}-${fretIndex}`;
        const state = fretStates[posKey] || {};
        const classes = [styles.stringPosition];

        if (pressedPositions.has(posKey) || state.pressed) {
            classes.push(styles.pressed);
        }

        const isHighlighted = highlightedPositions.some(
            (p) => p.string === stringIndex && p.fret === fretIndex
        );
        if (isHighlighted || state.highlighted) {
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
        <div className={styles.guitar}>
            {/* Note Tutor Dashboard */}
            <div className={styles.tutorDashboard}>
                <div className={styles.tutorMetric}>
                    <span className={styles.metricLabel}>Target Note</span>
                    <span className={styles.metricValue}>{getCleanNoteName(highlightedNote || null)}</span>
                </div>
                <div className={styles.tutorMetric}>
                    <span className={styles.metricLabel}>Your Note</span>
                    <span className={`${styles.metricValue} ${isCorrect ? styles.tutorCorrect : ""}`}>
                        {getCleanNoteName(lastPlayedNote)}
                    </span>
                </div>
                <div className={styles.tutorHint}>
                    <span className={styles.hintLabel}>Fretboard Guide:</span>
                    <span className={styles.hintValue}>{getGuitarHint()}</span>
                    <span className={styles.keyboardGuide}>Keyboard: Keys 1 to 6 pluck strings</span>
                </div>
            </div>

            <div className={styles.guitarContainer}>
                {isLoading && (
                    <div className={styles.loading}>Loading sounds...</div>
                )}

                {/* Headstock with tuning machines */}
                <div className={styles.headstock}>
                    <span className={styles.brandName}>Music Tutor</span>
                    <div className={styles.tuningMachines}>
                        <div className={styles.tuningRow}>
                            <div className={`${styles.tuningPeg} ${styles.tuningPegLeft}`} title="E string" />
                            <div className={`${styles.tuningPeg} ${styles.tuningPegRight}`} title="e string" />
                        </div>
                        <div className={styles.tuningRow}>
                            <div className={`${styles.tuningPeg} ${styles.tuningPegLeft}`} title="A string" />
                            <div className={`${styles.tuningPeg} ${styles.tuningPegRight}`} title="B string" />
                        </div>
                        <div className={styles.tuningRow}>
                            <div className={`${styles.tuningPeg} ${styles.tuningPegLeft}`} title="D string" />
                            <div className={`${styles.tuningPeg} ${styles.tuningPegRight}`} title="G string" />
                        </div>
                    </div>
                    <div className={styles.nut} />
                </div>

                {/* Neck with fretboard */}
                <div className={styles.neck}>
                    <div className={styles.fretboard}>
                        {/* Open strings (fret 0) */}
                        <div className={`${styles.fret} ${styles.openStringFret}`}>
                            {STANDARD_TUNING.map((_, stringIndex) => (
                                <div
                                    key={stringIndex}
                                    className={getPositionClassName(stringIndex, 0)}
                                    onClick={() => handlePress(stringIndex, 0)}
                                >
                                    <div className={styles.string} />
                                </div>
                            ))}
                            {showLabels && (
                                <span className={styles.fretNumber}>0</span>
                            )}
                        </div>
                        {/* Fretted positions */}
                        {Array.from({ length: frets }).map((_, fretIndex) => (
                            <div key={fretIndex} className={styles.fret}>
                                {STANDARD_TUNING.map((_, stringIndex) => (
                                    <div
                                        key={stringIndex}
                                        className={getPositionClassName(stringIndex, fretIndex + 1)}
                                        onClick={() => handlePress(stringIndex, fretIndex + 1)}
                                    >
                                        <div className={styles.string} />
                                    </div>
                                ))}

                                {FRET_MARKERS.includes(fretIndex + 1) && (
                                    <div className={`${styles.fretMarker} ${DOUBLE_MARKERS.includes(fretIndex + 1) ? styles.double : ""
                                        }`} />
                                )}

                                {showLabels && (
                                    <span className={styles.fretNumber}>{fretIndex + 1}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* String labels */}
                {showLabels && (
                    <div className={styles.stringLabels}>
                        {STRING_LABELS.map((label, i) => (
                            <span key={i} className={styles.stringLabel}>{label}</span>
                        ))}
                    </div>
                )}

                {/* Guitar body */}
                <div className={styles.guitarBody}>
                    <div className={styles.soundHole} />
                    <div className={styles.pickguard} />

                    <div className={styles.bodyStrings}>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className={styles.bodyString} />
                        ))}
                    </div>

                    <div className={styles.bridge}>
                        <div className={styles.saddle} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guitar;
