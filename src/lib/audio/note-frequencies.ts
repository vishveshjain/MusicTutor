/**
 * Note Frequencies for Music Note Detection
 * Supports Western (Piano) and Indian Classical (Harmonium) note systems
 */

// Standard A4 = 440 Hz (Western tuning)
export const A4_FREQUENCY = 440;

// Indian Classical base Sa frequency (common standard)
export const SA_FREQUENCY = 256;

// Western note names
export const WESTERN_NOTES = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
] as const;

// Indian classical note names (Sargam)
export const INDIAN_NOTES = {
    // Shuddha (natural) swaras
    Sa: "सा", // Shadja
    Re: "रे", // Rishabh
    Ga: "ग", // Gandhar
    Ma: "म", // Madhyam
    Pa: "प", // Pancham
    Dha: "ध", // Dhaivat
    Ni: "नि", // Nishad
    // Komal (flat) swaras
    "Re♭": "रे॒",
    "Ga♭": "ग॒",
    "Dha♭": "ध॒",
    "Ni♭": "नि॒",
    // Tivra (sharp) swara
    "Ma#": "म॑",
} as const;

// Mapping Western notes to Indian swaras (for middle octave with Sa = C)
export const WESTERN_TO_INDIAN: Record<string, string> = {
    C: "Sa",
    "C#": "Re♭",
    D: "Re",
    "D#": "Ga♭",
    E: "Ga",
    F: "Ma",
    "F#": "Ma#",
    G: "Pa",
    "G#": "Dha♭",
    A: "Dha",
    "A#": "Ni♭",
    B: "Ni",
};

// Reverse mapping: Indian notation (shorthand) to Western notes
// Supports both full names (Sa, Re) and shorthand (S, R) and with octave markers (S', .S)
export const INDIAN_TO_WESTERN: Record<string, string> = {
    // Shorthand notation (common in song sheets)
    "S": "C4",
    "R": "D4",
    "G": "E4",
    "M": "F4",
    "P": "G4",
    "D": "A4",
    "N": "B4",
    // Upper octave (taar saptak) - marked with '
    "S'": "C5",
    "R'": "D5",
    "G'": "E5",
    "M'": "F5",
    "P'": "G5",
    "D'": "A5",
    "N'": "B5",
    // Lower octave (mandra saptak) - marked with .
    ".S": "C3",
    ".R": "D3",
    ".G": "E3",
    ".M": "F3",
    ".P": "G3",
    ".D": "A3",
    ".N": "B3",
    // Full names
    "Sa": "C4",
    "Re": "D4",
    "Ga": "E4",
    "Ma": "F4",
    "Pa": "G4",
    "Dha": "A4",
    "Ni": "B4",
};

// Indian swaras with their frequency ratios relative to Sa
export const INDIAN_RATIOS: Record<string, number> = {
    Sa: 1, // 1:1
    "Re♭": 256 / 243, // ~1.053
    Re: 9 / 8, // 1.125
    "Ga♭": 32 / 27, // ~1.185
    Ga: 5 / 4, // 1.25
    Ma: 4 / 3, // ~1.333
    "Ma#": 729 / 512, // ~1.424 (Tivra Ma)
    Pa: 3 / 2, // 1.5
    "Dha♭": 128 / 81, // ~1.58
    Dha: 27 / 16, // ~1.6875
    "Ni♭": 16 / 9, // ~1.778
    Ni: 15 / 8, // 1.875
};

// Guitar standard tuning (E2-A2-D3-G3-B3-E4)
export const GUITAR_TUNING = {
    E2: 82.41,
    A2: 110.0,
    D3: 146.83,
    G3: 196.0,
    B3: 246.94,
    E4: 329.63,
};

// Ukulele standard tuning (G4-C4-E4-A4) - re-entrant
export const UKULELE_TUNING = {
    G4: 392.0,
    C4: 261.63,
    E4: 329.63,
    A4: 440.0,
};

export interface NoteInfo {
    note: string;
    octave: number;
    frequency: number;
    indianNote?: string;
    indianNoteHindi?: string;
    cents: number; // Deviation from perfect pitch in cents
}

/**
 * Convert frequency to the nearest Western note
 * Returns note name, octave, and cents deviation
 */
export function frequencyToNote(frequency: number): NoteInfo | null {
    if (frequency <= 0 || !isFinite(frequency)) {
        return null;
    }

    // Calculate semitones from A4
    const semitones = 12 * Math.log2(frequency / A4_FREQUENCY);

    // Round to nearest semitone
    const roundedSemitones = Math.round(semitones);

    // Calculate cents deviation
    const cents = Math.round((semitones - roundedSemitones) * 100);

    // A4 is at index 9 (0-indexed), octave 4
    // Calculate note index and octave
    const noteIndex = ((roundedSemitones % 12) + 12 + 9) % 12;
    const octave = Math.floor((roundedSemitones + 9) / 12) + 4;

    const westernNote = WESTERN_NOTES[noteIndex];
    const indianNote = WESTERN_TO_INDIAN[westernNote];
    const indianNoteHindi = indianNote
        ? INDIAN_NOTES[indianNote as keyof typeof INDIAN_NOTES]
        : undefined;

    return {
        note: westernNote,
        octave,
        frequency,
        indianNote,
        indianNoteHindi,
        cents,
    };
}

/**
 * Get the frequency of a specific note
 */
export function noteToFrequency(note: string, octave: number): number {
    const noteIndex = WESTERN_NOTES.indexOf(
        note as (typeof WESTERN_NOTES)[number]
    );
    if (noteIndex === -1) return 0;

    // Calculate semitones from A4
    const semitones = noteIndex - 9 + (octave - 4) * 12;

    return A4_FREQUENCY * Math.pow(2, semitones / 12);
}

/**
 * Get Indian classical note frequency based on Sa position
 */
export function getIndianNoteFrequency(
    note: keyof typeof INDIAN_RATIOS,
    saFrequency: number = SA_FREQUENCY
): number {
    const ratio = INDIAN_RATIOS[note];
    return ratio ? saFrequency * ratio : 0;
}

/**
 * Check if detected frequency matches expected note within tolerance
 */
export function isNoteMatch(
    detectedFreq: number,
    expectedFreq: number,
    toleranceCents: number = 50
): boolean {
    if (detectedFreq <= 0 || expectedFreq <= 0) return false;

    const centsDiff = 1200 * Math.log2(detectedFreq / expectedFreq);
    return Math.abs(centsDiff) <= toleranceCents;
}

/**
 * Generate all note frequencies for a given octave range
 */
export function generateNoteFrequencies(
    startOctave: number = 2,
    endOctave: number = 6
): Map<string, number> {
    const frequencies = new Map<string, number>();

    for (let octave = startOctave; octave <= endOctave; octave++) {
        for (const note of WESTERN_NOTES) {
            const key = `${note}${octave}`;
            frequencies.set(key, noteToFrequency(note, octave));
        }
    }

    return frequencies;
}

/**
 * Get harmonium-specific frequencies (2 octaves typically)
 * Harmonium typically covers Sa (lower) to Sa' (upper) - about 2.5 octaves
 */
export function getHarmoniumNotes(
    saFrequency: number = SA_FREQUENCY
): Map<string, number> {
    const notes = new Map<string, number>();

    // Lower octave (Mandra Saptak)
    Object.entries(INDIAN_RATIOS).forEach(([note, ratio]) => {
        notes.set(`${note}_lower`, (saFrequency / 2) * ratio);
    });

    // Middle octave (Madhya Saptak)
    Object.entries(INDIAN_RATIOS).forEach(([note, ratio]) => {
        notes.set(note, saFrequency * ratio);
    });

    // Upper octave (Taar Saptak)
    Object.entries(INDIAN_RATIOS).forEach(([note, ratio]) => {
        notes.set(`${note}_upper`, saFrequency * 2 * ratio);
    });

    return notes;
}
