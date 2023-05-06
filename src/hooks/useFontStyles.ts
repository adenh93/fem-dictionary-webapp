import { useEffect, useState } from "react";
import { getFontStyleOrDefault, setFontPreference } from "@app/lib/utils/font";

const fontStyles = ["sans serif", "serif", "mono"] as const;

export type FontStyle = (typeof fontStyles)[number];

export default function useFontStyles() {
  const [selectedFont, setSelectedFont] = useState(getFontStyleOrDefault);

  useEffect(() => {
    document.documentElement.setAttribute("data-font", selectedFont);
  }, [selectedFont]);

  const onUpdateFont = (font: FontStyle) => {
    setSelectedFont(font);
    setFontPreference(font);
  };

  return { fontStyles, selectedFont, onUpdateFont };
}
