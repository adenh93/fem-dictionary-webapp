import { IconLogo } from "@app/components/Icons";
import SearchInput from "@app/components/SearchInput";
import useDictionarySearch from "@app/hooks/useDictionarySearch";
import DictionaryWord from "@app/components/DictionaryWord";
import styles from "./App.module.css";

export default function App() {
  const { words, onUpdateInput } = useDictionarySearch();

  return (
    <main>
      <header className={styles.header}>
        <IconLogo />
      </header>
      <div className={styles.search}>
        <SearchInput
          placeholder="Search for any word..."
          onChange={onUpdateInput}
        />
      </div>
      {words ? <DictionaryWord word={words[0]} /> : <></>}
    </main>
  );
}
