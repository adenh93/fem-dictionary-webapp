import styles from "./RelatedWords.module.css";

export interface RelatedWordsProps {
  title: string;
  words: string[];
}

export default function RelatedWords({ title, words }: RelatedWordsProps) {
  return (
    <div className={styles.flexContainer}>
      <h3>{title}</h3>
      <span className={styles.wordList}>{words.join(", ")}</span>
    </div>
  );
}
