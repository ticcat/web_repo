"use client";

import styles from "./EmailButton.module.css";
import Button from "../Button/Button";

export default function EmailButton() {
  return (
    <div className={styles.email}>
      <Button
        clickHandler={() => {
          if (typeof window !== "undefined")
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=serialticcat@gmail.com&su=I%20would%20like%20to%20contact%20you&body=Hi%20Sergio!"
            );
        }}
      >
        // serialticcat@gmail.com //
      </Button>
    </div>
  );
}
