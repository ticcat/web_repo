import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import styles from "./StudiesWorkLanding.module.css";
import ShortTexts from "./ShortTexts/ShortTexts";

export default function StudiesWorkLanding() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <AnimatedElement>STUDIES &</AnimatedElement>
        <AnimatedElement>EXPERIENCE</AnimatedElement>
      </div>
      <div className={styles.shortTextsContainer}>
        <ShortTexts></ShortTexts>
      </div>
    </div>
  );
}
