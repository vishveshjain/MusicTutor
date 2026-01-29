"use client";

import React from "react";

export default function OfflinePage() {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #0F0A1A 0%, #1a1a2e 100%)",
            color: "white",
            textAlign: "center",
            padding: "2rem",
            fontFamily: "system-ui, sans-serif",
        }}>
            <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>🎵</div>
            <h1 style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
                background: "linear-gradient(135deg, #8B5CF6, #D946EF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}>
                You&apos;re Offline
            </h1>
            <p style={{
                fontSize: "1.2rem",
                color: "#9CA3AF",
                maxWidth: "400px",
                marginBottom: "2rem",
            }}>
                Don&apos;t worry! Your lessons and progress are saved locally.
                Reconnect to the internet to continue learning.
            </p>
            <div style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                justifyContent: "center",
            }}>
                <button
                    onClick={() => window.location.reload()}
                    style={{
                        background: "linear-gradient(135deg, #8B5CF6, #D946EF)",
                        border: "none",
                        borderRadius: "12px",
                        padding: "1rem 2rem",
                        color: "white",
                        fontSize: "1rem",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}
                >
                    Try Again
                </button>
            </div>
            <div style={{
                marginTop: "3rem",
                padding: "1.5rem",
                background: "rgba(139, 92, 246, 0.1)",
                borderRadius: "12px",
                border: "1px solid rgba(139, 92, 246, 0.3)",
            }}>
                <h3 style={{ marginBottom: "0.5rem", color: "#8B5CF6" }}>
                    💡 Tip: Practice Mode Available Offline
                </h3>
                <p style={{ color: "#9CA3AF", fontSize: "0.9rem" }}>
                    Once lessons are cached, you can practice without internet!
                </p>
            </div>
        </div>
    );
}
