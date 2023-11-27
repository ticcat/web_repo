"use client";

import Button from "@/components/Buttons/Button/Button";
import styles from "./NavBar.module.css";
import LinkButton from "@/components/Buttons/LinkButton/LinkButton";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { pages } from "@/utils/pages";

export default function NavBar() {
  const pathname = usePathname();
  const [compressed, setCompressed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCompressed(window.innerWidth <= window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCompressed(window.innerWidth <= window.innerHeight);
    });

    return window.removeEventListener("resize", () => {
      setCompressed(window.innerWidth <= window.innerHeight);
    });
  });

  return (
    <>
      {!compressed ? (
        <div className={`${styles.links} ${styles.flexRow}`}>
          {pages.map((page) => {
            return (
              <Fragment key={page.label}>
                <div className={`${styles.navLink} ${styles.visible}`}>
                  <span className={styles.separator}>&nbsp;//</span>
                  <LinkButton page={page} isActive={pathname === page.href}>
                    <div className={styles.navText}>{page.label}</div>
                  </LinkButton>
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
              <Button clickHandler={() => setOpen(!open)} isActive={open}>
                <div className={styles.navText}>{open ? "Close" : "Menu"}</div>
              </Button>
              <span className={styles.separator}>//&nbsp;</span>
            </div>
          </Fragment>
          {pages.map((page) => {
            return (
              <Fragment key={page.label}>
                <div className={styles.navLinkContainer}>
                  <div
                    className={`${styles.navLink} ${
                      open ? styles.openAnim : styles.closeAnim
                    }`}
                  >
                    <span className={styles.separator}>&nbsp;//</span>
                    <LinkButton page={page} isActive={pathname === page.href}>
                      <div className={styles.navText}>{page.label}</div>
                    </LinkButton>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      )}
    </>
  );
}
