import styles from "./WordDefinitions.module.css";

export interface WordDefinitionsProps {
  definitions: Dictionary.Definition[];
}

export default function WordDefinitions({ definitions }: WordDefinitionsProps) {
  return (
    <ul className={styles.definitions}>
      {definitions.map(({ definition, example }, key) => (
        <li key={key}>
          <span>{definition}</span>
          {!!example && <div className={styles.example}>"{example}"</div>}
        </li>
      ))}
    </ul>
  );
}
