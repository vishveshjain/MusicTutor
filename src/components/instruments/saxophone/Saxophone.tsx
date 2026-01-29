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

// Saxophone notes (simplified - Alto Saxophone range)
const NOTES = [
    { note: "D4", label: "D", position: 0 },
    { note: "E4", label: "E", position: 1 },
    { note: "F4", label: "F", position: 2 },
    { note: "G4", label: "G", position: 3 },
    { note: "A4", label: "A", position: 4 },
    { note: "B4", label: "B", position: 5 },
    { note: "C5", label: "C", position: 6 },
    { note: "D5", label: "D'", position: 7 },
    { note: "E5", label: "E'", position: 8 },
    { note: "F5", label: "F'", position: 9 },
    { note: "G5", label: "G'", position: 10 },
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

    const getKeyClassName = (note: string) => {
        const classes = [styles.key];
        if (pressedNote === note) classes.push(styles.pressed);
        if (highlightedNote === note) classes.push(styles.highlighted);
        return classes.join(" ");
    };

    return (
        <div className={styles.saxophone}>
            <div className={styles.saxContainer}>
                {isLoading && (
                    <div className={styles.loading}>Loading sounds...</div>
                )}

                {/* Mouthpiece and neck */}
                <div className={styles.mouthpiece}>
                    <div className={styles.reed}></div>
                </div>
                <div className={styles.neck}></div>

                {/* Body with keys */}
                <div className={styles.body}>
                    <div className={styles.keys}>
                        {NOTES.map((noteObj) => (
                            <button
                                key={noteObj.note}
                                className={getKeyClassName(noteObj.note)}
                                onClick={() => handlePress(noteObj.note)}
                            >
                                {showLabels && (
                                    <span className={styles.keyLabel}>{noteObj.label}</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bell */}
                <div className={styles.bell}></div>
            </div>

            {/* Note buttons for easier access */}
            <div className={styles.noteGrid}>
                {NOTES.map((noteObj) => (
                    <button
                        key={noteObj.note}
                        className={`${styles.noteBtn} ${highlightedNote === noteObj.note ? styles.highlighted : ""} ${pressedNote === noteObj.note ? styles.pressed : ""}`}
                        onClick={() => handlePress(noteObj.note)}
                    >
                        {noteObj.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Saxophone;
