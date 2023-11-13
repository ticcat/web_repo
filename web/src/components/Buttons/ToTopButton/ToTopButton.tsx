"use client";

import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import Button from "../Button/Button";
import styles from "./ToTopButton.module.css";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";

export default function ToTopButton() {
  const [isVisible, setVisible] = useState(false);

  const scrollListener = () => {
    setVisible(window.scrollY > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  return (
    <div className={styles.toTopBtn}>
      {isVisible && (
        <AnimatedElement>
          <Button
            clickHandler={() =>
              animateScroll.scrollToTop({ smooth: true, duration: 300 })
            }
          >
            <div className={styles.toTopBtnText}>To Top</div>
          </Button>
        </AnimatedElement>
      )}
    </div>
  );
}
