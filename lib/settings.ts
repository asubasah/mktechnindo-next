import fs from 'fs';
import path from 'path';

const SETTINGS_PATH = path.join(process.cwd(), 'config', 'settings.json');

export interface Settings {
  SYSTEM_PROMPT: string;
  DASHBOARD_PASSWORD?: string;
}

const DEFAULT_SETTINGS: Settings = {
  SYSTEM_PROMPT: "You are the AI Sales Engineer for MK Technindo. Provide industrial fabrication solutions.",
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
