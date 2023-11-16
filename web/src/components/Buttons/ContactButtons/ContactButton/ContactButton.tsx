"use client";

import Link from "next/link";
import Button from "../../Button/Button";
import styles from "./ContactButton.module.css";

export default function ContactButton() {
  return (
    <Button clickHandler={() => {}}>
      <Link className={styles.text} href="/contact">
        Want to tell me something? <span className={styles.arrow}>→</span>
      </Link>
    </Button>
  );
}
