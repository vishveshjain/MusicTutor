/**
 * Lesson type definitions - shared across all lesson files
 */

export interface LessonStep {
    type: "intro" | "demo" | "practice" | "sequence" | "complete";
    titleEn: string;
    titleHi: string;
    contentEn?: string;
    contentHi?: string;
    note?: string;
    indianNote?: string;
    highlightKey?: string;
    expectedNote?: string;
    sequence?: string[];
    indianSequence?: string[];
}

export interface Lesson {
    id: string;
    titleEn: string;
    titleHi: string;
    level: "beginner" | "intermediate" | "advanced";
    steps: LessonStep[];
}

export type SkillLevel = "beginner" | "intermediate" | "advanced";
