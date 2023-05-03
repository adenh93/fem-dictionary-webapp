const defaultTheme: Theme = "light";

export const matchDarkColorScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
);

export const getThemeOrDefault = (): Theme => {
  const themePreference = getThemePreference();
  if (themePreference !== null) return themePreference;
  return getOSPreferredColorScheme() || defaultTheme;
};

export const getOSPreferredColorScheme = (): Theme | null => {
  if (!window.matchMedia) return null;

  return matchDarkColorScheme.matches ? "dark" : "light";
};

export const setThemePreference = (preference: Theme) => {
  localStorage.setItem("themePreference", preference);
};

export const getThemePreference = (): Theme | null =>
  localStorage.getItem("themePreference") as Theme;
