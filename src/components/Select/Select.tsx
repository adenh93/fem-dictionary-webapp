import { SelectHTMLAttributes } from "react";
import { IconArrowDown } from "@app/components/Icons";
import styles from "./Select.module.css";

export default function Select({
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className={styles.wrapper}>
      <select {...props}>{children}</select>
      <IconArrowDown />
    </div>
  );
}
