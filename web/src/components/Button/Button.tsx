"use client";

import styles from "./Button.module.css";

export default function Button({
  children,
  clickHandler,
}: {
  children: React.ReactNode;
  clickHandler: () => void;
}) {
  return (
    <div className={styles.container} onClick={() => clickHandler()}>
      <div className={styles.fill1}></div>
      <div className={styles.fill2}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
