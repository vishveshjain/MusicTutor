"use client";

import React, { useState, useCallback, useEffect } from "react";
import styles from "./saxophone.module.css";
import { getSoundPlayer } from "@/lib/audio/sound-player";

export interface SaxophoneProps {
    highlightedNote?: string;
    onNotePlay?: (note: string) => void;
    showLabels?: boolean;
    interactive?: boolean;
}

// Full chromatic saxophone range (D4 to C6 — covers all lesson notes)
const NOTES = [
    // Octave 4 (low range)
    { note: "D4", label: "D", sharp: false },
    { note: "D#4", label: "D#", sharp: true },
    { note: "E4", label: "E", sharp: false },
    { note: "F4", label: "F", sharp: false },
    { note: "F#4", label: "F#", sharp: true },
    { note: "G4", label: "G", sharp: false },
    { note: "G#4", label: "G#", sharp: true },
    { note: "A4", label: "A", sharp: false },
    { note: "A#4", label: "Bb", sharp: true },
    { note: "B4", label: "B", sharp: false },
    // Octave 5 (high range)
    { note: "C5", label: "C", sharp: false },
    { note: "C#5", label: "C#", sharp: true },
    { note: "D5", label: "D", sharp: false },
    { note: "D#5", label: "D#", sharp: true },
    { note: "E5", label: "E", sharp: false },
    { note: "F5", label: "F", sharp: false },
    { note: "F#5", label: "F#", sharp: true },
    { note: "G5", label: "G", sharp: false },
    { note: "G#5", label: "G#", sharp: true },
    { note: "A5", label: "A", sharp: false },
    { note: "A#5", label: "Bb", sharp: true },
    { note: "B5", label: "B", sharp: false },
    { note: "C6", label: "C", sharp: false },
];

export function Saxophone({
    highlightedNote,
    onNotePlay,
    showLabels = true,
    interactive = true,
}: SaxophoneProps) {
    const [pressedNote, setPressedNote] = useState<string | null>(null);
    const [lastPlayedNote, setLastPlayedNote] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preload = async () => {
            try {
                const player = getSoundPlayer();
                await player.loadInstrument("saxophone");
                setIsLoading(false);
            } catch (error) {
                console.error("[Saxophone] Failed to preload:", error);
                setIsLoading(false);
            }
        };
        preload();
    }, []);

    const handlePress = useCallback(
        async (note: string) => {
            if (!interactive) return;

            setPressedNote(note);
            setLastPlayedNote(note);

            const player = getSoundPlayer();
            await player.playNote("saxophone", note, 1.0);

            if (onNotePlay) {
                onNotePlay(note);
            }

            setTimeout(() => {
                setPressedNote(null);
            }, 500);
        },
        [interactive, onNotePlay]
    );

    const getKeyboardShortcut = useCallback((note: string): string | null => {
        const keyMap: Record<string, string> = {
            "1": "D4",
            "q": "D#4",
            "2": "E4",
            "3": "F4",
            "w": "F#4",
            "4": "G4",
            "e": "G#4",
            "5": "A4",
            "r": "A#4",
            "6": "B4",
            
            "a": "C5",
            "z": "C#5",
            "s": "D5",
            "x": "D#5",
            "d": "E5",
            "f": "F5",
            "c": "F#5",
            "g": "G5",
            "v": "G#5",
            "h": "A5",
            "b": "A#5",
            "j": "B5",
            "k": "C6",
        };
        const entry = Object.entries(keyMap).find(([_, n]) => n === note);
        return entry ? entry[0].toUpperCase() : null;
    }, []);

    const isActive = (note: string) => pressedNote === note;
    
    const isHighlighted = (note: string) => {
        if (!highlightedNote) return false;
        return note === highlightedNote || note.replace(/\d/, "") === highlightedNote.replace(/\d/, "");
    };

    // Keyboard listener
    useEffect(() => {
        if (!interactive) return;

        const keyMap: Record<string, string> = {
            "1": "D4",
            "q": "D#4",
            "2": "E4",
            "3": "F4",
            "w": "F#4",
            "4": "G4",
            "e": "G#4",
            "5": "A4",
            "r": "A#4",
            "6": "B4",
            
            "a": "C5",
            "z": "C#5",
            "s": "D5",
            "x": "D#5",
            "d": "E5",
            "f": "F5",
            "c": "F#5",
            "g": "G5",
            "v": "G#5",
            "h": "A5",
            "b": "A#5",
            "j": "B5",
            "k": "C6",
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            const note = keyMap[e.key.toLowerCase()];
            if (note && pressedNote !== note) {
                handlePress(note);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [interactive, pressedNote, handlePress]);

    const getSaxHint = useCallback(() => {
        if (!highlightedNote) return "Play any note to practice";
        const match = NOTES.find(n => n.note === highlightedNote || n.note.replace(/\d/, "") === highlightedNote.replace(/\d/, ""));
        if (!match) return `Play note ${highlightedNote}`;
        const shortcut = getKeyboardShortcut(match.note);
        if (shortcut) {
            return `Play ${match.label} (Press keyboard key "${shortcut}")`;
        }
        return `Play ${match.label}`;
    }, [highlightedNote, getKeyboardShortcut]);

    const getCleanNoteName = (noteStr: string | null) => {
        if (!noteStr) return "-";
        return noteStr.replace(/\d/, "");
    };

    const isCorrect = lastPlayedNote && highlightedNote && (
        lastPlayedNote === highlightedNote ||
        lastPlayedNote.replace(/\d/, "") === highlightedNote.replace(/\d/, "")
    );

    // Split notes for visual key placement (upper body = lower octave, lower body = upper octave)
    const lowerNotes = NOTES.filter(n => n.note.endsWith("4") || n.note === "C5");
    const upperNotes = NOTES.filter(n => {
        if (n.note === "C5") return false;
        return n.note.endsWith("5") || n.note.endsWith("6");
    });

    return (
        <div className={styles.saxophone}>
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
                    <span className={styles.hintLabel}>Sax Guide:</span>
                    <span className={styles.hintValue}>{getSaxHint()}</span>
                    <span className={styles.keyboardGuide}>Keyboard: Press keys shown on screen</span>
                </div>
            </div>

            <div className={styles.layout}>
                {isLoading && (
                    <div className={styles.loading}>Loading saxophone...</div>
                )}

                {/* Visual saxophone */}
                <div className={styles.saxVisual}>
                    {/* Mouthpiece */}
                    <div className={styles.mouthpiece}>
                        <div className={styles.reed} />
                        <div className={styles.ligature} />
                    </div>

                    {/* Neck (crook) */}
                    <div className={styles.neck}>
                        <div className={styles.neckOctaveKey} />
                    </div>

                    {/* Upper body */}
                    <div className={styles.upperBody}>
                        <div className={styles.keyCluster}>
                            {lowerNotes.map((n) => {
                                const shortcut = getKeyboardShortcut(n.note);
                                return (
                                    <div
                                        key={n.note}
                                        className={`${styles.saxKey} ${n.sharp ? styles.sharpKey : ""} ${isActive(n.note) ? styles.keyDown : ""} ${isHighlighted(n.note) ? styles.keyGlow : ""}`}
                                        onClick={() => handlePress(n.note)}
                                        title={`${n.label} ${shortcut ? `(Key: ${shortcut})` : ""}`}
                                    >
                                        <div className={styles.keyPad}>
                                            {showLabels && (
                                                <span className={styles.keyOverlayLabel}>
                                                    {n.label}
                                                    {shortcut && <span className={styles.keyOverlayShortcut}>{shortcut}</span>}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.bodyTube} />
                    </div>

                    {/* Lower body (bow area) */}
                    <div className={styles.lowerBody}>
                        <div className={styles.keyCluster}>
                            {upperNotes.map((n) => {
                                const shortcut = getKeyboardShortcut(n.note);
                                return (
                                    <div
                                        key={n.note}
                                        className={`${styles.saxKey} ${n.sharp ? styles.sharpKey : ""} ${isActive(n.note) ? styles.keyDown : ""} ${isHighlighted(n.note) ? styles.keyGlow : ""}`}
                                        onClick={() => handlePress(n.note)}
                                        title={`${n.label} ${shortcut ? `(Key: ${shortcut})` : ""}`}
                                    >
                                        <div className={styles.keyPad}>
                                            {showLabels && (
                                                <span className={styles.keyOverlayLabel}>
                                                    {n.label}
                                                    {shortcut && <span className={styles.keyOverlayShortcut}>{shortcut}</span>}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.bodyTube} />
                    </div>

                    {/* Bell */}
                    <div className={styles.bell}>
                        <div className={styles.bellRim} />
                        <div className={styles.bellInner} />
                    </div>
                </div>

                {/* Note buttons grid for easy playing */}
                <div className={styles.notePanel}>
                    <div className={styles.notePanelTitle}>
                        🎷 Play Notes
                    </div>
                    <div className={styles.noteGrid}>
                        {NOTES.map((n) => {
                            const shortcut = getKeyboardShortcut(n.note);
                            return (
                                <button
                                    key={n.note}
                                    className={`${styles.noteBtn} ${n.sharp ? styles.noteBtnSharp : ""} ${isActive(n.note) ? styles.noteBtnActive : ""} ${isHighlighted(n.note) ? styles.noteBtnHighlighted : ""}`}
                                    onClick={() => handlePress(n.note)}
                                >
                                    <span className={styles.noteName}>{n.label}</span>
                                    <span className={styles.noteOctave}>{n.note.replace(/[A-G]#?/, "")}</span>
                                    {shortcut && <span className={styles.noteShortcutBtn}>{shortcut}</span>}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saxophone;
