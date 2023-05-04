import { useEffect, useState } from "react";
import {
  getThemeOrDefault,
  matchDarkColorScheme,
  setThemePreference,
} from "@app/lib/utils/theme";

export default function useTheme() {
  const [theme, setTheme] = useState(getThemeOrDefault);
  const isDarkMode = theme === "dark";

  useEffect(() => {
    /**
     * An event listener is added to `(prefers-color-scheme: dark)` media
     * query in the event that the user updates the color scheme of their
     * operating system.
     */

    matchDarkColorScheme.addEventListener("change", onOSThemeUpdate);

    return () => {
      matchDarkColorScheme.removeEventListener("change", onOSThemeUpdate);
    };
  }, []);

  useEffect(() => {
    /* 
      When the theme is updated, sets the data-theme attribute in order
      to apply stylesheet theme variables.
    */
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const onOSThemeUpdate = (_e: MediaQueryListEvent) => {
    const preference = getThemeOrDefault();
    setTheme(preference);
  };

  const onToggleTheme = () => {
    const preference = theme === "dark" ? "light" : "dark";
    setThemePreference(preference);
    setTheme(preference);
  };

  return { isDarkMode, onToggleTheme };
}
