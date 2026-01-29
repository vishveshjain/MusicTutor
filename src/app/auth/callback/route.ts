import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get("code");
    const next = searchParams.get("next") ?? "/";
    const error = searchParams.get("error");
    const errorDescription = searchParams.get("error_description");

    // Handle OAuth errors from provider
    if (error) {
        const errorMsg = encodeURIComponent(errorDescription || error);
        return NextResponse.redirect(`${origin}/auth/auth-code-error?error=${errorMsg}`);
    }

    if (code) {
        const supabase = await createClient();
        const { error: authError } = await supabase.auth.exchangeCodeForSession(code);
        if (!authError) {
            return NextResponse.redirect(`${origin}${next}`);
        }
        // Pass error details to error page
        const errorMsg = encodeURIComponent(authError.message);
        return NextResponse.redirect(`${origin}/auth/auth-code-error?error=${errorMsg}`);
    }

    return NextResponse.redirect(`${origin}/auth/auth-code-error?error=No%20authorization%20code%20provided`);
}

