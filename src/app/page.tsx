"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";
import { syncProgress } from "@/lib/progress/progress-service";
import "./home.css";

function UserNav() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
      if (user) {
        // Sync progress from cloud
        syncProgress();
      }
    };
    getUser();
  }, [supabase]);

  if (loading) {
    return <nav className="user-nav"><div style={{ height: "40px" }} /></nav>;
  }

  if (!user) {
    return (
      <nav className="user-nav">
        <Link href="/login" className="login-btn">
          Sign In
        </Link>
      </nav>
    );
  }

  return (
    <nav className="user-nav">
      <Link href="/profile" className="nav-profile">
        {user.user_metadata?.avatar_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user.user_metadata.avatar_url}
            alt="Profile"
            className="nav-avatar"
          />
        ) : (
          <span className="nav-avatar-placeholder">
            {user.email?.charAt(0).toUpperCase()}
          </span>
        )}
        <span className="nav-username">
          {user.user_metadata?.full_name || user.email?.split("@")[0]}
        </span>
      </Link>
    </nav>
  );
}

export default function HomePage() {
  return (
    <main className="home">
      <UserNav />

      <section className="hero">
        <h1 className="hero-title">
          Learn Music with <span className="text-gradient">AI</span>
        </h1>
        <p className="hero-subtitle">
          Interactive lessons for Harmonium, Piano, Guitar & more
        </p>
        <Link href="/onboarding" className="btn btn-primary btn-lg">
          Start Learning →
        </Link>
        <Link href="/songs" className="btn btn-secondary btn-lg" style={{ marginLeft: '1rem' }}>
          Browse Songs 🎵
        </Link>
      </section>

      <section className="instruments">
        <h2 className="section-title">Choose Your Instrument</h2>

        <div className="instruments-grid">
          <Link href="/onboarding?instrument=harmonium" className="instrument-card">
            <span className="instrument-emoji">🪗</span>
            <span className="instrument-name">Harmonium</span>
          </Link>

          <Link href="/onboarding?instrument=piano" className="instrument-card">
            <span className="instrument-emoji">🎹</span>
            <span className="instrument-name">Piano</span>
          </Link>

          <Link href="/onboarding?instrument=guitar" className="instrument-card">
            <span className="instrument-emoji">🎸</span>
            <span className="instrument-name">Guitar</span>
          </Link>

          <Link href="/onboarding?instrument=ukulele" className="instrument-card">
            <span className="instrument-emoji">🪕</span>
            <span className="instrument-name">Ukulele</span>
          </Link>

          <Link href="/onboarding?instrument=flute" className="instrument-card">
            <span className="instrument-emoji">🎺</span>
            <span className="instrument-name">Flute</span>
          </Link>

          <Link href="/onboarding?instrument=violin" className="instrument-card">
            <span className="instrument-emoji">🎻</span>
            <span className="instrument-name">Violin</span>
          </Link>

          <Link href="/onboarding?instrument=tabla" className="instrument-card">
            <span className="instrument-emoji">🥁</span>
            <span className="instrument-name">Tabla</span>
          </Link>

          <Link href="/onboarding?instrument=drums" className="instrument-card">
            <span className="instrument-emoji">🪘</span>
            <span className="instrument-name">Drums</span>
          </Link>

          <Link href="/onboarding?instrument=saxophone" className="instrument-card">
            <span className="instrument-emoji">🎷</span>
            <span className="instrument-name">Saxophone</span>
          </Link>
        </div>
      </section>

      <section className="free-practice">
        <Link href="/practice" className="btn btn-secondary">
          🎵 Free Practice
        </Link>
      </section>

      <footer className="footer">
        <p>🎵 Music Tutor • Made with ❤️</p>
      </footer>
    </main>
  );
}
