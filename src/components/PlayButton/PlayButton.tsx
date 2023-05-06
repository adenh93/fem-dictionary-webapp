import { ButtonHTMLAttributes } from "react";
import { IconPlay } from "@app/components/Icons";
import styles from "./PlayButton.module.css";

export default function PlayButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button {...props} className={styles.button}>
      <IconPlay className={styles.icon} />
    </button>
  );
}
