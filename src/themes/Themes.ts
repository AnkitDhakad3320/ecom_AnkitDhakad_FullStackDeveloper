export type ThemeKey = "theme1" | "theme2" | "theme3";

export const themes: Record< ThemeKey, { name: string }> = {
  theme1: { name: "Minimalist" },
  theme2: { name: "Dark" },
  theme3: { name: "Colorful" }
};
