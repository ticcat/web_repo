"use client";

import Button from "@/components/Buttons/Button/Button";
import Link from "next/link";
import styles from "./PhoneButton.module.css";

export default function PhoneButton() {
  return (
    <Button clickHandler={() => {}}>
      <Link className={styles.phone} href={"tel:+34695824756"}>
        +34 695 82 47 56
      </Link>
    </Button>
  );
}
