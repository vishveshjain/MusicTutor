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
const STRING_COLORS = ["#e8e0d0", "#d4c8b0", "#c8b890", "#b8a878"];
const POSITIONS = 8; // Finger positions on the fingerboard

const NOTES_MAP = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function getNoteFromPosition(openNote: string, position: number): string {
    const match = openNote.match(/([A-G]#?)(\d)/);
    if (!match) return openNote;

    const [, note, octaveStr] = match;
    let octave = parseInt(octaveStr);

    const noteIndex = NOTES_MAP.indexOf(note);
    const newNoteIndex = (noteIndex + position) % 12;
    octave += Math.floor((noteIndex + position) / 12);

    return `${NOTES_MAP[newNoteIndex]}${octave}`;
}

function getNoteName(openNote: string, position: number): string {
    const note = getNoteFromPosition(openNote, position);
    return note.replace(/\d/, "");
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

        if (position === 0) classes.push(styles.openString);

        if (pressedPositions.has(posKey) || state.pressed) {
            classes.push(styles.pressed);
        }

        const isHighlighted = highlightedPositions.some(
            (p) => p.string === stringIndex && p.position === position
        );
        if (isHighlighted || state.highlighted) {
            classes.push(styles.highlighted);
        }
        if (state.correct) classes.push(styles.correct);
        if (state.wrong) classes.push(styles.wrong);

        return classes.join(" ");
    };

    return (
        <div className={styles.violin}>
            <div className={styles.violinContainer}>
                {isLoading && (
                    <div className={styles.loading}>Loading violin...</div>
                )}

                {/* Scroll (decorative top) */}
                <div className={styles.scroll}>
                    <div className={styles.scrollSpiral} />
                </div>

                {/* Peg box */}
                <div className={styles.pegBox}>
                    <div className={styles.pegsLeft}>
                        <div className={styles.peg} title="E string" />
                        <div className={styles.peg} title="A string" />
                    </div>
                    <div className={styles.pegBoxCenter} />
                    <div className={styles.pegsRight}>
                        <div className={styles.peg} title="D string" />
                        <div className={styles.peg} title="G string" />
                    </div>
                </div>

                {/* Nut */}
                <div className={styles.nut} />

                {/* Fingerboard with strings */}
                <div className={styles.fingerboard}>
                    {/* String lines (visual) */}
                    <div className={styles.stringLines}>
                        {STRING_TUNING.map((_, i) => (
                            <div
                                key={i}
                                className={styles.stringLine}
                                style={{
                                    background: STRING_COLORS[i],
                                    width: `${1 + i * 0.5}px`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Finger positions grid */}
                    <div className={styles.positionGrid}>
                        {Array.from({ length: POSITIONS }).map((_, posIndex) => (
                            <div key={posIndex} className={styles.positionRow}>
                                {STRING_TUNING.map((_, stringIndex) => (
                                    <div
                                        key={stringIndex}
                                        className={getPositionClassName(stringIndex, posIndex)}
                                        onClick={() => handlePress(stringIndex, posIndex)}
                                    >
                                        {showLabels && (
                                            <span className={styles.posLabel}>
                                                {posIndex === 0 ? "○" : getNoteName(STRING_TUNING[stringIndex], posIndex)}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upper bout */}
                <div className={styles.upperBout} />

                {/* C-bout (waist) with f-holes */}
                <div className={styles.cBout}>
                    <div className={styles.fHoleLeft}>𝑓</div>
                    <div className={styles.fHoleRight}>𝑓</div>
                </div>

                {/* Bridge */}
                <div className={styles.bridge} />

                {/* Lower bout */}
                <div className={styles.lowerBout}>
                    {/* Tailpiece */}
                    <div className={styles.tailpiece}>
                        <div className={styles.fineTuners}>
                            {STRING_NAMES.map((_, i) => (
                                <div key={i} className={styles.fineTuner} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Chin rest */}
                <div className={styles.chinRest} />

                {/* String labels */}
                {showLabels && (
                    <div className={styles.stringLabels}>
                        {STRING_NAMES.map((name, i) => (
                            <span key={i} className={styles.stringName}>{name}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Violin;
