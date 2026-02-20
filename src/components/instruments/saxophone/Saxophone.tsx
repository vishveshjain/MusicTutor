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

// Saxophone notes (Alto Saxophone concert pitch range)
const NOTES = [
    { note: "D4", label: "D", position: 0 },
    { note: "E4", label: "E", position: 1 },
    { note: "F4", label: "F", position: 2 },
    { note: "F#4", label: "F#", position: 3 },
    { note: "G4", label: "G", position: 4 },
    { note: "A4", label: "A", position: 5 },
    { note: "A#4", label: "Bb", position: 6 },
    { note: "B4", label: "B", position: 7 },
    { note: "C5", label: "C'", position: 8 },
    { note: "D5", label: "D'", position: 9 },
    { note: "E5", label: "E'", position: 10 },
    { note: "F5", label: "F'", position: 11 },
    { note: "G5", label: "G'", position: 12 },
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
                        {/* Left hand keys */}
                        <div className={styles.keyCluster}>
                            {NOTES.slice(0, 6).map((n) => (
                                <div
                                    key={n.note}
                                    className={`${styles.saxKey} ${isActive(n.note) ? styles.keyDown : ""} ${isHighlighted(n.note) ? styles.keyGlow : ""}`}
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
                        {/* Right hand keys */}
                        <div className={styles.keyCluster}>
                            {NOTES.slice(6).map((n) => (
                                <div
                                    key={n.note}
                                    className={`${styles.saxKey} ${isActive(n.note) ? styles.keyDown : ""} ${isHighlighted(n.note) ? styles.keyGlow : ""}`}
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
                                className={`${styles.noteBtn} ${isActive(n.note) ? styles.noteBtnActive : ""} ${isHighlighted(n.note) ? styles.noteBtnHighlighted : ""}`}
                                onClick={() => handlePress(n.note)}
                            >
                                <span className={styles.noteName}>{n.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saxophone;
