"use client";

import Button from "../../Button/Button";
import Link from "next/link";
import styles from "./CVButton.module.css";
import { getSetting } from "@/utils/userConfig";
import { useState } from "react";

export default function CVButton() {
  const [CVFilename, setCVFilename] = useState("SergioRicoCVEng2Dark.pdf");

  return (
    <Button
      clickHandler={() => {
        getSetting("theme", "dark") === "dark"
          ? setCVFilename("SergioRicoCVEng2Dark.pdf")
          : setCVFilename("SergioRicoCVEng2Light.pdf");
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
