"use client";

import Button from "../Button/Button";
import styles from "./CVButton.module.css";

export default function CVButton() {
  return (
    <div className={styles.text}>
      <Button clickHandler={() => console.log("CV")}>
        CV<span className={styles.arrow}>↓</span>
      </Button>
    </div>
  );
}
