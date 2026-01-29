import React from "react";
import Link from "next/link";
import { getAllSongs } from "@/lib/songs/song-data";
import "./songs.css";

export const metadata = {
    title: "Song Library - Music Tutor",
    description: "Learn to play your favorite songs on piano, guitar, and more.",
};

export default function SongsPage() {
    const songs = getAllSongs();

    return (
        <div className="songs-page">
            <div className="container mx-auto">
                <Link href="/" className="back-link">
                    ← Back to Home
                </Link>

                <header className="songs-header">
                    <h1 className="songs-title">Song Library</h1>
                    <p className="songs-subtitle">
                        Master melodies note by note. Choose a song to start practicing.
                    </p>
                </header>

                <div className="songs-grid">
                    {songs.map((song) => (
                        <Link
                            key={song.id}
                            href={`/learn/${song.instrument}/song-${song.id}`}
                            className="song-card"
                        >
                            <div className="song-icon">🎵</div>
                            <div className="song-info">
                                <h3 className="song-name">{song.title}</h3>
                                <p className="song-artist">{song.artist}</p>
                                <p className="text-sm text-gray-400 mb-4">{song.description}</p>

                                <div className="song-tags">
                                    <span className={`badge badge-difficulty-${song.difficulty}`}>
                                        {song.difficulty}
                                    </span>
                                    {song.tags.map(tag => (
                                        <span key={tag} className="badge" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
