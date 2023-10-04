"use client";

import styles from "./LoadingScreen.module.css";

export default function LoadingScreen({
  loading,
  title,
}: {
  loading?: boolean;
  title: string;
}) {
  return (
    <div
      className={`${styles.container} ${loading ? styles.show : styles.hide}`}
    >
      <div className={styles.screen}>
        <div className={styles.title}>
          <h1>{`${title === "" ? "home" : title}`.toUpperCase()}</h1>
        </div>
      </div>
      <div className={styles.fill2}></div>
      <div className={styles.fill1}></div>
    </div>
  );
}
