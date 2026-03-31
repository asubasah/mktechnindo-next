import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSettings } from "@/lib/settings";

// Generate a random strong password using OpenRouter AI
export async function POST(req: Request) {
  const cookieStore = await cookies();
  const auth = cookieStore.get("mkt-dashboard-auth");
  if (!auth || auth.value !== "1") {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  void req;

  const settings = getSettings();
  const AI_MODEL = settings.AI_MODEL || "google/gemini-2.0-flash-001";

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "AI service not configured." }, { status: 503 });
  }

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
      "HTTP-Referer": "https://mktechnindo.co.id",
      "X-Title": "MK Technindo Dashboard",
    },
    body: JSON.stringify({
      model: AI_MODEL,
      messages: [
        {
          role: "user",
          content: "Generate a single strong random password that is exactly 16 characters long, containing uppercase letters, lowercase letters, numbers, and special characters (!@#$%^&*). Return ONLY the password string with no explanation, no quotes, no spaces.",
        },
      ],
      max_tokens: 30,
      temperature: 1.2,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "AI error." }, { status: 500 });
  }

  const data = await response.json();
  const password = data.choices?.[0]?.message?.content?.trim() ?? "";

  if (!password || password.length < 10) {
    return NextResponse.json({ error: "Gagal menghasilkan password." }, { status: 500 });
  }

  return NextResponse.json({ password });
}
