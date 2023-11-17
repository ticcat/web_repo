"use client";

import Button from "@/components/Buttons/Button/Button";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const buttons = [
    { name: "Home", url: "/" },
    { name: "Studies & Exp", url: "/studiesnexp" },
    { name: "Contact", url: "/contact" },
  ];

  const [compressed, setCompressed] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 600 : true
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCompressed(window.innerWidth <= 600);
    });

    return window.removeEventListener("resize", () => {
      setCompressed(window.innerWidth <= 600);
    });
  });

  return (
    <>
      {!compressed ? (
        <div className={`${styles.links} ${styles.flexRow}`}>
          {buttons.map((button) => {
            return (
              <Fragment key={button.name}>
                <div className={`${styles.navLink} ${styles.visible}`}>
                  <span className={styles.separator}>&nbsp;//</span>
                  <Button
                    clickHandler={() => {}}
                    isActive={pathname === button.url}
                  >
                    <Link className={styles.navText} href={button.url}>
                      <div>{button.name}</div>
                    </Link>
                  </Button>
                </div>
              </Fragment>
            );
          })}
        </div>
      ) : (
        <div className={`${styles.links} ${styles.flexColumn}`}>
          <Fragment>
            <div className={`${styles.navMenuButton} ${styles.visible}`}>
              <span className={styles.separator}>&nbsp;//</span>
              <Button clickHandler={() => setOpen(!open)}>
                <div className={styles.navText}>{open ? "Close" : "Menu"}</div>
              </Button>
              <span className={styles.separator}>//&nbsp;</span>
            </div>
          </Fragment>
          {buttons.map((button) => {
            return (
              <Fragment key={button.name}>
                <div
                  className={`${styles.navLink} ${
                    open ? styles.openAnim : styles.closeAnim
                  }`}
                >
                  <span className={styles.separator}>&nbsp;//</span>
                  <Button
                    clickHandler={() => {}}
                    isActive={pathname === button.url}
                  >
                    <Link className={styles.navText} href={button.url}>
                      {button.name}
                    </Link>
                  </Button>
                </div>
              </Fragment>
            );
          })}
        </div>
      )}
    </>
  );
}
