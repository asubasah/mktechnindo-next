import { NextResponse } from "next/server";
import { getSettings } from "@/lib/settings";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const settings = getSettings();
  const SYSTEM_PROMPT = settings.SYSTEM_PROMPT;
  const AI_MODEL = settings.AI_MODEL || "google/gemini-2.0-flash-001";
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
        model: AI_MODEL,
        messages: [
          { 
            role: "system", 
            content: `${SYSTEM_PROMPT}\n\n[TIME CONTEXT: Waktu saat ini di Indonesia (WIB) adalah ${new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })}. Gunakan salam yang sesuai: 00:00-11:00 = Pagi, 11:00-15:00 = Siang, 15:00-18:00 = Sore, 18:00-24:00 = Malam.]` 
          },
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
    
    // Save to History (WITHOUT database)
    try {
      const historyPath = path.join(process.cwd(), "config", "chat_history.json");
      const historyDir = path.dirname(historyPath);
      if (!fs.existsSync(historyDir)) fs.mkdirSync(historyDir, { recursive: true });

      let history = [];
      if (fs.existsSync(historyPath)) {
        const fileContent = fs.readFileSync(historyPath, "utf8");
        history = JSON.parse(fileContent);
      }

      // Add modern entry
      history.unshift({
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        messages: messages,
        reply: reply,
        model: AI_MODEL,
        fileUrl: fileUrl || null
      });

      // Keep only last 100 chats to prevent huge file
      if (history.length > 100) history = history.slice(0, 100);

      fs.writeFileSync(historyPath, JSON.stringify(history, null, 2), "utf8");
    } catch (err) {
      console.error("Failed to save chat history:", err);
    }

    return NextResponse.json({ reply });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
