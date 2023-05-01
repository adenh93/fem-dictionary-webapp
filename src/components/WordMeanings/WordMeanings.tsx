import WordMeaning from "@app/components/WordMeaning";
import styles from "./WordMeanings.module.css";

export interface WordMeaningsProps {
  meanings: Dictionary.Meaning[];
}

export default function WordMeanings({ meanings }: WordMeaningsProps) {
  return (
    <div className={styles.meanings}>
      {meanings.map((meaning, key) => (
        <WordMeaning meaning={meaning} key={key} />
      ))}
      <hr />
    </div>
  );
}
