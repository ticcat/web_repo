"use client";

import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import styles from "./StudiesWorkLanding.module.css";
import Button from "@/components/Buttons/Button/Button";
import { scroller, animateScroll } from "react-scroll";
import { useEffect, useState } from "react";

function ToTopButton() {
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
        <Button
          clickHandler={() =>
            animateScroll.scrollToTop({ smooth: true, duration: 300 })
          }
        >
          <div className={styles.toTopBtnText}>To Top</div>
        </Button>
      )}
    </div>
  );
}

export default function StudiesWorkLanding() {
  const shortStudiesText =
    "I have a bachelors degree in Computer Science at Universitat Politècnica de València *UPV* and I have participated in an exchange program where I attended a semester at Korea University *KU* in Seoul, South Korea.";
  const shortExperienceText =
    "After finishing my studies, I decided to enter the professional world as a software developer. After two and half years of experience I decided to pursue new challenges and opportunities by learning modern web technologies widening my skillset and increasing my knowledge in front-end development and design.";

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <AnimatedElement>STUDIES &</AnimatedElement>
        <AnimatedElement>EXPERIENCE</AnimatedElement>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <p>
            <AnimatedElement text={shortStudiesText}></AnimatedElement>
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
            <AnimatedElement text={shortExperienceText}></AnimatedElement>
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
      <ToTopButton></ToTopButton>
    </div>
  );
}
