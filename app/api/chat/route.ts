import { NextResponse } from "next/server";
import { getSettings } from "@/lib/settings";

export async function POST(req: Request) {
  const settings = getSettings();
  const SYSTEM_PROMPT = settings.SYSTEM_PROMPT;
  try {
    const { messages, fileUrl } = await req.json();

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "AI service is not configured." },
        { status: 503 }
      );
    }

    const conversation = [...messages];
    if (fileUrl) {
      conversation.push({ 
        role: "system", 
        content: `[SYSTEM NOTIFICATION: User has uploaded a file: ${fileUrl}. Acknowledge this and inform them that our Sales Engineers will review this drawing/document shortly. Treat this as a high-priority lead.]` 
      });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "https://mktechnindo.co.id",
        "X-Title": "MK Technindo AI Assistant",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-001",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...conversation,
        ],
        max_tokens: 800,
        temperature: 0.6,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenRouter error:", err);
      return NextResponse.json(
        { error: "AI service error. Please try again." },
        { status: response.status }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "Maaf, terjadi kesalahan. Silakan coba lagi.";

    return NextResponse.json({ reply });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
