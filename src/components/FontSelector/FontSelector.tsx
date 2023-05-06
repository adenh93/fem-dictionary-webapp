import { FormEventHandler } from "react";
import Select from "@app/components/Select";
import useFontStyles, { FontStyle } from "@app/hooks/useFontStyles";

export default function FontSelector() {
  const { fontStyles, selectedFont, onUpdateFont } = useFontStyles();

  const onChange: FormEventHandler<HTMLSelectElement> = (e) =>
    onUpdateFont(e.currentTarget.value as FontStyle);

  return (
    <Select value={selectedFont} onChange={onChange}>
      {fontStyles.map((style) => (
        <option value={style}>{style}</option>
      ))}
    </Select>
  );
}
