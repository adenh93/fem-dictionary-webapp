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
    matchDarkColorScheme.addEventListener("change", onOSThemeUpdate);

    return () => {
      matchDarkColorScheme.removeEventListener("change", onOSThemeUpdate);
    };
  }, []);

  useEffect(() => {
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
