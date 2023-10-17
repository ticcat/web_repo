"use client";

import Button from "../Button/Button";
import Link from "next/link";
import styles from "./CVButton.module.css";

export default function CVButton() {
  return (
    <Link
      className={styles.link}
      href="/files/SergioRicoCVEng.pdf"
      target="_blank"
    >
      <Button clickHandler={() => {}}>
        <div className={styles.text}>
          CV<span className={styles.arrow}>↓</span>
        </div>
      </Button>
    </Link>
  );
}
