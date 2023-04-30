import WordHeader from "@app/components/WordHeader";

export interface DictionaryWordProps {
  word: Dictionary.Entry;
}

export default function DictionaryWord({ word }: DictionaryWordProps) {
  return (
    <>
      <WordHeader word={word} />
    </>
  );
}
