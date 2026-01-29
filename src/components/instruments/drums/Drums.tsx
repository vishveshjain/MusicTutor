"use client";

import React, { useState, useCallback, useEffect } from "react";
import styles from "./drums.module.css";
import { getSoundPlayer } from "@/lib/audio/sound-player";

export interface DrumsProps {
    highlightedDrum?: string;
    onDrumPlay?: (drum: string) => void;
    showLabels?: boolean;
    interactive?: boolean;
}

// Drum kit pieces
const DRUMS = [
    { id: "hihat", name: "Hi-Hat", shortcut: "H", note: "F#4" },
    { id: "crash", name: "Crash", shortcut: "C", note: "A#4" },
    { id: "ride", name: "Ride", shortcut: "R", note: "D#5" },
    { id: "snare", name: "Snare", shortcut: "S", note: "D4" },
    { id: "tom1", name: "Tom 1", shortcut: "T", note: "G4" },
    { id: "tom2", name: "Tom 2", shortcut: "Y", note: "E4" },
    { id: "floortom", name: "Floor Tom", shortcut: "F", note: "C4" },
    { id: "kick", name: "Kick", shortcut: "K", note: "C3" },
];

export function Drums({
    highlightedDrum,
    onDrumPlay,
    showLabels = true,
    interactive = true,
}: DrumsProps) {
    const [pressedDrum, setPressedDrum] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preload = async () => {
            try {
                const player = getSoundPlayer();
                await player.loadInstrument("drums");
                setIsLoading(false);
            } catch (error) {
                console.error("[Drums] Failed to preload:", error);
                setIsLoading(false);
            }
        };
        preload();
    }, []);

    const handlePress = useCallback(
        async (drumId: string, note: string) => {
            if (!interactive) return;

            setPressedDrum(drumId);

            const player = getSoundPlayer();
            await player.playNote("drums", note, 0.3);

            if (onDrumPlay) {
                onDrumPlay(drumId);
            }

            setTimeout(() => {
                setPressedDrum(null);
            }, 150);
        },
        [interactive, onDrumPlay]
    );

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!interactive) return;
            const drum = DRUMS.find(d => d.shortcut.toLowerCase() === e.key.toLowerCase());
            if (drum) {
                handlePress(drum.id, drum.note);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [interactive, handlePress]);

    const getDrumClassName = (drumId: string) => {
        const classes = [styles.drum, styles[drumId]];
        if (pressedDrum === drumId) classes.push(styles.pressed);
        if (highlightedDrum === drumId) classes.push(styles.highlighted);
        return classes.join(" ");
    };

    return (
        <div className={styles.drums}>
            <div className={styles.drumKit}>
                {isLoading && (
                    <div className={styles.loading}>Loading sounds...</div>
                )}

                {/* Cymbals row */}
                <div className={styles.cymbalsRow}>
                    <div
                        className={getDrumClassName("hihat")}
                        onClick={() => handlePress("hihat", "F#4")}
                    >
                        {showLabels && <span className={styles.label}>Hi-Hat</span>}
                    </div>
                    <div
                        className={getDrumClassName("crash")}
                        onClick={() => handlePress("crash", "A#4")}
                    >
                        {showLabels && <span className={styles.label}>Crash</span>}
                    </div>
                    <div
                        className={getDrumClassName("ride")}
                        onClick={() => handlePress("ride", "D#5")}
                    >
                        {showLabels && <span className={styles.label}>Ride</span>}
                    </div>
                </div>

                {/* Toms row */}
                <div className={styles.tomsRow}>
                    <div
                        className={getDrumClassName("tom1")}
                        onClick={() => handlePress("tom1", "G4")}
                    >
                        {showLabels && <span className={styles.label}>Tom 1</span>}
                    </div>
                    <div
                        className={getDrumClassName("snare")}
                        onClick={() => handlePress("snare", "D4")}
                    >
                        {showLabels && <span className={styles.label}>Snare</span>}
                    </div>
                    <div
                        className={getDrumClassName("tom2")}
                        onClick={() => handlePress("tom2", "E4")}
                    >
                        {showLabels && <span className={styles.label}>Tom 2</span>}
                    </div>
                </div>

                {/* Bottom row */}
                <div className={styles.bottomRow}>
                    <div
                        className={getDrumClassName("floortom")}
                        onClick={() => handlePress("floortom", "C4")}
                    >
                        {showLabels && <span className={styles.label}>Floor</span>}
                    </div>
                    <div
                        className={getDrumClassName("kick")}
                        onClick={() => handlePress("kick", "C3")}
                    >
                        {showLabels && <span className={styles.label}>Kick</span>}
                    </div>
                </div>
            </div>

            {/* Keyboard hints */}
            {showLabels && (
                <div className={styles.hints}>
                    Use keyboard: H S K T Y F C R
                </div>
            )}
        </div>
    );
}

export default Drums;
