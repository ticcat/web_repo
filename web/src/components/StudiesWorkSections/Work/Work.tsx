import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <div id="work" className={styles.container}>
      <div className={styles.title}>
        <AnimatedElement>EXPERIENCE</AnimatedElement>
      </div>
    </div>
  );
}
