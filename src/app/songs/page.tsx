"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getAllSongs, type Song } from "@/lib/songs/song-data";
import "./songs.css";

const CATEGORIES = [
    { id: "all", label: "All Songs", labelHi: "सभी गाने" },
    { id: "patriotic", label: "Patriotic", labelHi: "देशभक्ति" },
    { id: "bollywood", label: "Bollywood", labelHi: "बॉलीवुड" },
    { id: "kids", label: "Kids & Nursery", labelHi: "बच्चों के गाने" },
];

function getIconForSong(song: Song): string {
    if (song.tags.includes("patriotic")) return "🇮🇳";
    if (song.tags.includes("bollywood")) return "🎬";
    if (song.tags.includes("kids") || song.tags.includes("nursery")) return "👶";
    if (song.tags.includes("celebration")) return "🎂";
    return "🎵";
}

export default function SongsPage() {
    const allSongs = getAllSongs();
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSongs = activeCategory === "all"
        ? allSongs
        : allSongs.filter(song =>
            song.tags.some(tag => {
                const cleanTag = tag.toLowerCase().trim();
                return activeCategory === "kids"
                    ? cleanTag === "kids" || cleanTag === "nursery"
                    : cleanTag === activeCategory;
            })
        );

    return (
        <div className="songs-page">
            <div className="container mx-auto">
                <Link href="/" className="back-link">
                    ← Back to Home
                </Link>

                <header className="songs-header">
                    <h1 className="songs-title">
                        🎵 Song Library
                        <span className="title-hi">गाने सीखें</span>
                    </h1>
                    <p className="songs-subtitle">
                        Master melodies note by note. Choose a song to start learning!
                    </p>
                </header>

                {/* Category Tabs */}
                <div className="category-tabs">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            className={`category-tab ${activeCategory === cat.id ? "active" : ""}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Songs Count */}
                <p className="songs-count">
                    {filteredSongs.length} {filteredSongs.length === 1 ? "song" : "songs"} available
                </p>

                <div className="songs-grid">
                    {filteredSongs.map((song) => (
                        <Link
                            key={song.id}
                            href={`/learn/${song.instrument}/song-${song.id}`}
                            className="song-card"
                        >
                            <div className="song-icon">{getIconForSong(song)}</div>
                            <div className="song-info">
                                <h3 className="song-name">{song.title}</h3>
                                {song.titleHi && (
                                    <p className="song-name-hi">{song.titleHi}</p>
                                )}
                                <p className="song-artist">{song.artist}</p>
                                <p className="song-description">{song.description}</p>

                                <div className="song-meta">
                                    <span className="note-count">
                                        🎹 {song.notes.length} notes
                                    </span>
                                    <span className="instrument-badge">
                                        {song.instrument}
                                    </span>
                                </div>

                                <div className="song-tags">
                                    <span className={`badge badge-difficulty-${song.difficulty}`}>
                                        {song.difficulty === "easy" ? "⭐ Easy" :
                                            song.difficulty === "medium" ? "⭐⭐ Medium" : "⭐⭐⭐ Hard"}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredSongs.length === 0 && (
                    <div className="no-songs">
                        <p>No songs found in this category yet.</p>
                        <button
                            className="btn btn-secondary"
                            onClick={() => setActiveCategory("all")}
                        >
                            View All Songs
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
