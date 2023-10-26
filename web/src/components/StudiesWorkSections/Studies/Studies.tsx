import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import styles from "./Studies.module.css";

export default function Studies() {
  const longLoremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi. Urna cursus eget nunc scelerisque viverra mauris. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Turpis tincidunt id aliquet risus feugiat in ante. Feugiat in fermentum posuere urna. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Urna id volutpat lacus laoreet. A pellentesque sit amet porttitor. Nibh nisl condimentum id venenatis a. Vestibulum lectus mauris ultrices eros in. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Mauris pharetra et ultrices neque ornare. Malesuada bibendum arcu vitae elementum curabitur vitae. Vitae congue eu consequat ac felis. Lobortis mattis aliquam faucibus purus in.  ";

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <AnimatedElement showOnRender>STUDIES</AnimatedElement>
      </div>
      <div className={styles.entries}>
        <div className={styles.studyEntry}>
          <div className={styles.entryHeader}>
            <div className={styles.studyTitle}>
              <AnimatedElement showOnRender>
                Universitat Politècnica de València //
              </AnimatedElement>
              <br></br>
              <AnimatedElement showOnRender>2016 - 2022</AnimatedElement>
            </div>
            <div className={styles.studySubtitle}>
              <AnimatedElement showOnRender>
                Bachelors degree in computer science // Spec. Software
                Engineering
              </AnimatedElement>
            </div>
          </div>
          <div className={styles.entryText}>
            <AnimatedElement
              text={longLoremIpsum}
              showOnRender
            ></AnimatedElement>
          </div>
        </div>
        <div className={styles.studyEntry}>
          <div className={styles.entryHeader}>
            <div className={styles.studyTitle}>
              <AnimatedElement showOnRender>
                Korea University // 고려대학교 //
              </AnimatedElement>
              <br></br>
              <AnimatedElement showOnRender>
                Feb. 2020 - Aug. 2020
              </AnimatedElement>
            </div>
            <div className={styles.studySubtitle}>
              <AnimatedElement showOnRender>
                English studies // Artificial Intelligence class
              </AnimatedElement>
            </div>
          </div>
          <div className={styles.entryText}>
            <AnimatedElement
              text={longLoremIpsum}
              showOnRender
            ></AnimatedElement>
          </div>
        </div>
      </div>
    </div>
  );
}
