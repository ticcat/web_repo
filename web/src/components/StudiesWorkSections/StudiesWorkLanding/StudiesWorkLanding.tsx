"use client";

import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import styles from "./StudiesWorkLanding.module.css";
import Button from "@/components/Buttons/Button/Button";
import { scroller } from "react-scroll";
import { useEffect, useState } from "react";
import ShortTextEntry from "@/dbClasses/ShortTextEntry";

export default function StudiesWorkLanding() {
  const [shortTexts, setShortTexts] = useState<ShortTextEntry[]>([]);

  useEffect(() => {
    fetch("/api/studiesnexp/shortTexts")
      .then((res) => res?.json())
      .then((data) => setShortTexts(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <AnimatedElement>STUDIES &</AnimatedElement>
        <AnimatedElement>EXPERIENCE</AnimatedElement>
      </div>
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
    </div>
  );
}
