# Deployment Guide

## 1. Vercel Deployment

1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import the Git repository: `vishveshjain/MusicTutor`.
4.  In **Configure Project**:
    *   **Framework Preset**: Next.js (should be auto-detected).
    *   **Root Directory**: `MusicTutor` (edit this if it says `./`).
5.  **Environment Variables**: Use the values from your `.env` file.
    *   `NEXT_PUBLIC_SUPABASE_URL`
    *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6.  Click **Deploy**.

## 2. Supabase Setup (If not done)

1.  Go to [Supabase Dashboard](https://supabase.com/dashboard).
2.  Run the **SQL Migration** manually in the SQL Editor (code provided in chat history or `src/lib/supabase/schema.sql`).
3.  **Authentication**:
    *   Enable **Google** and **GitHub** providers under Authentication -> Providers.
    *   Add your Vercel production URL (e.g., `https://music-tutor.vercel.app`) to **Site URL** and **Redirect URLs** in Authentication -> URL Configuration.

## 3. Verify

*   Visit your Vercel URL.
*   Log in.
*   Check if your progress saves to the database.
