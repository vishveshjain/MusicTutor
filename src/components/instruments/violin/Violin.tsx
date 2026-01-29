"use client";

import React, { useState, useCallback, useEffect } from "react";
import styles from "./violin.module.css";
import { getSoundPlayer } from "@/lib/audio/sound-player";

export interface FretState {
    pressed: boolean;
    highlighted: boolean;
    correct: boolean;
    wrong: boolean;
}

export interface ViolinProps {
    highlightedPositions?: { string: number; position: number }[];
    onNotePlay?: (string: number, position: number, note: string) => void;
    fretStates?: Record<string, FretState>;
    showLabels?: boolean;
    interactive?: boolean;
}

// Violin strings (from high to low): E5, A4, D4, G3
const STRING_TUNING = ["E5", "A4", "D4", "G3"];
const STRING_NAMES = ["E", "A", "D", "G"];
const POSITIONS = 8; // Finger positions on the fingerboard

const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function getNoteFromPosition(openNote: string, position: number): string {
    const match = openNote.match(/([A-G]#?)(\d)/);
    if (!match) return openNote;

    const [, note, octaveStr] = match;
    let octave = parseInt(octaveStr);

    const noteIndex = NOTES.indexOf(note);
    let newNoteIndex = (noteIndex + position) % 12;
    octave += Math.floor((noteIndex + position) / 12);

    return `${NOTES[newNoteIndex]}${octave}`;
}

export function Violin({
    highlightedPositions = [],
    onNotePlay,
    fretStates = {},
    showLabels = true,
    interactive = true,
}: ViolinProps) {
    const [pressedPositions, setPressedPositions] = useState<Set<string>>(new Set());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preload = async () => {
            try {
                const player = getSoundPlayer();
                await player.loadInstrument("violin");
                setIsLoading(false);
            } catch (error) {
                console.error("[Violin] Failed to preload:", error);
                setIsLoading(false);
            }
        };
        preload();
    }, []);

    const handlePress = useCallback(
        async (stringIndex: number, position: number) => {
            if (!interactive) return;

            const posKey = `${stringIndex}-${position}`;
            const openNote = STRING_TUNING[stringIndex];
            const note = getNoteFromPosition(openNote, position);

            setPressedPositions((prev) => new Set(prev).add(posKey));

            const player = getSoundPlayer();
            await player.playNote("violin", note, 1.5);

            if (onNotePlay) {
                onNotePlay(stringIndex, position, note);
            }

            setTimeout(() => {
                setPressedPositions((prev) => {
                    const next = new Set(prev);
                    next.delete(posKey);
                    return next;
                });
            }, 600);
        },
        [interactive, onNotePlay]
    );

    const getPositionClassName = (stringIndex: number, position: number) => {
        const posKey = `${stringIndex}-${position}`;
        const state = fretStates[posKey] || {};
        const classes = [styles.position];

        if (pressedPositions.has(posKey) || state.pressed) {
            classes.push(styles.pressed);
        }

        const isHighlighted = highlightedPositions.some(
            (p) => p.string === stringIndex && p.position === position
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
        <div className={styles.violin}>
            <div className={styles.violinContainer}>
                {isLoading && (
                    <div className={styles.loading}>Loading sounds...</div>
                )}

                {/* Scroll (head) */}
                <div className={styles.scroll}>
                    <div className={styles.pegBox}>
                        {STRING_NAMES.map((name, i) => (
                            <div key={i} className={styles.peg} title={`${name} string`} />
                        ))}
                    </div>
                </div>

                {/* Fingerboard */}
                <div className={styles.fingerboard}>
                    {/* Strings */}
                    <div className={styles.strings}>
                        {STRING_TUNING.map((_, stringIndex) => (
                            <div key={stringIndex} className={styles.stringLine}>
                                {/* String label */}
                                {showLabels && (
                                    <span className={styles.stringLabel}>
                                        {STRING_NAMES[stringIndex]}
                                    </span>
                                )}

                                {/* Finger positions */}
                                {Array.from({ length: POSITIONS }).map((_, posIndex) => (
                                    <div
                                        key={posIndex}
                                        className={getPositionClassName(stringIndex, posIndex)}
                                        onClick={() => handlePress(stringIndex, posIndex)}
                                    >
                                        {showLabels && posIndex === 0 && (
                                            <span className={styles.posLabel}>Open</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Body */}
                <div className={styles.body}>
                    <div className={styles.fHole} />
                    <div className={styles.bridge} />
                    <div className={styles.fHoleRight} />
                    <div className={styles.tailpiece} />
                </div>
            </div>
        </div>
    );
}

export default Violin;
