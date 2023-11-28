"use client";

import styles from "./EmailButton.module.css";
import Button from "../../Button/Button";
import Link from "next/link";

export default function EmailButton() {
  const emailHRef =
    "https://mail.google.com/mail/?view=cm&fs=1&to=serialticcat@gmail.com&su=I%20would%20like%20to%20contact%20you&body=Hi%20Sergio!";

  return (
    <Link className={styles.link} href={emailHRef} target="_blank">
      <div className={styles.email}>
        <Button clickHandler={() => {}}>serialticcat@gmail.com</Button>
      </div>
    </Link>
  );
}
