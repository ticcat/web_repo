"use client";

import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import styles from "./Studies.module.css";
import { useEffect, useState } from "react";
import StudyEntryInfo from "@/dbClasses/StudyEntry";

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
      <div className={styles.entryText}>
        <AnimatedElement text={entry.text}></AnimatedElement>
      </div>
    </div>
  );
}

export default function Studies() {
  const [studyEntries, setStudyEntries] = useState<StudyEntryInfo[]>([]);

  useEffect(() => {
    fetch("/api/studies")
      .then((res) => res?.json())
      .then((data) => setStudyEntries(data));

    return setStudyEntries([]);
  }, []);

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
