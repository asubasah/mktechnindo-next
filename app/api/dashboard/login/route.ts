import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSettings } from "@/lib/settings";

const VALID_USERNAME = process.env.DASHBOARD_USERNAME ?? "Nyongpen";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    const settings = getSettings();
    const currentPassword = settings.DASHBOARD_PASSWORD || process.env.DASHBOARD_PASSWORD || "Kaizen7yYY&*Y*&Y&*Y";

    if (
      username?.trim() === VALID_USERNAME &&
      password === currentPassword
    ) {
      const cookieStore = await cookies();
      cookieStore.set("mkt-dashboard-auth", "1", {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 8, // 8 hours
        sameSite: "lax",
      });
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: "Username atau password salah." }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
