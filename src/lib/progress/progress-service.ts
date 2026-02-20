
import { createClient } from "@/lib/supabase/client";

/**
 * Progress Tracking Service
 * Tracks lesson completion and user progress
 * Uses localStorage for guests, syncs to Supabase for logged-in users
 */

export interface LessonProgress {
    lessonId: string;
    instrument: string;
    level: "beginner" | "intermediate" | "advanced";
    completed: boolean;
    completedAt?: string;
    score?: number;
}

export interface UserProgress {
    lessons: Record<string, LessonProgress>;
    currentLesson: Record<string, string>; // instrument -> current lesson id
    totalPracticeMinutes: number;
    streakDays: number;
    lastActiveDate: string;
    instruments: string[];
}

const STORAGE_KEY = "musicTutor_progress";

function getDefaultProgress(): UserProgress {
    return {
        lessons: {},
        currentLesson: {},
        totalPracticeMinutes: 0,
        streakDays: 1,
        lastActiveDate: new Date().toISOString().split("T")[0],
        instruments: [],
    };
}

/**
 * Load progress from localStorage
 */
export function loadProgress(): UserProgress {
    if (typeof window === "undefined") return getDefaultProgress();

    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const progress = JSON.parse(saved) as UserProgress;
            // Update streak
            return updateStreak(progress);
        }
    } catch (e) {
        console.error("Failed to load progress:", e);
    }
    return getDefaultProgress();
}

/**
 * Save progress to localStorage and Supabase if logged in
 */
export async function saveProgress(progress: UserProgress): Promise<void> {
    if (typeof window === "undefined") return;

    // Save locally first (optimistic)
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
        console.error("Failed to save progress locally:", e);
    }

    // Sync to cloud if user is logged in
    try {
        const supabase = createClient();
        const { data: { session } } = await supabase.auth.getSession();

        if (session?.user) {
            await supabase
                .from("user_progress")
                .upsert({
                    user_id: session.user.id,
                    data: progress,
                    updated_at: new Date().toISOString()
                });
        }
    } catch (e) {
        // Silent fail for offline/guest
    }
}

/**
 * Sync progress from cloud (call this on login/app load)
 */
export async function syncProgress(): Promise<UserProgress> {
    const supabase = createClient();
    const { data: { session } } = await supabase.auth.getSession();

    if (!session?.user) return loadProgress();

    // 1. Get cloud progress
    const { data: cloudData } = await supabase
        .from("user_progress")
        .select("data")
        .eq("user_id", session.user.id)
        .single();

    let finalProgress = loadProgress();

    if (cloudData?.data) {
        // 2. Merge cloud data with local data
        // For simplicity, we'll assume cloud data is strictly better if it has more lessons
        // In a real app, you'd do a deep merge
        const cloudProgress = cloudData.data as UserProgress;
        const localProgress = finalProgress;

        // If cloud has more completed lessons, use cloud
        const cloudCount = Object.keys(cloudProgress.lessons || {}).length;
        const localCount = Object.keys(localProgress.lessons || {}).length;

        if (cloudCount > localCount) {
            finalProgress = cloudProgress;
        } else {
            // Keep local, but maybe push it to cloud?
            // For now, let's just respect the merge or keep local if new
        }

        // Save merged back to local
        localStorage.setItem(STORAGE_KEY, JSON.stringify(finalProgress));
    } else {
        // No cloud data yet, push local data
        await saveProgress(finalProgress);
    }

    return finalProgress;
}

/**
 * Update streak based on last active date
 */
function updateStreak(progress: UserProgress): UserProgress {
    const today = new Date().toISOString().split("T")[0];
    const lastActive = progress.lastActiveDate;

    if (lastActive === today) {
        return progress;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split("T")[0];

    if (lastActive === yesterdayStr) {
        // Continued streak
        return {
            ...progress,
            streakDays: progress.streakDays + 1,
            lastActiveDate: today,
        };
    } else {
        // Streak broken
        return {
            ...progress,
            streakDays: 1,
            lastActiveDate: today,
        };
    }
}

/**
 * Mark a lesson as complete
 */
export function completeLesson(
    instrument: string,
    lessonId: string,
    level: "beginner" | "intermediate" | "advanced",
    score?: number
): UserProgress {
    const progress = loadProgress();
    const key = `${instrument}_${level}_${lessonId}`;

    progress.lessons[key] = {
        lessonId,
        instrument,
        level,
        completed: true,
        completedAt: new Date().toISOString(),
        score,
    };

    // Update current lesson to next one
    const lessonNum = parseInt(lessonId.replace("lesson-", ""), 10) || 1;
    progress.currentLesson[`${instrument}_${level}`] = `lesson-${lessonNum + 1}`;

    // Track instrument usage
    if (!progress.instruments.includes(instrument)) {
        progress.instruments.push(instrument);
    }

    saveProgress(progress);
    return progress;
}

/**
 * Get current lesson for an instrument and level
 */
export function getCurrentLesson(
    instrument: string,
    level: "beginner" | "intermediate" | "advanced"
): string {
    const progress = loadProgress();
    return progress.currentLesson[`${instrument}_${level}`] || "lesson-1";
}

/**
 * Check if a lesson is completed
 */
export function isLessonCompleted(
    instrument: string,
    lessonId: string,
    level: "beginner" | "intermediate" | "advanced"
): boolean {
    const progress = loadProgress();
    const key = `${instrument}_${level}_${lessonId}`;
    return progress.lessons[key]?.completed || false;
}

/**
 * Get completed lesson count
 */
export function getCompletedLessonCount(): number {
    const progress = loadProgress();
    return Object.values(progress.lessons).filter(l => l.completed).length;
}

/**
 * Add practice time
 */
export function addPracticeTime(minutes: number): UserProgress {
    const progress = loadProgress();
    progress.totalPracticeMinutes += minutes;
    saveProgress(progress);
    return progress;
}

/**
 * Clear local progress (call on logout)
 */
export function clearLocalProgress(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEY);
}

/**
 * Get all progress stats
 */
export function getProgressStats(): {
    completedLessons: number;
    totalPracticeMinutes: number;
    streakDays: number;
    instruments: string[];
} {
    const progress = loadProgress();
    return {
        completedLessons: Object.values(progress.lessons).filter(l => l.completed).length,
        totalPracticeMinutes: progress.totalPracticeMinutes,
        streakDays: progress.streakDays,
        instruments: progress.instruments,
    };
}
