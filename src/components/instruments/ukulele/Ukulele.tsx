"use client";

import React, { useState, useCallback, useEffect } from "react";
import styles from "./ukulele.module.css";
import { getSoundPlayer } from "@/lib/audio/sound-player";

export interface FretState {
    pressed: boolean;
    highlighted: boolean;
    correct: boolean;
    wrong: boolean;
}

export interface UkuleleProps {
    frets?: number;
    highlightedPositions?: { string: number; fret: number }[];
    onNotePlay?: (string: number, fret: number, note: string) => void;
    fretStates?: Record<string, FretState>;
    showLabels?: boolean;
    interactive?: boolean;
}

// Standard ukulele tuning (high to low): G4, C4, E4, A4 (re-entrant)
const STANDARD_TUNING = ["G4", "C4", "E4", "A4"];
const STRING_LABELS = ["G", "C", "E", "A"];

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

// Frets with marker dots
const FRET_MARKERS = [3, 5, 7, 10, 12];

export function Ukulele({
    frets = 12,
    highlightedPositions = [],
    onNotePlay,
    fretStates = {},
    showLabels = true,
    interactive = true,
}: UkuleleProps) {
    const [pressedPositions, setPressedPositions] = useState<Set<string>>(new Set());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preload = async () => {
            try {
                const player = getSoundPlayer();
                await player.loadInstrument("ukulele");
                setIsLoading(false);
            } catch (error) {
                console.error("[Ukulele] Failed to preload:", error);
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

            const player = getSoundPlayer();
            await player.playNote("ukulele", note, 0.8);

            if (onNotePlay) {
                onNotePlay(stringIndex, fretIndex, note);
            }

            setTimeout(() => {
                setPressedPositions((prev) => {
                    const next = new Set(prev);
                    next.delete(posKey);
                    return next;
                });
            }, 400);
        },
        [interactive, onNotePlay]
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
        <div className={styles.ukulele}>
            <div className={styles.ukuleleContainer}>
                {isLoading && (
                    <div className={styles.loading}>Loading sounds...</div>
                )}

                {/* Headstock with tuning pegs */}
                <div className={styles.headstock}>
                    <div className={styles.tuningPegs}>
                        <div className={styles.tuningPeg} title="G string" />
                        <div className={styles.tuningPeg} title="A string" />
                    </div>
                    <div className={styles.tuningPegs}>
                        <div className={styles.tuningPeg} title="C string" />
                        <div className={styles.tuningPeg} title="E string" />
                    </div>
                    <div className={styles.nut} />
                </div>

                {/* Neck with fretboard */}
                <div className={styles.neck}>
                    <div className={styles.fretboard}>
                        {Array.from({ length: frets }).map((_, fretIndex) => (
                            <div key={fretIndex} className={styles.fret}>
                                {/* String positions (clickable) */}
                                {STANDARD_TUNING.map((_, stringIndex) => (
                                    <div
                                        key={stringIndex}
                                        className={getPositionClassName(stringIndex, fretIndex + 1)}
                                        onClick={() => handlePress(stringIndex, fretIndex + 1)}
                                    >
                                        <div className={styles.string} />
                                    </div>
                                ))}

                                {/* Fret markers */}
                                {FRET_MARKERS.includes(fretIndex + 1) && (
                                    <div className={styles.fretMarker} />
                                )}

                                {/* Fret number */}
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

                {/* Ukulele body (lower bout with sound hole) */}
                <div className={styles.lowerBout}>
                    <div className={styles.soundHole} />

                    {/* Visual strings on body */}
                    <div className={styles.bodyStrings}>
                        <div className={styles.bodyString} />
                        <div className={styles.bodyString} />
                        <div className={styles.bodyString} />
                        <div className={styles.bodyString} />
                    </div>

                    <div className={styles.bridge}>
                        <div className={styles.saddle} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ukulele;
