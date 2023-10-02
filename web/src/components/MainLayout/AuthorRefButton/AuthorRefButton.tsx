"use client";

import styles from "./AuthorRefButton.module.css";
import Button from "@/components/Buttons/Button/Button";

export default function AuthorRefButton() {
  return (
    <Button clickHandler={() => window.open("https://twitter.com/serrial3")}>
      <div className={styles.authorRefButton}>
        <div className={styles.authorRefText}>
          <span className={styles.heart}>❥</span> By Sergio
        </div>
      </div>
    </Button>
  );
}
