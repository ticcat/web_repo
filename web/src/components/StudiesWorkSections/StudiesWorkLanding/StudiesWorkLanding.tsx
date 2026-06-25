"use client";

import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import Button from "@/components/Buttons/Button/Button";
import ShortTextEntry from "@/dbClasses/ShortTextEntry";
import useFetchState from "@/hooks/useFetchState";
import { scroller } from "react-scroll";
import styles from "./StudiesWorkLanding.module.css";

export default function StudiesWorkLanding() {
  const [shortTexts] = useFetchState<ShortTextEntry>(
    "/api/studiesnexp/shortTexts",
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <AnimatedElement>STUDIES &</AnimatedElement>
        <AnimatedElement>EXPERIENCE</AnimatedElement>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <p>
            <AnimatedElement
              text={shortTexts.find((t) => t.type === "studies")?.text}
            ></AnimatedElement>
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
            <AnimatedElement
              text={shortTexts.find((t) => t.type === "experience")?.text}
            ></AnimatedElement>
          </p>
          <AnimatedElement>
            <div className={styles.goToBtnContainer}>
              <Button
                clickHandler={() => {
                  scroller.scrollTo("work", { smooth: true, duration: 500 });
                }}
              >
                <div className={styles.goToBtnText}>Go to experiences</div>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}
