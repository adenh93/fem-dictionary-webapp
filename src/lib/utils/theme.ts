export const matchDarkColorScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
);

/**
 * Retrieves either a client's preferred color theme
 * from localStorage, or the color scheme preferred by the
 * client's operating system.
 */
export const getThemeOrDefault = (): Theme => {
  const themePreference = getThemePreference();
  if (themePreference !== null) return themePreference;
  return getOSPreferredColorScheme();
};

/**
 * Returns dark color theme if `prefers-color-scheme: dark`
 * media query is evident on client. This is typically determined
 * by the operating system or user agent.
 *
 * Read more:
 * https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
 */
export const getOSPreferredColorScheme = (): Theme => {
  return matchDarkColorScheme.matches ? "dark" : "light";
};

/**
 * Caches the client's preferred color theme in localStorage.
 */
export const setThemePreference = (preference: Theme) => {
  localStorage.setItem("themePreference", preference);
};

/**
 * Retrieves the client's preferred color theme from localStorage.
 */
export const getThemePreference = (): Theme | null =>
  localStorage.getItem("themePreference") as Theme;
