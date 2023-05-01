import WordHeader from "@app/components/WordHeader";
import WordSource from "@app/components/WordSource";
import WordMeanings from "@app/components/WordMeanings";

export interface DictionaryWordProps {
  word: Dictionary.Entry;
}

export default function DictionaryWord({ word }: DictionaryWordProps) {
  return (
    <>
      <WordHeader word={word} />
      <WordMeanings meanings={word.meanings} />
      <WordSource sourceUrls={word.sourceUrls} />
    </>
  );
}
