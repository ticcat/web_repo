import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import styles from "./page.module.css";

function NameCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.nameCarousel}>
        <AnimatedElement>
          <span className={styles.name}>
            <span className={styles.spacer}>//</span>SITE LOADING
          </span>
        </AnimatedElement>
      </div>
      <div className={styles.nameCarousel}>
        <AnimatedElement>
          <span className={styles.name}>
            <span className={styles.spacer}>//</span>SITE LOADING
          </span>
        </AnimatedElement>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <NameCarousel></NameCarousel>
    </>
  );
}
