"use client";

import styles from "./Button.module.css";

export default function Button({
  children,
  clickHandler,
  isActive,
}: {
  children: React.ReactNode;
  clickHandler: () => void;
  isActive?: boolean;
}) {
  return (
    <div
      className={`${styles.container} ${isActive ? styles.active : ""}`}
      onClick={() => clickHandler()}
    >
      <div className={styles.fill1}></div>
      <div className={styles.fill2}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
