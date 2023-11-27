export function getSetting(setting: string, fallbackValue: string): string {
  if(typeof localStorage === "undefined") return fallbackValue;

  return localStorage?.getItem(setting) || fallbackValue;
}

export function setSetting(setting: string, value: string) {
  localStorage?.setItem(setting, value);
}