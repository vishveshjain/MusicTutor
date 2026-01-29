import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "Music Tutor | AI-Powered Music Learning",
    description:
        "Learn any instrument with your personal AI music teacher. Real-time feedback, structured lessons, and personalized guidance for harmonium, piano, guitar, and more.",
    keywords: [
        "music tutor",
        "learn music",
        "harmonium lessons",
        "piano lessons",
        "guitar lessons",
        "AI music teacher",
        "Indian classical music",
        "Sa Re Ga Ma",
    ],
    authors: [{ name: "Music Tutor" }],
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Music Tutor",
    },
};

export const viewport: Viewport = {
    themeColor: "#0F0A1A",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/icons/icon-192.png" />
            </head>
            <body>{children}</body>
        </html>
    );
}
