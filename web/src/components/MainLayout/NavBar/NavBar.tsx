"use client";

import Button from "@/components/Buttons/Button/Button";
import styles from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      {" "}
      <div className={styles.links}>
        <span className={styles.separator}>//</span>
        <Button clickHandler={() => {}}>
          <Link className={styles.navItem} href="/">
            <div>Home</div>
          </Link>
        </Button>
        <span className={styles.separator}>//</span>
        <Button clickHandler={() => {}}>
          <Link className={styles.navItem} href="/studiesnwork">
            <div>Studies & Exp</div>
          </Link>
        </Button>
        <span className={styles.separator}>//</span>
      </div>
    </>
  );
}
