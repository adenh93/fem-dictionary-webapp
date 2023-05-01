import { IconNewWindow } from "@app/components/Icons";
import styles from "./WordSource.module.css";

export interface WordSourceProps {
  sourceUrls: string[];
}

export default function WordSource({ sourceUrls }: WordSourceProps) {
  return (
    <div>
      <div className={styles.title}>Source</div>
      {sourceUrls.map((url) => (
        <div className={styles.link}>
          <a href={url} target="_blank">
            {url}
          </a>
          <IconNewWindow />
        </div>
      ))}
    </div>
  );
}
