import useTheme from "@app/hooks/useTheme";
import Switch from "@app/components/Switch";
import { IconMoon } from "@app/components/Icons";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { isDarkMode, onToggleTheme } = useTheme();
  const iconClass = `${styles.icon} ${isDarkMode ? styles.active : ""}`;

  return (
    <div className={styles.flexContainer}>
      <Switch value={isDarkMode} onToggle={onToggleTheme} />
      <IconMoon className={iconClass} />
    </div>
  );
}
