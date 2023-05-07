import { InputHTMLAttributes } from "react";
import { IconSearch } from "@app/components/Icons";
import styles from "./SearchInput.module.css";

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | null;
}

export default function SearchInput({ error, ...props }: SearchInputProps) {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input {...props} className={styles.input} aria-invalid={!!error} />
        <IconSearch className={styles.icon} />
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
