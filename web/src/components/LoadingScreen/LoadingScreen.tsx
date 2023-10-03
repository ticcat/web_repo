"use client";

import styles from "./LoadingScreen.module.css";
import { usePathname } from "next/navigation";

export default function LoadingScreen({ show }: { show?: boolean }) {
  const path = usePathname();
  const loadingTitle = path === "/" ? "Home" : path;

  return (
    <div className={`${styles.container} ${show ? styles.show : styles.hide}`}>
      <div className={styles.screen}>
        <div className={styles.title}>
          <h1>{loadingTitle.toUpperCase()}</h1>
        </div>
      </div>
      <div className={styles.fill2}></div>
      <div className={styles.fill1}></div>
    </div>
  );
}
