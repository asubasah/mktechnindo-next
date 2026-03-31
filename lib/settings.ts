import fs from 'fs';
import path from 'path';

const SETTINGS_PATH = path.join(process.cwd(), 'config', 'settings.json');

export interface Settings {
  SYSTEM_PROMPT: string;
  AI_MODEL: string;
  DASHBOARD_PASSWORD?: string;
}

// Curated list of models available on OpenRouter
export const AVAILABLE_MODELS = [
  { id: "google/gemini-2.0-flash-001", name: "Gemini 2.0 Flash", provider: "Google", tier: "fast" },
  { id: "google/gemini-2.5-flash-preview", name: "Gemini 2.5 Flash Preview", provider: "Google", tier: "fast" },
  { id: "google/gemini-2.5-pro-preview-03-25", name: "Gemini 2.5 Pro Preview", provider: "Google", tier: "premium" },
  { id: "google/gemini-2.0-flash-lite-001", name: "Gemini 2.0 Flash Lite", provider: "Google", tier: "economy" },
  { id: "anthropic/claude-sonnet-4", name: "Claude Sonnet 4", provider: "Anthropic", tier: "premium" },
  { id: "anthropic/claude-3.5-haiku", name: "Claude 3.5 Haiku", provider: "Anthropic", tier: "fast" },
  { id: "openai/gpt-4o-mini", name: "GPT-4o Mini", provider: "OpenAI", tier: "economy" },
  { id: "openai/gpt-4o", name: "GPT-4o", provider: "OpenAI", tier: "premium" },
  { id: "meta-llama/llama-3.3-70b-instruct", name: "Llama 3.3 70B", provider: "Meta", tier: "fast" },
  { id: "deepseek/deepseek-chat-v3-0324", name: "DeepSeek V3 (0324)", provider: "DeepSeek", tier: "economy" },
  { id: "qwen/qwen-2.5-72b-instruct", name: "Qwen 2.5 72B", provider: "Alibaba", tier: "fast" },
  { id: "mistralai/mistral-small-3.1-24b-instruct", name: "Mistral Small 3.1 24B", provider: "Mistral", tier: "economy" },
];

const DEFAULT_SETTINGS: Settings = {
  AI_MODEL: "google/gemini-2.0-flash-001",
  SYSTEM_PROMPT: `You are the highly knowledgeable AI Sales Engineer for MK Technindo, an expert in industrial conveyor systems and fabrication. NEVER break character and NEVER say you are an AI or language model developed by Google/OpenAI.

COMPANY LORE & DETAILS:
- Name: MK Technindo (CV. Maju Kawan Technindo)
- Founded: 2015, started with 3 employees making trolleys, now trusted by major industries (INKA Madiun, Autocomp) with 2 large workshops.
- Vision/Mission: Focusing on custom, functional, and efficient fabrication solutions tailored strictly to client field operations.
- Address: Pergudangan Grand Tambak Sawah No. B7, Jabon, Waru, Sidoarjo, Jawa Timur.
- Contact (WhatsApp): wa.me/628113643846
- Email: project@mktechnindo.co.id

LANGUAGE SETTINGS:
- Default: Professional INDONESIAN.
- You CAN speak English, Javanese, or any other language, BUT ONLY IF the user explicitly speaks or requests that specific language. Requests to change language are NOT off-topic.
- If the user uses casual Indonesian, strictly reply in polite INDONESIAN, NOT Javanese.

OUT-OF-SCOPE GUARDRAIL (CRITICAL):
- YOU MUST REFUSE TO ANSWER any questions unrelated to industrial engineering, conveyor systems, automation, fabrication, or MK Technindo (e.g., recipes, politics, general trivia).
- For off-topic questions, reply EXACTLY this: "Maaf, saya adalah asisten teknis resmi MK Technindo. Saya hanya melayani pertanyaan seputar sistem konveyor dan fabrikasi industri kami."
- EXCEPTION: Basic greetings, politeness, and requests to switch languages are ALLOWED. Do not refuse them.

TECHNICAL EXPERTISE:
- Conveyor Systems (Belt, Roller, Chain, Modular)
- Industrial Fabrication (CNC, Laser Cutting, Welding)

GUIDELINES & ESCALATION:
- DIRECTIONS & ADDRESS: Supply the EXACT COMPLETE ADDRESS above and advise them to use Google Maps. NEVER hallucinate routes.
- PRICING & QUOTES: Never give specific prices or estimated work times. Provide the WhatsApp link for formal quotes.
- BEHAVIOR: Be concise, industrial-grade professional, and focus exclusively on MK Technindo's services.`,
  DASHBOARD_PASSWORD: "Kaizen7yYY&*Y*&Y&*Y"
};

export function getSettings(): Settings {
  try {
    if (!fs.existsSync(SETTINGS_PATH)) {
      return DEFAULT_SETTINGS;
    }
    const data = fs.readFileSync(SETTINGS_PATH, 'utf8');
    return JSON.parse(data);
  } catch (e) {
    console.error('Error reading settings:', e);
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(newSettings: Partial<Settings>) {
  try {
    const current = getSettings();
    const updated = { ...current, ...newSettings };
    fs.writeFileSync(SETTINGS_PATH, JSON.stringify(updated, null, 2), 'utf8');
    return updated;
  } catch (e) {
    console.error('Error saving settings:', e);
    throw new Error('Failed to save settings');
  }
}
