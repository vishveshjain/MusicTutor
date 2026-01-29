"use client";

import React, { useState, useCallback, useEffect } from "react";
import styles from "./piano.module.css";
import { getSoundPlayer } from "@/lib/audio/sound-player";

export interface KeyState {
    pressed: boolean;
    highlighted: boolean;
    correct: boolean;
    wrong: boolean;
}

export interface PianoProps {
    startOctave?: number;
    octaves?: number;
    highlightedNotes?: string[];
    onNotePlay?: (note: string) => void;
    keyStates?: Record<string, KeyState>;
    showLabels?: boolean;
    interactive?: boolean;
}

// White keys pattern for one octave: C, D, E, F, G, A, B
const WHITE_KEYS = ["C", "D", "E", "F", "G", "A", "B"];

// Black keys pattern
const BLACK_KEY_POSITIONS = [0, 1, 3, 4, 5]; // After C, D, F, G, A
const BLACK_KEYS = ["C#", "D#", "F#", "G#", "A#"];

export function Piano({
    startOctave = 3,
    octaves = 3,
    highlightedNotes = [],
    onNotePlay,
    keyStates = {},
    showLabels = true,
    interactive = true,
}: PianoProps) {
    const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
    const [isLoading, setIsLoading] = useState(true);

    // Preload the piano instrument sounds
    useEffect(() => {
        const preloadInstrument = async () => {
            try {
                const player = getSoundPlayer();
                await player.loadInstrument("piano");
                setIsLoading(false);
                console.log("[Piano] Instrument preloaded");
            } catch (error) {
                console.error("[Piano] Failed to preload instrument:", error);
                setIsLoading(false);
            }
        };
        preloadInstrument();
    }, []);

    // Generate all keys
    const generateKeys = useCallback(() => {
        const whiteKeys: { note: string; octave: number; fullNote: string }[] = [];
        const blackKeys: { note: string; octave: number; fullNote: string; position: number }[] = [];

        for (let oct = startOctave; oct < startOctave + octaves; oct++) {
            WHITE_KEYS.forEach((note, index) => {
                whiteKeys.push({
                    note,
                    octave: oct,
                    fullNote: `${note}${oct}`,
                });

                if (BLACK_KEY_POSITIONS.includes(index)) {
                    const blackKeyIndex = BLACK_KEY_POSITIONS.indexOf(index);
                    const blackNote = BLACK_KEYS[blackKeyIndex];
                    blackKeys.push({
                        note: blackNote,
                        octave: oct,
                        fullNote: `${blackNote}${oct}`,
                        position: whiteKeys.length - 1,
                    });
                }
            });
        }

        // Add final C
        whiteKeys.push({
            note: "C",
            octave: startOctave + octaves,
            fullNote: `C${startOctave + octaves}`,
        });

        return { whiteKeys, blackKeys };
    }, [startOctave, octaves]);

    const { whiteKeys, blackKeys } = generateKeys();

    // Handle key press
    const handleKeyPress = useCallback(
        async (fullNote: string) => {
            if (!interactive) return;

            setPressedKeys((prev) => new Set(prev).add(fullNote));

            // Play sound
            const player = getSoundPlayer();
            await player.playNote("piano", fullNote, 0.6);

            // Callback
            if (onNotePlay) {
                onNotePlay(fullNote);
            }

            // Release
            setTimeout(() => {
                setPressedKeys((prev) => {
                    const next = new Set(prev);
                    next.delete(fullNote);
                    return next;
                });
            }, 200);
        },
        [interactive, onNotePlay]
    );

    // Get key class names
    const getKeyClassName = (fullNote: string, isBlack: boolean) => {
        const baseClass = isBlack ? styles.blackKey : styles.whiteKey;
        const state = keyStates[fullNote] || {};
        const classes = [styles.key, baseClass];

        if (pressedKeys.has(fullNote) || state.pressed) {
            classes.push(styles.pressed);
        }
        if (highlightedNotes.includes(fullNote) || state.highlighted) {
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

    // Keyboard event handling
    useEffect(() => {
        if (!interactive) return;

        const keyMap: Record<string, string> = {
            a: `C${startOctave}`,
            w: `C#${startOctave}`,
            s: `D${startOctave}`,
            e: `D#${startOctave}`,
            d: `E${startOctave}`,
            f: `F${startOctave}`,
            t: `F#${startOctave}`,
            g: `G${startOctave}`,
            y: `G#${startOctave}`,
            h: `A${startOctave}`,
            u: `A#${startOctave}`,
            j: `B${startOctave}`,
            k: `C${startOctave + 1}`,
            o: `C#${startOctave + 1}`,
            l: `D${startOctave + 1}`,
            p: `D#${startOctave + 1}`,
            ";": `E${startOctave + 1}`,
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            const note = keyMap[e.key.toLowerCase()];
            if (note && !pressedKeys.has(note)) {
                handleKeyPress(note);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [interactive, startOctave, pressedKeys, handleKeyPress]);

    return (
        <div className={styles.piano}>
            <div className={styles.pianoBody}>
                {/* Loading overlay */}
                {isLoading && (
                    <div className={styles.loading}>Loading sounds...</div>
                )}

                {/* Piano lid */}
                <div className={styles.pianoLid} />

                {/* Brand area */}
                <div className={styles.brandArea}>
                    Music Tutor
                </div>

                {/* Keyboard */}
                <div className={styles.keyboardContainer}>
                    <div className={styles.keyboard}>
                        {/* White keys */}
                        <div className={styles.whiteKeys}>
                            {whiteKeys.map(({ note, octave, fullNote }) => (
                                <button
                                    key={fullNote}
                                    className={getKeyClassName(fullNote, false)}
                                    onClick={() => handleKeyPress(fullNote)}
                                    aria-label={`Play ${fullNote}`}
                                >
                                    {showLabels && (
                                        <span className={styles.noteLabel}>
                                            {note}
                                            {note === "C" && <sub>{octave}</sub>}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Black keys */}
                        <div className={styles.blackKeys}>
                            {whiteKeys.slice(0, -1).map((_, index) => {
                                const blackKey = blackKeys.find((bk) => bk.position === index);

                                if (!blackKey) {
                                    return (
                                        <div
                                            key={`spacer-${index}`}
                                            className={`${styles.blackKeyWrapper} ${styles.noKey}`}
                                        />
                                    );
                                }

                                return (
                                    <div key={blackKey.fullNote} className={styles.blackKeyWrapper}>
                                        <button
                                            className={getKeyClassName(blackKey.fullNote, true)}
                                            onClick={() => handleKeyPress(blackKey.fullNote)}
                                            aria-label={`Play ${blackKey.fullNote}`}
                                        >
                                            {showLabels && (
                                                <span className={styles.noteLabel}>{blackKey.note}</span>
                                            )}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Pedals */}
                <div className={styles.pedalPanel}>
                    <div className={styles.pedal} title="Soft pedal (Una corda)" />
                    <div className={styles.pedal} title="Sostenuto pedal" />
                    <div className={styles.pedal} title="Sustain pedal (Damper)" />
                </div>
            </div>
        </div>
    );
}

export default Piano;
