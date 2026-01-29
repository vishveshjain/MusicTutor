"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { getProgressStats, clearLocalProgress } from "@/lib/progress/progress-service";
import "./profile.css";

interface ProgressStats {
    completedLessons: number;
    totalPracticeMinutes: number;
    streakDays: number;
    instruments: string[];
}

export default function ProfilePage() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState<ProgressStats | null>(null);
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                router.push("/login");
                return;
            }
            setUser(user);

            // Load real progress stats
            const progressStats = getProgressStats();
            setStats(progressStats);

            setLoading(false);
        };

        getUser();
    }, [supabase, router]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        clearLocalProgress();
        router.push("/");
        router.refresh();
    };

    if (loading) {
        return (
            <div className="profile-page">
                <div className="loading">Loading...</div>
            </div>
        );
    }

    return (
        <div className="profile-page">
            <div className="profile-container">
                <header className="profile-header">
                    <a href="/" className="back-btn">← Back</a>
                    <h1>Your Profile</h1>
                </header>

                <div className="user-card">
                    <div className="avatar">
                        {user?.user_metadata?.avatar_url ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={user.user_metadata.avatar_url} alt="Avatar" />
                        ) : (
                            <span>{user?.email?.charAt(0).toUpperCase()}</span>
                        )}
                    </div>
                    <div className="user-info">
                        <h2>{user?.user_metadata?.full_name || user?.email?.split("@")[0]}</h2>
                        <p>{user?.email}</p>
                    </div>
                    <button onClick={handleSignOut} className="sign-out-btn">
                        Sign Out
                    </button>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon">🎯</div>
                        <div className="stat-value">{stats?.completedLessons || 0}</div>
                        <div className="stat-label">Lessons Completed</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">⏱️</div>
                        <div className="stat-value">{stats?.totalPracticeMinutes || 0}</div>
                        <div className="stat-label">Practice Minutes</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">🔥</div>
                        <div className="stat-value">{stats?.streakDays || 0}</div>
                        <div className="stat-label">Day Streak</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon">🎵</div>
                        <div className="stat-value">{stats?.instruments?.length || 0}</div>
                        <div className="stat-label">Instruments</div>
                    </div>
                </div>

                <section className="achievements-section">
                    <h3>🏆 Achievements</h3>
                    <div className="achievements-grid">
                        <div className={`achievement ${(stats?.completedLessons || 0) >= 1 ? "unlocked" : ""}`}>
                            <span className="badge">🎵</span>
                            <span className="title">First Note</span>
                            <span className="desc">Complete your first lesson</span>
                        </div>
                        <div className={`achievement ${(stats?.completedLessons || 0) >= 5 ? "unlocked" : ""}`}>
                            <span className="badge">⭐</span>
                            <span className="title">Rising Star</span>
                            <span className="desc">Complete 5 lessons</span>
                        </div>
                        <div className={`achievement ${(stats?.streakDays || 0) >= 7 ? "unlocked" : ""}`}>
                            <span className="badge">🔥</span>
                            <span className="title">Week Warrior</span>
                            <span className="desc">7 day practice streak</span>
                        </div>
                        <div className={`achievement ${(stats?.instruments?.length || 0) >= 3 ? "unlocked" : ""}`}>
                            <span className="badge">🎸</span>
                            <span className="title">Multi-Instrumentalist</span>
                            <span className="desc">Try 3 different instruments</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
