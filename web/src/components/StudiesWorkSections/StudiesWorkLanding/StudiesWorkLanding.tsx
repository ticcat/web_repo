"use client";

import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import styles from "./StudiesWorkLanding.module.css";
import Button from "@/components/Buttons/Button/Button";

export default function StudiesWorkLanding() {
  const shortStudiesText =
    "I have a bachelors degree in Computer Science at Universitat Politècnica de València *UPV* and I have participated in an exchange program where I attended a semester at Korea University *KU* in Seoul, South Korea.";
  const shortExperienceText =
    "After finishing my studies, I decided to enter the professional world as a software developer. After two and half years of experience I decided to pursue new challenges and opportunities by learning modern web technologies widening my skillset and increasing my knowledge in front-end development and design.";

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <AnimatedElement showOnRender>STUDIES &</AnimatedElement>
        <AnimatedElement showOnRender>EXPERIENCE</AnimatedElement>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <p>
            <AnimatedElement
              showOnRender
              text={shortStudiesText}
            ></AnimatedElement>
          </p>
          <AnimatedElement showOnRender>
            <div className={styles.goToBtnContainer}>
              <Button clickHandler={() => {}}>
                <div className={styles.goToBtnText}>Go to studies</div>
              </Button>
            </div>
          </AnimatedElement>
        </div>
        <div className={styles.text}>
          <p>
            <AnimatedElement
              showOnRender
              text={shortExperienceText}
            ></AnimatedElement>
          </p>
          <AnimatedElement showOnRender>
            <div className={styles.goToBtnContainer}>
              <Button clickHandler={() => {}}>
                <div className={styles.goToBtnText}>Go to experience</div>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}
