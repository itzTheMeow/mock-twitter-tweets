export interface TwitterTheme {
  background: string;
  link: string;
  text: string;
  textBold: string;
  textMuted: string;
}

export const TwitterLightTheme: TwitterTheme = {
  background: "#ffffff",
  link: "#1da1f2",
  text: "#374151",
  textBold: "#111827",
  textMuted: "#6b7280",
};
//TODO: add dark theme

export function themeString(theme: TwitterTheme): string {
  return Object.entries(theme)
    .map(([k, v]) => `--${k}:${v};`)
    .join("");
}
