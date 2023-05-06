import PlayButton from "@app/components/PlayButton";
import useWordAudio from "@app/hooks/useWordAudio";
import styles from "./WordHeader.module.css";

export interface WordHeaderProps {
  word: Dictionary.Entry;
}

export default function WordHeader({ word }: WordHeaderProps) {
  const { audioAvailable, playing, playSound } = useWordAudio(word);

  return (
    <div className={styles.flexContainer}>
      <div className={styles.leftColumn}>
        <h1>{word.word}</h1>
        <h2>{word.phonetic}</h2>
      </div>
      {audioAvailable && <PlayButton disabled={playing} onClick={playSound} />}
    </div>
  );
}
