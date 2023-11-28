"use client";

import { useLayoutEffect, useEffect, useState } from "react";
import styles from "./SideLine.module.css";
import { usePathname } from "next/navigation";

export default function SideLine({ side }: { side: "left" | "right" }) {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  function scrollHandler() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = winScroll / height;

    setScrollProgress(!isNaN(scrolled) ? scrolled : 1);
  }

  useEffect(() => {
    scrollHandler();
  }, [pathname]);

  useLayoutEffect(() => {
    window.onscroll = scrollHandler;
  });

  return (
    <div
      style={{ transform: `scaleY(${side === "right" ? scrollProgress : 1})` }}
      className={`${side === "left" ? styles.leftLine : styles.rightLine}`}
    ></div>
  );
}
