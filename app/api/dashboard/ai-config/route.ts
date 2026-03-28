import { NextResponse } from 'next/server';
import { getSettings, saveSettings } from '@/lib/settings';

// GET the current config
export async function GET() {
  try {
    const settings = getSettings();
    return NextResponse.json({ systemPrompt: settings.SYSTEM_PROMPT });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch config' }, { status: 500 });
  }
}

// UPDATE the config
export async function POST(req: Request) {
  try {
    const { systemPrompt } = await req.json();
    if (!systemPrompt) {
      return NextResponse.json({ error: 'System prompt is required' }, { status: 400 });
    }
    const updated = saveSettings({ SYSTEM_PROMPT: systemPrompt });
    return NextResponse.json({ success: true, systemPrompt: updated.SYSTEM_PROMPT });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to save config' }, { status: 500 });
  }
}
