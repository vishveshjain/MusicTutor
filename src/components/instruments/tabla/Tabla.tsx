"use client";

import React, { useState, useCallback, useEffect } from "react";
import styles from "./tabla.module.css";
import { getSoundPlayer } from "@/lib/audio/sound-player";

export interface TablaProps {
    highlightedBol?: string;
    onBolPlay?: (bol: string) => void;
    showLabels?: boolean;
    interactive?: boolean;
}

// Tabla bols (strokes)
const BOLS = [
    { name: "Dha", drum: "both", description: "Dayan + Bayan together" },
    { name: "Ge", drum: "bayan", description: "Bayan open stroke" },
    { name: "Na", drum: "dayan", description: "Dayan ring finger" },
    { name: "Ti", drum: "dayan", description: "Dayan index finger" },
    { name: "Ta", drum: "dayan", description: "Dayan flat palm" },
    { name: "Tun", drum: "dayan", description: "Dayan closed" },
    { name: "Kat", drum: "bayan", description: "Bayan closed" },
    { name: "Dhin", drum: "both", description: "Both with resonance" },
];

export function Tabla({
    highlightedBol,
    onBolPlay,
    showLabels = true,
    interactive = true,
}: TablaProps) {
    const [pressedBol, setPressedBol] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preload = async () => {
            try {
                const player = getSoundPlayer();
                await player.loadInstrument("tabla");
                setIsLoading(false);
            } catch (error) {
                console.error("[Tabla] Failed to preload:", error);
                setIsLoading(false);
            }
        };
        preload();
    }, []);

    const handlePress = useCallback(
        async (bol: string) => {
            if (!interactive) return;

            setPressedBol(bol);

            const player = getSoundPlayer();
            // Map bols to approximate notes for audio
            const noteMap: Record<string, string> = {
                "Dha": "C3", "Ge": "G2", "Na": "E4", "Ti": "A4",
                "Ta": "D4", "Tun": "C4", "Kat": "F2", "Dhin": "D3"
            };
            await player.playNote("tabla", noteMap[bol] || "C3", 0.5);

            if (onBolPlay) {
                onBolPlay(bol);
            }

            setTimeout(() => {
                setPressedBol(null);
            }, 300);
        },
        [interactive, onBolPlay]
    );

    const getBolClassName = (bol: string) => {
        const classes = [styles.bol];
        if (pressedBol === bol) classes.push(styles.pressed);
        if (highlightedBol === bol) classes.push(styles.highlighted);
        return classes.join(" ");
    };

    return (
        <div className={styles.tabla}>
            <div className={styles.tablaContainer}>
                {isLoading && (
                    <div className={styles.loading}>Loading sounds...</div>
                )}

                {/* Drums visual */}
                <div className={styles.drums}>
                    {/* Bayan (left - bass drum) */}
                    <div className={styles.bayan}>
                        <div className={styles.drumSurface}>
                            <div className={styles.syahi}></div>
                        </div>
                        <div className={styles.drumBody}></div>
                        {showLabels && <span className={styles.drumLabel}>Bayan</span>}
                    </div>

                    {/* Dayan (right - treble drum) */}
                    <div className={styles.dayan}>
                        <div className={styles.drumSurface}>
                            <div className={styles.syahi}></div>
                        </div>
                        <div className={styles.drumBody}></div>
                        {showLabels && <span className={styles.drumLabel}>Dayan</span>}
                    </div>
                </div>

                {/* Bol buttons */}
                <div className={styles.bolGrid}>
                    {BOLS.map((bol) => (
                        <button
                            key={bol.name}
                            className={getBolClassName(bol.name)}
                            onClick={() => handlePress(bol.name)}
                            title={bol.description}
                        >
                            <span className={styles.bolName}>{bol.name}</span>
                            {showLabels && (
                                <span className={styles.bolDrum}>{bol.drum}</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tabla;
