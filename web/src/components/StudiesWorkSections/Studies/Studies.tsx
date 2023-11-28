"use client";

import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import styles from "./Studies.module.css";
import StudyEntryInfo from "@/dbClasses/StudyEntry";
import useFetchState from "@/hooks/useFetchState";

function StudyEntry({ entry }: { entry: StudyEntryInfo }) {
  return (
    <div className={styles.studyEntry}>
      <div className={styles.entryHeader}>
        <div className={styles.studyTitle}>
          <AnimatedElement>{entry.title} //</AnimatedElement>
          <br></br>
          <AnimatedElement>{entry.duration}</AnimatedElement>
        </div>
        <div className={styles.studySubtitle}>
          <AnimatedElement>{entry.subtitle}</AnimatedElement>
        </div>
      </div>
      <div className={styles.entryPoints}>
        <ul className={styles.entryPointsList}>
          {entry.bulletPoints.map((bP) => (
            <li key={bP}>
              <AnimatedElement text={bP}></AnimatedElement>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Studies() {
  const [studyEntries] = useFetchState<StudyEntryInfo>(
    "/api/studiesnexp/studies"
  );

  return (
    <div id="studies" className={styles.container}>
      <div className={styles.title}>
        <AnimatedElement>STUDIES</AnimatedElement>
      </div>
      <div className={styles.entries}>
        {studyEntries.map((entry) => {
          return (
            <StudyEntry key={entry.id.toString()} entry={entry}></StudyEntry>
          );
        })}
      </div>
    </div>
  );
}
