"use client";

import styles from "./ShortTexts.module.css";
import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import Button from "@/components/Buttons/Button/Button";
import { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import ShortTextEntry from "@/dbClasses/ShortTextEntry";

export default function ShortTexts() {
  const [shortTexts, setShortTexts] = useState<ShortTextEntry[]>([]);

  useEffect(() => {
    fetch("/api/studiesnexp/shortTexts")
      .then((res) => res?.json())
      .then((data) => setShortTexts(data));
  }, []);

  return (
    <div className={styles.textContainer}>
      <div className={styles.text}>
        <p>
          <AnimatedElement text={shortTexts[0]?.text}></AnimatedElement>
        </p>
        <AnimatedElement>
          <div className={styles.goToBtnContainer}>
            <Button
              clickHandler={() => {
                scroller.scrollTo("studies", { smooth: true, duration: 500 });
              }}
            >
              <div className={styles.goToBtnText}>Go to studies</div>
            </Button>
          </div>
        </AnimatedElement>
      </div>
      <div className={styles.text}>
        <p>
          <AnimatedElement text={shortTexts[1]?.text}></AnimatedElement>
        </p>
        <AnimatedElement>
          <div className={styles.goToBtnContainer}>
            <Button
              clickHandler={() => {
                scroller.scrollTo("work", { smooth: true, duration: 500 });
              }}
            >
              <div className={styles.goToBtnText}>Go to experience</div>
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
