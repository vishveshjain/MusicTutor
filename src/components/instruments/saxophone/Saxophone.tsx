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

    const isActive = (note: string) => pressedNote === note;
    const isHighlighted = (note: string) => highlightedNote === note;

    // Split notes for visual key placement (upper body = lower octave, lower body = upper octave)
    const lowerNotes = NOTES.filter(n => n.note.endsWith("4") || n.note === "C5");
    const upperNotes = NOTES.filter(n => {
        if (n.note === "C5") return false;
        return n.note.endsWith("5") || n.note.endsWith("6");
    });

    return (
        <div className={styles.saxophone}>
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
                            {lowerNotes.map((n) => (
                                <div
                                    key={n.note}
                                    className={`${styles.saxKey} ${n.sharp ? styles.sharpKey : ""} ${isActive(n.note) ? styles.keyDown : ""} ${isHighlighted(n.note) ? styles.keyGlow : ""}`}
                                    onClick={() => handlePress(n.note)}
                                    title={n.label}
                                >
                                    <div className={styles.keyPad} />
                                </div>
                            ))}
                        </div>
                        <div className={styles.bodyTube} />
                    </div>

                    {/* Lower body (bow area) */}
                    <div className={styles.lowerBody}>
                        <div className={styles.keyCluster}>
                            {upperNotes.map((n) => (
                                <div
                                    key={n.note}
                                    className={`${styles.saxKey} ${n.sharp ? styles.sharpKey : ""} ${isActive(n.note) ? styles.keyDown : ""} ${isHighlighted(n.note) ? styles.keyGlow : ""}`}
                                    onClick={() => handlePress(n.note)}
                                    title={n.label}
                                >
                                    <div className={styles.keyPad} />
                                </div>
                            ))}
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
                        {NOTES.map((n) => (
                            <button
                                key={n.note}
                                className={`${styles.noteBtn} ${n.sharp ? styles.noteBtnSharp : ""} ${isActive(n.note) ? styles.noteBtnActive : ""} ${isHighlighted(n.note) ? styles.noteBtnHighlighted : ""}`}
                                onClick={() => handlePress(n.note)}
                            >
                                <span className={styles.noteName}>{n.label}</span>
                                <span className={styles.noteOctave}>{n.note.replace(/[A-G]#?/, "")}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saxophone;
