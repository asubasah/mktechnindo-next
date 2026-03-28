import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { saveSettings } from "@/lib/settings";

export async function POST(req: Request) {
  // Check auth
  const cookieStore = await cookies();
  const auth = cookieStore.get("mkt-dashboard-auth");
  if (!auth || auth.value !== "1") {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const { newPassword } = await req.json();
    if (!newPassword || newPassword.length < 10) {
      return NextResponse.json({ error: "Password terlalu pendek." }, { status: 400 });
    }

    saveSettings({ DASHBOARD_PASSWORD: newPassword });
    return NextResponse.json({ ok: true, message: "Password berhasil diubah secara permanen." });
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
