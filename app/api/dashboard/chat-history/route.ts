import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const historyPath = path.join(process.cwd(), "config", "chat_history.json");
    if (!fs.existsSync(historyPath)) {
      return NextResponse.json([]);
    }
    const data = fs.readFileSync(historyPath, "utf8");
    const history = JSON.parse(data);
    return NextResponse.json(history);
  } catch (error) {
    console.error("Failed to read chat history:", error);
    return NextResponse.json({ error: "Gagal membaca history chat." }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    const historyPath = path.join(process.cwd(), "config", "chat_history.json");
    if (fs.existsSync(historyPath)) {
      fs.unlinkSync(historyPath);
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Gagal menghapus history." }, { status: 500 });
  }
}
