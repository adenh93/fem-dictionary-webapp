import PlayButton from "@app/components/PlayButton";
import styles from "./WordHeader.module.css";

export interface WordHeaderProps {
  word: Dictionary.Entry;
}

export default function WordHeader({ word }: WordHeaderProps) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.leftColumn}>
        <h1>{word.word}</h1>
        <h2>{word.phonetic}</h2>
      </div>
      <PlayButton />
    </div>
  );
}
