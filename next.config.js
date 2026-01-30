const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    fallbacks: {
        document: "/offline",  // Offline fallback page
    },
    runtimeCaching: [
        // Cache soundfont files for instrument sounds (1 year)
        {
            urlPattern: /^https:\/\/gleitz\.github\.io\/midi-js-soundfonts\/.*/i,
            handler: "CacheFirst",
            options: {
                cacheName: "soundfont-cache",
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                },
            },
        },
        // Cache Google Fonts
        {
            urlPattern: /^https:\/\/fonts\.(?:gstatic|googleapis)\.com\/.*/i,
            handler: "CacheFirst",
            options: {
                cacheName: "google-fonts-cache",
                expiration: {
                    maxEntries: 10,
                    maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                },
            },
        },
        // Cache static assets
        {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
            handler: "CacheFirst",
            options: {
                cacheName: "static-images-cache",
                expiration: {
                    maxEntries: 100,
                    maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
                },
            },
        },
        // Cache lesson content API (stale-while-revalidate)
        {
            urlPattern: /\/api\/lessons\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
                cacheName: "lesson-api-cache",
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 60 * 60 * 24, // 1 day
                },
            },
        },
        // Cache pages (network first, fallback to cache)
        {
            urlPattern: /^https?:\/\/.*\/(?:learn|practice|onboarding).*/i,
            handler: "NetworkFirst",
            options: {
                cacheName: "pages-cache",
                expiration: {
                    maxEntries: 32,
                    maxAgeSeconds: 60 * 60 * 24, // 1 day
                },
                networkTimeoutSeconds: 10,
            },
        },
    ],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = withPWA(nextConfig);

