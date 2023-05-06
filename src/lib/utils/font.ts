import { FontStyle } from "@app/hooks/useFontStyles";

const defaultFontStyle: FontStyle = "serif";

/**
 * Retrieves either a client's preferred font style
 * from localStorage, or a default font style.
 */
export function getFontStyleOrDefault() {
  const fontPreference = getFontPreference();
  return fontPreference || defaultFontStyle;
}

/**
 * Retrieves the client's preferred font style preference from
 * localStorage.
 */
export function getFontPreference(): FontStyle | null {
  return window.localStorage.getItem("fontPreference") as FontStyle;
}

/**
 * Caches the client's preferred font style preference in
 * localStorage.
 */
export function setFontPreference(font: FontStyle): void {
  window.localStorage.setItem("fontPreference", font);
}
