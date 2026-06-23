"use client";

import { getSetting } from "@/utils/userConfig";
import Link from "next/link";
import { useState } from "react";
import Button from "../../Button/Button";
import styles from "./CVButton.module.css";

export default function CVButton() {
  const [CVFilename, setCVFilename] = useState("SergioRicoCVEngDark.pdf");

  return (
    <Button
      clickHandler={() => {
        getSetting("theme", "dark") === "dark"
          ? setCVFilename("SergioRicoCVEngDark.pdf")
          : setCVFilename("SergioRicoCVEngLight.pdf");
      }}
    >
      <Link
        className={styles.link}
        href={`/files/${CVFilename}`}
        target="_blank"
      >
        <div className={styles.text}>
          CV<span className={styles.arrow}>↓</span>
        </div>
      </Link>
    </Button>
  );
}
