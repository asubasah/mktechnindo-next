import { NextResponse } from 'next/server';
import { getSettings, saveSettings, AVAILABLE_MODELS } from '@/lib/settings';

// GET the current config
export async function GET() {
  try {
    const settings = getSettings();
    return NextResponse.json({
      systemPrompt: settings.SYSTEM_PROMPT,
      aiModel: settings.AI_MODEL || 'google/gemini-2.0-flash-001',
      availableModels: AVAILABLE_MODELS,
    });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch config' }, { status: 500 });
  }
}

// UPDATE the config
export async function POST(req: Request) {
  try {
    const { systemPrompt, aiModel } = await req.json();
    if (!systemPrompt && !aiModel) {
      return NextResponse.json({ error: 'At least one field is required' }, { status: 400 });
    }

    const updates: Record<string, string> = {};
    if (systemPrompt) updates.SYSTEM_PROMPT = systemPrompt;
    if (aiModel) {
      // Accepting any openrouter model string
      updates.AI_MODEL = aiModel;
    }

    const updated = saveSettings(updates);
    return NextResponse.json({
      success: true,
      systemPrompt: updated.SYSTEM_PROMPT,
      aiModel: updated.AI_MODEL,
    });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to save config' }, { status: 500 });
  }
}
