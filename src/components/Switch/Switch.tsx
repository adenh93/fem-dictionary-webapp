import styles from "./Switch.module.css";

export interface SwitchProps {
  value: boolean;
  onToggle: VoidFunction;
}

export default function Switch({ value, onToggle }: SwitchProps) {
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={value} onChange={onToggle} />
      <span className={styles.slider} />
    </label>
  );
}
