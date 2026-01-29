
export interface SongNote {
    note: string;
    duration: number; // in seconds, or relative beat
    lyric?: string;
}

export interface Song {
    id: string;
    title: string;
    artist?: string; // or "Traditional"
    difficulty: "easy" | "medium" | "hard";
    instrument: string; // "piano" | "harmonium" | "guitar" (or "all" if generic, but usually specific keys matter)
    notes: SongNote[];
    description?: string;
    tags: string[];
}

export const SONGS: Song[] = [
    {
        id: "happy-birthday",
        title: "Happy Birthday",
        artist: "Traditional",
        difficulty: "easy",
        instrument: "piano",
        description: "The classic birthday song that everyone should know!",
        tags: ["classic", "celebration"],
        notes: [
            { note: "C4", duration: 0.5, lyric: "Hap" },
            { note: "C4", duration: 0.5, lyric: "py" },
            { note: "D4", duration: 1, lyric: "Birth" },
            { note: "C4", duration: 1, lyric: "day" },
            { note: "F4", duration: 1, lyric: "to" },
            { note: "E4", duration: 2, lyric: "you" },
            // ... more notes would go here
        ]
    },
    {
        id: "twinkle-twinkle",
        title: "Twinkle Twinkle Little Star",
        artist: "Traditional",
        difficulty: "easy",
        instrument: "piano",
        description: "A perfect first song for beginners.",
        tags: ["nursery", "kids"],
        notes: [
            { note: "C4", duration: 1, lyric: "Twin" },
            { note: "C4", duration: 1, lyric: "kle" },
            { note: "G4", duration: 1, lyric: "twin" },
            { note: "G4", duration: 1, lyric: "kle" },
            { note: "A4", duration: 1, lyric: "lit" },
            { note: "A4", duration: 1, lyric: "tle" },
            { note: "G4", duration: 2, lyric: "star" },
        ]
    }
];

export function getSong(id: string): Song | undefined {
    return SONGS.find(s => s.id === id);
}

export function getAllSongs(): Song[] {
    return SONGS;
}
