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
    { id: "tom1", name: "High Tom", shortcut: "T", note: "G4" },
    { id: "tom2", name: "Mid Tom", shortcut: "Y", note: "E4" },
    { id: "floortom", name: "Floor Tom", shortcut: "F", note: "C4" },
    { id: "kick", name: "Bass Drum", shortcut: "K", note: "C3" },
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

                {/* Cymbal stands (behind everything) */}
                <div className={styles.stands}>
                    <div className={`${styles.stand} ${styles.hihatStand}`} />
                    <div className={`${styles.stand} ${styles.crashStand}`} />
                    <div className={`${styles.stand} ${styles.rideStand}`} />
                </div>

                {/* Cymbals row */}
                <div className={styles.cymbalsRow}>
                    <div
                        className={getDrumClassName("hihat")}
                        onClick={() => handlePress("hihat", "F#4")}
                    >
                        <div className={styles.cymbalSurface}>
                            <div className={styles.cymbalRings} />
                            <div className={styles.cymbalBell} />
                        </div>
                        {showLabels && <span className={styles.label}>Hi-Hat <kbd>{DRUMS[0].shortcut}</kbd></span>}
                    </div>
                    <div
                        className={getDrumClassName("crash")}
                        onClick={() => handlePress("crash", "A#4")}
                    >
                        <div className={styles.cymbalSurface}>
                            <div className={styles.cymbalRings} />
                            <div className={styles.cymbalBell} />
                        </div>
                        {showLabels && <span className={styles.label}>Crash <kbd>{DRUMS[1].shortcut}</kbd></span>}
                    </div>
                    <div
                        className={getDrumClassName("ride")}
                        onClick={() => handlePress("ride", "D#5")}
                    >
                        <div className={styles.cymbalSurface}>
                            <div className={styles.cymbalRings} />
                            <div className={styles.cymbalBell} />
                        </div>
                        {showLabels && <span className={styles.label}>Ride <kbd>{DRUMS[2].shortcut}</kbd></span>}
                    </div>
                </div>

                {/* Toms mounted on bass drum */}
                <div className={styles.tomsRow}>
                    <div
                        className={getDrumClassName("tom1")}
                        onClick={() => handlePress("tom1", "G4")}
                    >
                        <div className={styles.drumHead}>
                            <div className={styles.drumRim} />
                        </div>
                        <div className={styles.drumShell} />
                        {showLabels && <span className={styles.label}>Hi Tom <kbd>{DRUMS[4].shortcut}</kbd></span>}
                    </div>
                    <div
                        className={getDrumClassName("tom2")}
                        onClick={() => handlePress("tom2", "E4")}
                    >
                        <div className={styles.drumHead}>
                            <div className={styles.drumRim} />
                        </div>
                        <div className={styles.drumShell} />
                        {showLabels && <span className={styles.label}>Mid Tom <kbd>{DRUMS[5].shortcut}</kbd></span>}
                    </div>
                </div>

                {/* Main row: snare + kick + floor tom */}
                <div className={styles.mainRow}>
                    <div
                        className={getDrumClassName("snare")}
                        onClick={() => handlePress("snare", "D4")}
                    >
                        <div className={styles.drumHead}>
                            <div className={styles.drumRim} />
                            <div className={styles.snareWires} />
                        </div>
                        <div className={styles.drumShell} />
                        {showLabels && <span className={styles.label}>Snare <kbd>{DRUMS[3].shortcut}</kbd></span>}
                    </div>

                    <div
                        className={getDrumClassName("kick")}
                        onClick={() => handlePress("kick", "C3")}
                    >
                        <div className={styles.kickFront}>
                            <div className={styles.kickPort} />
                            <div className={styles.kickLogo}>🥁</div>
                        </div>
                        <div className={styles.kickLegs} />
                        {showLabels && <span className={styles.label}>Bass Drum <kbd>{DRUMS[7].shortcut}</kbd></span>}
                    </div>

                    <div
                        className={getDrumClassName("floortom")}
                        onClick={() => handlePress("floortom", "C4")}
                    >
                        <div className={styles.drumHead}>
                            <div className={styles.drumRim} />
                        </div>
                        <div className={styles.drumShell} />
                        <div className={styles.floorTomLegs} />
                        {showLabels && <span className={styles.label}>Floor Tom <kbd>{DRUMS[6].shortcut}</kbd></span>}
                    </div>
                </div>
            </div>

            {/* Keyboard hints */}
            {showLabels && (
                <div className={styles.hints}>
                    ⌨️ Keyboard shortcuts shown on each piece
                </div>
            )}
        </div>
    );
}

export default Drums;
