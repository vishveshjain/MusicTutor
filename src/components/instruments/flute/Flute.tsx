'use client';

import React, { useState, useCallback, useEffect, useMemo } from 'react';
import styles from './flute.module.css';
import { getSoundPlayer } from '@/lib/audio/sound-player';

export interface KeyState {
    highlighted: boolean;
    correct: boolean;
    wrong: boolean;
}

export interface FluteProps {
    highlightedNote?: string;
    onNotePlay?: (note: string, fingering: boolean[]) => void;
    keyStates?: Record<number, KeyState>;
    showLabels?: boolean;
    interactive?: boolean;
    showFingeringChart?: boolean;
}

// Simplified chromatic fingering chart for a 6-hole D flute
const FINGERINGS: Record<string, boolean[]> = {
    // Lower Octave
    'C4': [true, true, true, true, true, true],
    'C#4': [true, true, true, true, true, true],
    'D4': [true, true, true, true, true, true],
    'D#4': [true, true, true, true, true, false],
    'E4': [true, true, true, true, true, false],
    'F4': [true, true, true, true, false, true],
    'F#4': [true, true, true, true, false, false],
    'G4': [true, true, true, false, false, false],
    'G#4': [true, true, false, true, false, false],
    'A4': [true, true, false, false, false, false],
    'A#4': [true, false, true, false, false, false],
    'B4': [true, false, false, false, false, false],
    
    // Higher Octave
    'C5': [false, true, false, false, false, false],
    'C#5': [false, false, false, false, false, false],
    'D5': [false, true, true, true, true, true],
    'D#5': [false, true, true, true, true, false],
    'E5': [false, true, true, true, true, false],
    'F5': [false, true, true, true, false, true],
    'F#5': [false, true, true, true, false, false],
    'G5': [false, true, true, false, false, false],
    'G#5': [false, true, false, true, false, false],
    'A5': [false, true, false, false, false, false],
    'A#5': [false, false, true, false, false, false],
    'B5': [false, false, false, false, false, false],
    'C6': [false, false, false, false, false, false],
    'C#6': [false, false, false, false, false, false],
};

const NOTE_NAMES: Record<string, string> = {
    'C4': 'C₄', 'C#4': 'C#₄', 'D4': 'D₄', 'D#4': 'D#₄', 'E4': 'E₄', 'F4': 'F₄', 'F#4': 'F#₄', 'G4': 'G₄', 'G#4': 'G#₄', 'A4': 'A₄', 'A#4': 'A#₄', 'B4': 'B₄',
    'C5': 'C₅', 'C#5': 'C#₅', 'D5': 'D₅', 'D#5': 'D#₅', 'E5': 'E₅', 'F5': 'F₅', 'F#5': 'F#₅', 'G5': 'G₅', 'G#5': 'G#₅', 'A5': 'A₅', 'A#5': 'A#₅', 'B5': 'B₅',
    'C6': 'C₆', 'C#6': 'C#₆'
};

const KEY_LABELS = ['T1', 'T2', 'T3', 'F1', 'F2', 'F3'];
const KEYBOARD_KEYS = ['1 / A', '2 / S', '3 / D', '4 / F', '5 / J', '6 / K'];

// Normalize flat notes to sharps for lookup
const normalizeNote = (note: string): string => {
    return note
        .replace('Db', 'C#')
        .replace('Eb', 'D#')
        .replace('Gb', 'F#')
        .replace('Ab', 'G#')
        .replace('Bb', 'A#')
        .replace('db', 'C#')
        .replace('eb', 'D#')
        .replace('gb', 'F#')
        .replace('ab', 'G#')
        .replace('bb', 'A#');
};

// Get fingering pattern with octave fallback
const getFingeringPattern = (note: string): boolean[] | undefined => {
    const norm = normalizeNote(note);
    if (FINGERINGS[norm]) {
        return FINGERINGS[norm];
    }
    // Fallback: strip octave and map to octave 4 or 5
    const match = norm.match(/^([A-G]#?|Bb|Eb|Db|Gb|Ab)(\d)$/i);
    if (match) {
        const pitch = match[1];
        const octave = parseInt(match[2], 10);
        const fallbackOctave = octave < 4 ? '4' : '5';
        const fallbackNote = `${pitch}${fallbackOctave}`;
        return FINGERINGS[normalizeNote(fallbackNote)];
    }
    return undefined;
};

export function Flute({
    highlightedNote,
    onNotePlay,
    keyStates = {},
    showLabels = true,
    interactive = true,
    showFingeringChart = true,
}: FluteProps) {
    const [pressedKeys, setPressedKeys] = useState<boolean[]>([false, false, false, false, false, false]);
    const [currentNote, setCurrentNote] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [blowMode, setBlowMode] = useState(false); // False = Auto-Play, True = Blow to Play
    const [isBlowing, setIsBlowing] = useState(false);

    const normHighlightedNote = useMemo(() => {
        return highlightedNote ? normalizeNote(highlightedNote) : undefined;
    }, [highlightedNote]);

    useEffect(() => {
        const preload = async () => {
            try {
                const player = getSoundPlayer();
                await player.loadInstrument('flute');
                setIsLoading(false);
            } catch (error) {
                console.error('[Flute] Failed to preload:', error);
                setIsLoading(false);
            }
        };
        preload();
    }, []);

    // Find note from fingering pattern
    const findNoteFromFingering = useCallback((fingering: boolean[]): string | null => {
        for (const [note, pattern] of Object.entries(FINGERINGS)) {
            if (pattern.every((v, i) => v === fingering[i])) {
                return note;
            }
        }
        return null;
    }, []);

    // Play note based on current configuration
    const triggerNotePlay = useCallback(async (note: string, pattern: boolean[]) => {
        try {
            const player = getSoundPlayer();
            await player.playNote('flute', note, 1.2);
            if (onNotePlay) {
                onNotePlay(note, pattern);
            }
        } catch (err) {
            console.error('[Flute] Sound trigger error:', err);
        }
    }, [onNotePlay]);

    // Handle interactive key changes
    const handleKeyChange = useCallback((newKeys: boolean[]) => {
        setPressedKeys(newKeys);
        const note = findNoteFromFingering(newKeys);
        setCurrentNote(note);

        if (note && (!blowMode || isBlowing)) {
            triggerNotePlay(note, newKeys);
        }
    }, [findNoteFromFingering, blowMode, isBlowing, triggerNotePlay]);

    // Toggle key via click (mouse/touch)
    const toggleKey = useCallback((index: number) => {
        if (!interactive) return;
        const newKeys = [...pressedKeys];
        newKeys[index] = !newKeys[index];
        handleKeyChange(newKeys);
    }, [interactive, pressedKeys, handleKeyChange]);

    // Set complete fingering pattern directly (e.g., from chart click)
    const setFingering = useCallback((note: string) => {
        const pattern = getFingeringPattern(note);
        if (pattern) {
            setPressedKeys(pattern);
            setCurrentNote(note);
            triggerNotePlay(note, pattern);
        }
    }, [triggerNotePlay]);

    // Handle Keyboard controls for tactile fingering + blowing
    useEffect(() => {
        if (!interactive) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase();
            let index = -1;

            if (key === '1' || key === 'a') index = 0;
            else if (key === '2' || key === 's') index = 1;
            else if (key === '3' || key === 'd') index = 2;
            else if (key === '4' || key === 'f') index = 3;
            else if (key === '5' || key === 'j') index = 4;
            else if (key === '6' || key === 'k') index = 5;

            if (index !== -1) {
                e.preventDefault();
                setPressedKeys((prev) => {
                    if (prev[index]) return prev;
                    const next = [...prev];
                    next[index] = true;
                    return next;
                });
            }

            if (key === ' ' && blowMode) {
                e.preventDefault();
                setIsBlowing(true);
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            const key = e.key.toLowerCase();
            let index = -1;

            if (key === '1' || key === 'a') index = 0;
            else if (key === '2' || key === 's') index = 1;
            else if (key === '3' || key === 'd') index = 2;
            else if (key === '4' || key === 'f') index = 3;
            else if (key === '5' || key === 'j') index = 4;
            else if (key === '6' || key === 'k') index = 5;

            if (index !== -1) {
                e.preventDefault();
                setPressedKeys((prev) => {
                    if (!prev[index]) return prev;
                    const next = [...prev];
                    next[index] = false;
                    return next;
                });
            }

            if (key === ' ' && blowMode) {
                e.preventDefault();
                setIsBlowing(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [interactive, blowMode]);

    // Handle blow action change
    useEffect(() => {
        if (isBlowing && currentNote && blowMode) {
            triggerNotePlay(currentNote, pressedKeys);
        }
    }, [isBlowing, currentNote, blowMode, pressedKeys, triggerNotePlay]);

    // Reactively update current note when pressedKeys state updates from keyboard
    useEffect(() => {
        const note = findNoteFromFingering(pressedKeys);
        setCurrentNote(note);
    }, [pressedKeys, findNoteFromFingering]);

    // Generate real-time visual hints for the "Tutor Box"
    const tutoringHint = useMemo(() => {
        if (!normHighlightedNote) {
            return currentNote 
                ? `Playing: ${NOTE_NAMES[currentNote] || currentNote}`
                : 'Cover keys to play a note.';
        }

        const targetPattern = normHighlightedNote ? getFingeringPattern(normHighlightedNote) : null;
        if (!targetPattern) return 'Unknown target note pattern.';

        const diffs: string[] = [];
        for (let i = 0; i < pressedKeys.length; i++) {
            if (pressedKeys[i] !== targetPattern[i]) {
                if (targetPattern[i]) {
                    diffs.push(`Close Hole ${i + 1}`);
                } else {
                    diffs.push(`Open Hole ${i + 1}`);
                }
            }
        }

        if (diffs.length === 0) {
            if (blowMode && !isBlowing) {
                return 'Fingering correct! Now press spacebar or hold the Blow button to sound the flute!';
            }
            return 'Perfect fingering! Keep holding.';
        }

        if (diffs.length <= 2) {
            return `Almost there: ${diffs.join(' and ')}`;
        }
        return 'Follow the yellow glowing holes on the flute.';
    }, [pressedKeys, normHighlightedNote, currentNote, blowMode, isBlowing]);

    // Calculate key classname
    const getKeyClassName = (index: number) => {
        const state = keyStates[index] || {};
        const classes = [styles.key];

        if (pressedKeys[index]) {
            classes.push(styles.pressed);
        }

        // Highlight guidance: highlight keys that *should* be closed
        const highlightedFingering = normHighlightedNote ? getFingeringPattern(normHighlightedNote) : null;
        const shouldBeClosed = highlightedFingering ? highlightedFingering[index] : null;

        if (shouldBeClosed !== null) {
            if (shouldBeClosed && !pressedKeys[index]) {
                // Should be closed, but is open
                classes.push(styles.highlightedNeeded);
            } else if (!shouldBeClosed && pressedKeys[index]) {
                // Should be open, but is closed (user mistake)
                classes.push(styles.highlightedWrong);
            } else if (shouldBeClosed && pressedKeys[index]) {
                // Correctly closed
                classes.push(styles.highlightedCorrect);
            }
        } else {
            // Default styling based on correctness feedback props
            if (state.highlighted) classes.push(styles.highlightedNeeded);
            if (state.correct) classes.push(styles.correct);
            if (state.wrong) classes.push(styles.wrong);
        }

        return classes.join(' ');
    };

    return (
        <div className={styles.flute}>
            {/* Top Control Bar */}
            <div className={styles.controlPanel}>
                <div className={styles.modeToggle}>
                    <button 
                        className={`${styles.modeBtn} ${!blowMode ? styles.modeBtnActive : ''}`}
                        onClick={() => { setBlowMode(false); setIsBlowing(false); }}
                    >
                        💨 Auto-Play
                    </button>
                    <button 
                        className={`${styles.modeBtn} ${blowMode ? styles.modeBtnActive : ''}`}
                        onClick={() => setBlowMode(true)}
                    >
                        🌬️ Blow to Play
                    </button>
                </div>
                {blowMode && (
                    <div 
                        className={`${styles.blowIndicator} ${isBlowing ? styles.blowing : ''}`}
                        onMouseDown={() => setIsBlowing(true)}
                        onMouseUp={() => setIsBlowing(false)}
                        onMouseLeave={() => setIsBlowing(false)}
                        onTouchStart={() => setIsBlowing(true)}
                        onTouchEnd={() => setIsBlowing(false)}
                    >
                        {isBlowing ? '🌀 Blowing!' : 'Hold Here or Spacebar to Blow'}
                    </div>
                )}
            </div>

            {/* Note Tutor Feedback Box */}
            <div className={styles.tutorDashboard}>
                <div className={styles.tutorLeft}>
                    {normHighlightedNote && (
                        <div className={styles.targetNoteContainer}>
                            <span className={styles.targetLabel}>TARGET NOTE</span>
                            <span className={styles.targetValue}>
                                {NOTE_NAMES[normHighlightedNote] || normHighlightedNote}
                            </span>
                        </div>
                    )}
                    <div className={styles.currentNoteContainer}>
                        <span className={styles.currentLabel}>CURRENT PLAYING</span>
                        <span className={`${styles.currentValue} ${currentNote === normHighlightedNote ? styles.matchingNote : ''}`}>
                            {currentNote ? NOTE_NAMES[currentNote] || currentNote : '—'}
                        </span>
                    </div>
                </div>
                <div className={styles.tutorHint}>
                    <p>{tutoringHint}</p>
                </div>
            </div>

            {/* Visual Flute Device */}
            <div className={styles.fluteContainer}>
                {isLoading && (
                    <div className={styles.loading}>Loading Flute Sounds...</div>
                )}

                {/* Animated wind stream when blowing */}
                {isBlowing && (
                    <div className={styles.windStream}>
                        <svg viewBox="0 0 100 20" className={styles.windSvg}>
                            <path d="M 0 10 Q 25 5, 50 10 T 100 10" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="5, 5" className={styles.windPath} />
                            <path d="M 0 13 Q 30 18, 60 13 T 100 13" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="3, 3" className={styles.windPathSlow} />
                        </svg>
                    </div>
                )}

                <div className={`${styles.fluteBody} ${isBlowing ? styles.fluteBodyVibrating : ''}`}>
                    {/* Head joint with embouchure */}
                    <div className={styles.headJoint}>
                        <div className={styles.crown} />
                        <div className={styles.embouchurePlate}>
                            <div className={`${styles.embouchureHole} ${isBlowing ? styles.activeBlowHole : ''}`} />
                        </div>
                    </div>

                    {/* Body joint with main keys */}
                    <div className={styles.bodyJoint}>
                        {[0, 1, 2, 3].map((index) => (
                            <div key={index} className={styles.keyWrapper}>
                                {showLabels && (
                                    <span className={styles.keyShortcut}>{KEYBOARD_KEYS[index]}</span>
                                )}
                                <div
                                    className={getKeyClassName(index)}
                                    onClick={() => toggleKey(index)}
                                >
                                    {showLabels && (
                                        <span className={styles.keyLabel}>{KEY_LABELS[index]}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Foot joint with end keys */}
                    <div className={styles.footJoint}>
                        {[4, 5].map((index) => (
                            <div key={index} className={styles.keyWrapper}>
                                {showLabels && (
                                    <span className={styles.keyShortcut}>{KEYBOARD_KEYS[index]}</span>
                                )}
                                <div
                                    className={getKeyClassName(index)}
                                    onClick={() => toggleKey(index)}
                                >
                                    {showLabels && (
                                        <span className={styles.keyLabel}>{KEY_LABELS[index]}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Interactive Fingering Reference Chart */}
            {showFingeringChart && (
                <div className={styles.fingeringChartWrapper}>
                    <h3 className={styles.chartTitle}>🎼 Fingering Reference Guide</h3>
                    <div className={styles.fingeringChart}>
                        {Object.entries(FINGERINGS)
                            .filter(([note]) => ['C4', 'D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C5', 'C#5', 'D5', 'E5', 'F#5', 'G5', 'A5'].includes(note)) // show principal notes to avoid clutter
                            .map(([note, pattern]) => (
                                <div
                                    key={note}
                                    className={`${styles.fingeringItem} ${currentNote === note ? styles.activeItem : ''} ${normHighlightedNote === note ? styles.targetItem : ''}`}
                                    onClick={() => setFingering(note)}
                                >
                                    <span className={styles.fingeringNoteName}>
                                        {NOTE_NAMES[note]}
                                    </span>
                                    <div className={styles.fingeringDots}>
                                        {pattern.map((closed, i) => (
                                            <div
                                                key={i}
                                                className={`${styles.fingeringDot} ${closed ? styles.closedDot : ''}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Flute;
