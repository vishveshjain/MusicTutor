"use client";

import React, { useState, useCallback, useEffect } from "react";
import styles from "./harmonium.module.css";
import { getSoundPlayer } from "@/lib/audio/sound-player";
import { WESTERN_TO_INDIAN, INDIAN_NOTES } from "@/lib/audio/note-frequencies";

export interface KeyState {
    pressed: boolean;
    highlighted: boolean;
    correct: boolean;
    wrong: boolean;
}

export interface HarmoniumProps {
    startOctave?: number;
    octaves?: number;
    highlightedNotes?: string[];
    onNotePlay?: (note: string, indianNote: string) => void;
    keyStates?: Record<string, KeyState>;
    showLabels?: boolean;
    interactive?: boolean;
}

// White keys pattern for one octave: C, D, E, F, G, A, B
const WHITE_KEYS = ["C", "D", "E", "F", "G", "A", "B"];

// Black keys pattern: positions after C, D, F, G, A (indices 0, 1, 3, 4, 5)
const BLACK_KEY_POSITIONS = [0, 1, 3, 4, 5];
const BLACK_KEYS = ["C#", "D#", "F#", "G#", "A#"];

export function Harmonium({
    startOctave = 3,
    octaves = 3,
    highlightedNotes = [],
    onNotePlay,
    keyStates = {},
    showLabels = true,
    interactive = true,
}: HarmoniumProps) {
    const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
    const [bellowsExpanded, setBellowsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [activeStoppers, setActiveStoppers] = useState<Set<number>>(new Set([0, 2])); // Some stoppers active by default

    // Preload the harmonium instrument sounds
    useEffect(() => {
        const preloadInstrument = async () => {
            try {
                const player = getSoundPlayer();
                await player.loadInstrument("harmonium");
                setIsLoading(false);
                console.log("[Harmonium] Instrument preloaded");
            } catch (error) {
                console.error("[Harmonium] Failed to preload instrument:", error);
                setIsLoading(false);
            }
        };
        preloadInstrument();
    }, []);

    // Generate all keys for the harmonium
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

                // Check if this position has a black key
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

        // Add one more key for the high Sa (C of next octave)
        whiteKeys.push({
            note: "C",
            octave: startOctave + octaves,
            fullNote: `C${startOctave + octaves}`,
        });

        return { whiteKeys, blackKeys };
    }, [startOctave, octaves]);

    const { whiteKeys, blackKeys } = generateKeys();

    // Toggle stopper
    const toggleStopper = (index: number) => {
        setActiveStoppers(prev => {
            const next = new Set(prev);
            if (next.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };

    // Handle key press
    const handleKeyPress = useCallback(
        async (fullNote: string, note: string) => {
            if (!interactive) return;

            setPressedKeys((prev) => new Set(prev).add(fullNote));
            setBellowsExpanded(true);

            // Get Indian note name
            const indianNote = WESTERN_TO_INDIAN[note] || note;
            const indianNoteHindi = INDIAN_NOTES[indianNote as keyof typeof INDIAN_NOTES] || "";

            // Play sound
            const player = getSoundPlayer();
            await player.playNote("harmonium", fullNote, 0.5);

            // Callback
            if (onNotePlay) {
                onNotePlay(fullNote, indianNote);
            }

            // Release after a short time
            setTimeout(() => {
                setPressedKeys((prev) => {
                    const next = new Set(prev);
                    next.delete(fullNote);
                    return next;
                });
                setBellowsExpanded(false);
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

    // Get note label
    const getNoteLabel = (note: string) => {
        const indianNote = WESTERN_TO_INDIAN[note];
        const indianHindi = indianNote ? INDIAN_NOTES[indianNote as keyof typeof INDIAN_NOTES] : "";

        return (
            <span className={styles.noteLabel}>
                {indianNote && <span className={styles.indian}>{indianHindi || indianNote}</span>}
                <span>{note}</span>
            </span>
        );
    };

    // Keyboard event handling
    useEffect(() => {
        if (!interactive) return;

        const keyMap: Record<string, string> = {
            // Lower row - middle octave
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
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            const note = keyMap[e.key.toLowerCase()];
            if (note && !pressedKeys.has(note)) {
                const baseNote = note.replace(/\d/, "");
                handleKeyPress(note, baseNote);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [interactive, startOctave, pressedKeys, handleKeyPress]);

    return (
        <div className={styles.harmonium}>
            <div className={styles.harmoniumBody}>
                {/* Loading overlay */}
                {isLoading && (
                    <div className={styles.loading}>Loading sounds...</div>
                )}

                {/* Bellows - Left side */}
                <div
                    className={`${styles.bellows} ${bellowsExpanded ? styles.expanded : ""}`}
                />

                {/* Main Panel */}
                <div className={styles.mainPanel}>
                    {/* Carved wooden cover */}
                    <div className={styles.carvedCover}>
                        <div className={styles.carvedPattern}>
                            {Array.from({ length: Math.min(octaves * 3 + 2, 8) }).map((_, i) => (
                                <div key={i} className={styles.carvedElement} />
                            ))}
                        </div>
                    </div>

                    {/* Keyboard */}
                    <div className={styles.keyboardContainer}>
                        <div className={styles.keyboard}>
                            {/* White keys */}
                            <div className={styles.whiteKeys}>
                                {whiteKeys.map(({ note, fullNote }) => (
                                    <button
                                        key={fullNote}
                                        className={getKeyClassName(fullNote, false)}
                                        onClick={() => handleKeyPress(fullNote, note)}
                                        aria-label={`Play ${fullNote}`}
                                    >
                                        {showLabels && getNoteLabel(note)}
                                    </button>
                                ))}
                            </div>

                            {/* Black keys */}
                            <div className={styles.blackKeys}>
                                {whiteKeys.slice(0, -1).map(({ fullNote: whiteFullNote }, index) => {
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
                                                onClick={() => handleKeyPress(blackKey.fullNote, blackKey.note)}
                                                aria-label={`Play ${blackKey.fullNote}`}
                                            >
                                                {showLabels && getNoteLabel(blackKey.note)}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Stopper knobs */}
                    <div className={styles.stopperPanel}>
                        {Array.from({ length: 7 }).map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.stopper} ${activeStoppers.has(i) ? styles.active : ""}`}
                                onClick={() => toggleStopper(i)}
                                aria-label={`Stopper ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Harmonium;
