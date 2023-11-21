"use client";

import Button from "@/components/Buttons/Button/Button";
import styles from "./NavBar.module.css";
import LinkButton from "@/components/Buttons/LinkButton/LinkButton";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";

export type Page = {
  label: string;
  href: string;
};

const pages: Page[] = [
  { label: "Home", href: "/" },
  { label: "Studies & Exp", href: "/studiesnexp" },
  { label: "Contact", href: "/contact" },
];

function NavManager({ pageToLoad }: { pageToLoad: Page }) {
  const router = useRouter();
  const path = usePathname();

  const [isLoading, setIsLoading] = useState(
    pageToLoad.href !== path && pageToLoad.href !== ""
  );

  if (pageToLoad.href !== path && isLoading) {
    setTimeout(() => router.push(pageToLoad.href), 1000);
    setTimeout(() => setIsLoading(false), 1450);
  }

  useEffect(() => {
    setIsLoading(true);
  }, [pageToLoad]);

  return (
    <LoadingScreen loading={isLoading} title={pageToLoad.label}></LoadingScreen>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  const [compressed, setCompressed] = useState(
    typeof window !== "undefined"
      ? window.innerWidth <= window.innerHeight
      : true
  );
  const [open, setOpen] = useState(false);

  const [pageToLoad, setPageToLoad] = useState<Page>({ label: "", href: "" });

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
      <NavManager pageToLoad={pageToLoad}></NavManager>
      {!compressed ? (
        <div className={`${styles.links} ${styles.flexRow}`}>
          {pages.map((page) => {
            return (
              <Fragment key={page.label}>
                <div className={`${styles.navLink} ${styles.visible}`}>
                  <span className={styles.separator}>&nbsp;//</span>
                  <LinkButton
                    page={page}
                    setPageToLoad={setPageToLoad}
                    isActive={pathname === page.href}
                  >
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
                    <LinkButton
                      page={page}
                      setPageToLoad={setPageToLoad}
                      isActive={pathname === page.href}
                    >
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
