import { IconLogo } from "@app/components/Icons";
import SearchInput from "@app/components/SearchInput";
import styles from "./App.module.css";

export default function App() {
  return (
    <main>
      <header className={styles.header}>
        <IconLogo />
      </header>
      <SearchInput placeholder="Search for any word..." />
    </main>
  );
}
