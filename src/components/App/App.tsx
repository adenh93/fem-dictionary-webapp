import { IconLogo } from "@app/components/Icons";
import SearchInput from "@app/components/SearchInput";
import DictionaryWord from "@app/components/DictionaryWord";
import useDictionarySearch from "@app/hooks/useDictionarySearch";
import ThemeToggle from "@app/components/ThemeToggle";
import FontSelector from "@app/components/FontSelector";
import NotFound from "@app/components/NotFound";
import styles from "./App.module.css";

const initialSearch = "keyboard";

export default function App() {
  const { words, inputError, notFound, onUpdateInput } =
    useDictionarySearch(initialSearch);

  const getContent = () => {
    if (notFound)
      return (
        <div className={styles.notFound}>
          <NotFound />
        </div>
      );
    else if (words)
      return (
        <div className={styles.dictionaryWord}>
          <DictionaryWord word={words[0]} />
        </div>
      );
    else return <></>;
  };

  return (
    <main>
      <header className={styles.header}>
        <IconLogo />
        <div className={styles.widgets}>
          <FontSelector />
          <ThemeToggle />
        </div>
      </header>
      <SearchInput
        error={inputError}
        defaultValue={initialSearch}
        placeholder="Search for any word..."
        onChange={onUpdateInput}
      />
      {getContent()}
    </main>
  );
}
