"use client";

import Button from "@/components/Buttons/Button/Button";
import styles from "./NavBar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const buttons = [
    { name: "Home", url: "/" },
    { name: "Studies & Exp", url: "/studiesnexp" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <>
      <div className={styles.links}>
        {buttons.map((button) => {
          return (
            <Fragment key={button.name}>
              <span className={styles.separator}>//</span>
              <Button
                clickHandler={() => {}}
                isActive={pathname === button.url}
              >
                <Link className={styles.navItem} href={button.url}>
                  <div>{button.name}</div>
                </Link>
              </Button>
            </Fragment>
          );
        })}
        <span className={styles.separator}>//</span>
      </div>
    </>
  );
}
