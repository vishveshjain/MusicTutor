"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function AuthErrorContent() {
    const searchParams = useSearchParams();
    const error = searchParams.get("error") || "Unknown error";

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #0F0A1A 0%, #1a1a2e 50%, #16213e 100%)",
            padding: "2rem",
            color: "white",
        }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>⚠️</div>
            <h1 style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                background: "linear-gradient(135deg, #EF4444, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}>
                Authentication Error
            </h1>
            <p style={{
                color: "#9CA3AF",
                marginBottom: "2rem",
                textAlign: "center",
                maxWidth: "400px",
            }}>
                There was a problem signing you in. This could be due to an expired link or a configuration issue.
            </p>
            {error && (
                <p style={{
                    color: "#EF4444",
                    fontSize: "0.875rem",
                    marginBottom: "2rem",
                    padding: "0.5rem 1rem",
                    background: "rgba(239, 68, 68, 0.1)",
                    borderRadius: "8px",
                }}>
                    {error}
                </p>
            )}
            <div style={{ display: "flex", gap: "1rem" }}>
                <a
                    href="/login"
                    style={{
                        padding: "0.75rem 1.5rem",
                        background: "linear-gradient(135deg, #8B5CF6, #D946EF)",
                        border: "none",
                        borderRadius: "10px",
                        color: "white",
                        fontWeight: "600",
                        textDecoration: "none",
                    }}
                >
                    Try Again
                </a>
                <a
                    href="/"
                    style={{
                        padding: "0.75rem 1.5rem",
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "10px",
                        color: "white",
                        fontWeight: "500",
                        textDecoration: "none",
                    }}
                >
                    Go Home
                </a>
            </div>
        </div>
    );
}

export default function AuthCodeErrorPage() {
    return (
        <Suspense fallback={<div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0F0A1A",
            color: "white"
        }}>Loading...</div>}>
            <AuthErrorContent />
        </Suspense>
    );
}
