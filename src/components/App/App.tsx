import { IconLogo } from "@app/components/Icons";
import styles from "./App.module.css";

export default function App() {
  return (
    <main>
      <header className={styles.header}>
        <IconLogo />
      </header>
    </main>
  );
}
