"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import styles from "./tabla.module.css";

export interface TablaProps {
    highlightedBol?: string;
    onBolPlay?: (bol: string) => void;
    showLabels?: boolean;
    interactive?: boolean;
}

// Tabla bols (strokes) with synthesis parameters
const BOLS = [
    { name: "Dha", drum: "both", description: "Dayan + Bayan together", key: "D" },
    { name: "Dhin", drum: "both", description: "Both with resonance", key: "N" },
    { name: "Na", drum: "dayan", description: "Dayan ring finger (sharp)", key: "A" },
    { name: "Ti", drum: "dayan", description: "Dayan index finger tip", key: "I" },
    { name: "Ta", drum: "dayan", description: "Dayan flat palm strike", key: "T" },
    { name: "Tun", drum: "dayan", description: "Dayan open resonant", key: "U" },
    { name: "Ge", drum: "bayan", description: "Bayan open bass", key: "G" },
    { name: "Kat", drum: "bayan", description: "Bayan closed slap", key: "K" },
];

// Realistic tabla synthesis per bol
function playTablabol(bol: string, audioCtx: AudioContext) {
    const now = audioCtx.currentTime;
    const master = audioCtx.createGain();
    master.gain.setValueAtTime(0.7, now);
    master.connect(audioCtx.destination);

    switch (bol) {
        case "Na": {
            // Sharp, high-pitched ring on dayan syahi
            const osc1 = audioCtx.createOscillator();
            osc1.type = "sine";
            osc1.frequency.setValueAtTime(450, now);
            osc1.frequency.exponentialRampToValueAtTime(420, now + 0.4);
            const g1 = audioCtx.createGain();
            g1.gain.setValueAtTime(0.6, now);
            g1.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
            osc1.connect(g1); g1.connect(master);

            // Harmonic
            const osc2 = audioCtx.createOscillator();
            osc2.type = "sine";
            osc2.frequency.setValueAtTime(900, now);
            const g2 = audioCtx.createGain();
            g2.gain.setValueAtTime(0.2, now);
            g2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
            osc2.connect(g2); g2.connect(master);

            // Click transient
            const click = createNoiseBurst(audioCtx, now, 600, 0.15, 0.02);
            click.connect(master);

            osc1.start(now); osc1.stop(now + 0.5);
            osc2.start(now); osc2.stop(now + 0.3);
            break;
        }
        case "Ti": {
            // High, thin tap on dayan edge
            const osc = audioCtx.createOscillator();
            osc.type = "sine";
            osc.frequency.setValueAtTime(520, now);
            osc.frequency.exponentialRampToValueAtTime(480, now + 0.15);
            const g = audioCtx.createGain();
            g.gain.setValueAtTime(0.5, now);
            g.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
            osc.connect(g); g.connect(master);

            const click = createNoiseBurst(audioCtx, now, 800, 0.2, 0.015);
            click.connect(master);

            osc.start(now); osc.stop(now + 0.25);
            break;
        }
        case "Ta": {
            // Flat palm slap on dayan
            const osc = audioCtx.createOscillator();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(350, now);
            osc.frequency.exponentialRampToValueAtTime(200, now + 0.08);
            const g = audioCtx.createGain();
            g.gain.setValueAtTime(0.6, now);
            g.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
            osc.connect(g); g.connect(master);

            const slap = createNoiseBurst(audioCtx, now, 1200, 0.3, 0.025);
            slap.connect(master);

            osc.start(now); osc.stop(now + 0.15);
            break;
        }
        case "Tun": {
            // Open resonant tone on dayan
            const osc1 = audioCtx.createOscillator();
            osc1.type = "sine";
            osc1.frequency.setValueAtTime(400, now);
            osc1.frequency.exponentialRampToValueAtTime(380, now + 0.8);
            const g1 = audioCtx.createGain();
            g1.gain.setValueAtTime(0.65, now);
            g1.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
            osc1.connect(g1); g1.connect(master);

            // 2nd harmonic
            const osc2 = audioCtx.createOscillator();
            osc2.type = "sine";
            osc2.frequency.setValueAtTime(800, now);
            const g2 = audioCtx.createGain();
            g2.gain.setValueAtTime(0.15, now);
            g2.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
            osc2.connect(g2); g2.connect(master);

            // 3rd harmonic for richness
            const osc3 = audioCtx.createOscillator();
            osc3.type = "sine";
            osc3.frequency.setValueAtTime(1200, now);
            const g3 = audioCtx.createGain();
            g3.gain.setValueAtTime(0.06, now);
            g3.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
            osc3.connect(g3); g3.connect(master);

            osc1.start(now); osc1.stop(now + 0.9);
            osc2.start(now); osc2.stop(now + 0.5);
            osc3.start(now); osc3.stop(now + 0.3);
            break;
        }
        case "Ge": {
            // Deep bass on bayan, open stroke with pitch bend
            const osc = audioCtx.createOscillator();
            osc.type = "sine";
            osc.frequency.setValueAtTime(120, now);
            osc.frequency.exponentialRampToValueAtTime(75, now + 0.6);
            const g = audioCtx.createGain();
            g.gain.setValueAtTime(0.8, now);
            g.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
            osc.connect(g); g.connect(master);

            // Sub harmonic
            const sub = audioCtx.createOscillator();
            sub.type = "sine";
            sub.frequency.setValueAtTime(60, now);
            sub.frequency.exponentialRampToValueAtTime(40, now + 0.5);
            const gSub = audioCtx.createGain();
            gSub.gain.setValueAtTime(0.4, now);
            gSub.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
            sub.connect(gSub); gSub.connect(master);

            const thud = createNoiseBurst(audioCtx, now, 200, 0.25, 0.03);
            thud.connect(master);

            osc.start(now); osc.stop(now + 0.7);
            sub.start(now); sub.stop(now + 0.5);
            break;
        }
        case "Kat": {
            // Closed slap on bayan
            const osc = audioCtx.createOscillator();
            osc.type = "sine";
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.exponentialRampToValueAtTime(80, now + 0.06);
            const g = audioCtx.createGain();
            g.gain.setValueAtTime(0.7, now);
            g.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
            osc.connect(g); g.connect(master);

            const slap = createNoiseBurst(audioCtx, now, 400, 0.35, 0.03);
            slap.connect(master);

            osc.start(now); osc.stop(now + 0.12);
            break;
        }
        case "Dha": {
            // Na + Ge simultaneously
            playTablabol("Na", audioCtx);
            playTablabol("Ge", audioCtx);
            return;
        }
        case "Dhin": {
            // Tun + Ge simultaneously
            playTablabol("Tun", audioCtx);
            playTablabol("Ge", audioCtx);
            return;
        }
    }
}

// Helper: create a short noise burst with bandpass filter
function createNoiseBurst(
    ctx: AudioContext, time: number,
    freq: number, gain: number, duration: number
): GainNode {
    const bufferSize = Math.ceil(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    const src = ctx.createBufferSource();
    src.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq, time);
    filter.Q.setValueAtTime(3, time);

    const gn = ctx.createGain();
    gn.gain.setValueAtTime(gain, time);
    gn.gain.exponentialRampToValueAtTime(0.001, time + duration);

    src.connect(filter);
    filter.connect(gn);
    src.start(time);
    src.stop(time + duration);

    return gn;
}

export function Tabla({
    highlightedBol,
    onBolPlay,
    showLabels = true,
    interactive = true,
}: TablaProps) {
    const [pressedBol, setPressedBol] = useState<string | null>(null);
    const [activeDrum, setActiveDrum] = useState<"dayan" | "bayan" | "both" | null>(null);
    const audioCtxRef = useRef<AudioContext | null>(null);

    // Initialize audio context lazily
    const getAudioCtx = useCallback(() => {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        }
        if (audioCtxRef.current.state === "suspended") {
            audioCtxRef.current.resume();
        }
        return audioCtxRef.current;
    }, []);

    const handlePress = useCallback(
        (bolName: string, drum: string) => {
            if (!interactive) return;

            setPressedBol(bolName);
            setActiveDrum(drum as "dayan" | "bayan" | "both");

            const ctx = getAudioCtx();
            playTablabol(bolName, ctx);

            if (onBolPlay) {
                onBolPlay(bolName);
            }

            setTimeout(() => {
                setPressedBol(null);
                setActiveDrum(null);
            }, 250);
        },
        [interactive, onBolPlay, getAudioCtx]
    );

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!interactive) return;
            const bol = BOLS.find(b => b.key.toLowerCase() === e.key.toLowerCase());
            if (bol) {
                handlePress(bol.name, bol.drum);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [interactive, handlePress]);

    const getBolClassName = (bol: typeof BOLS[0]) => {
        const classes = [styles.bol, styles[`bol${bol.drum}`]];
        if (pressedBol === bol.name) classes.push(styles.pressed);
        if (highlightedBol === bol.name) classes.push(styles.highlighted);
        return classes.join(" ");
    };

    return (
        <div className={styles.tabla}>
            <div className={styles.tablaContainer}>
                {/* Realistic tabla pair */}
                <div className={styles.drumPair}>
                    {/* Bayan (left - bass drum, larger, metal) */}
                    <div className={`${styles.drumWrapper} ${styles.bayanWrapper} ${activeDrum === "bayan" || activeDrum === "both" ? styles.drumActive : ""}`}>
                        <div className={styles.bayan}>
                            <div className={styles.drumRim}>
                                <div className={styles.drumSkin}>
                                    <div className={styles.maidan} />
                                    <div className={styles.syahiBayan}>
                                        <div className={styles.syahiInner} />
                                    </div>
                                    <div className={styles.gajara} />
                                </div>
                            </div>
                            <div className={styles.bayanBody}>
                                <div className={styles.bodyHighlight} />
                            </div>
                        </div>
                        {showLabels && <span className={styles.drumLabel}>Bayan (Bass)</span>}
                    </div>

                    {/* Dayan (right - treble drum, smaller, wood) */}
                    <div className={`${styles.drumWrapper} ${styles.dayanWrapper} ${activeDrum === "dayan" || activeDrum === "both" ? styles.drumActive : ""}`}>
                        <div className={styles.dayan}>
                            <div className={styles.drumRim}>
                                <div className={styles.drumSkin}>
                                    <div className={styles.maidan} />
                                    <div className={styles.syahiDayan}>
                                        <div className={styles.syahiInner} />
                                    </div>
                                    <div className={styles.gajara} />
                                </div>
                            </div>
                            <div className={styles.dayanBody}>
                                <div className={styles.bodyHighlight} />
                                <div className={styles.lacing} />
                            </div>
                        </div>
                        {showLabels && <span className={styles.drumLabel}>Dayan (Treble)</span>}
                    </div>
                </div>

                {/* Bol buttons */}
                <div className={styles.bolGrid}>
                    {BOLS.map((bol) => (
                        <button
                            key={bol.name}
                            className={getBolClassName(bol)}
                            onClick={() => handlePress(bol.name, bol.drum)}
                            title={bol.description}
                        >
                            <span className={styles.bolName}>{bol.name}</span>
                            <span className={styles.bolHindi}>
                                {bol.name === "Dha" && "धा"}
                                {bol.name === "Dhin" && "धिं"}
                                {bol.name === "Na" && "ना"}
                                {bol.name === "Ti" && "ती"}
                                {bol.name === "Ta" && "ता"}
                                {bol.name === "Tun" && "तुन"}
                                {bol.name === "Ge" && "गे"}
                                {bol.name === "Kat" && "कट"}
                            </span>
                            {showLabels && (
                                <span className={styles.bolMeta}>
                                    <span className={styles.bolDrum}>{bol.drum}</span>
                                    <kbd className={styles.bolKey}>{bol.key}</kbd>
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tabla;
