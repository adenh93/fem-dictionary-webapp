import WordDefinitions from "@app/components/WordDefinitions";
import RelatedWords from "@app/components/RelatedWords";
import styles from "./WordMeaning.module.css";

export interface WordMeaningProps {
  meaning: Dictionary.Meaning;
}

export default function WordMeaning({ meaning }: WordMeaningProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>{meaning.partOfSpeech}</span>
      </div>
      <h3>Meaning</h3>
      <WordDefinitions definitions={meaning.definitions} />
      {!!meaning.synonyms.length && (
        <RelatedWords title="Synonyms" words={meaning.synonyms} />
      )}
      {!!meaning.antonyms.length && (
        <RelatedWords title="Antonyms" words={meaning.antonyms} />
      )}
    </div>
  );
}
