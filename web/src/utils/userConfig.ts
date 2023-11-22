export function getSetting(setting: string, fallbackValue: string): string {
  return localStorage?.getItem(setting) || fallbackValue;
}

export function setSetting(setting: string, value: string) {
  localStorage?.setItem(setting, value);
}