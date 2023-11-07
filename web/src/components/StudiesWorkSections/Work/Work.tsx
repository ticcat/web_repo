"use client";

import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import Button from "@/components/Buttons/Button/Button";
import Link from "next/link";
import WorkEntryInfo from "@/dbClasses/WorkEntry";
import styles from "./Work.module.css";
import { useEffect, useState } from "react";

function WorkEntry({ entryInfo }: { entryInfo: WorkEntryInfo }) {
  return (
    <div className={styles.entryContainer}>
      <Link
        className={styles.navLink}
        href={entryInfo.url}
        target="_blank"
      ></Link>
      <div className={styles.borderContainerSecond}></div>
      <div className={styles.borderContainerFirst}></div>
      <div className={styles.titleAndArrow}>
        {/* Title&Arrow */}
        <div
          className={styles.entryTitle}
        >{`${entryInfo.title} // ${entryInfo.role}`}</div>
        <div className={styles.arrowContainer}>
          <div className={styles.arrow}>→</div>
        </div>
      </div>
      <div className={styles.durationAndTech}>
        {/* Duration&Tech */}
        <div
          className={styles.duration}
        >{`${entryInfo.duration.start_date} - ${entryInfo.duration.end_date} // ${entryInfo.duration.period}`}</div>
        <div className={styles.techStack}>
          {entryInfo.stack.map((tech) => {
            return `${tech} // `;
          })}
        </div>
      </div>
    </div>
  );
}

function Filters() {
  return (
    <div className={styles.filters}>
      <Button clickHandler={() => {}}>All</Button>
      <Button clickHandler={() => {}}>Company</Button>
      <Button clickHandler={() => {}}>Personal</Button>
    </div>
  );
}

export default function Work() {
  const [workEntries, setWorkEntries] = useState<WorkEntryInfo[]>([]);

  useEffect(() => {
    fetch("/api/experience/shortList")
      .then((res) => res?.json())
      .then((data) => setWorkEntries(data));

    return () => {
      setWorkEntries([]);
    };
  }, []);

  return (
    <div id="work" className={styles.container}>
      <div className={styles.title}>
        <AnimatedElement>EXPERIENCE</AnimatedElement>
      </div>
      <div className={styles.worksContainer}>
        <Filters></Filters>
        <div className={styles.list}>
          {workEntries.map((entry) => (
            <WorkEntry key={entry.id.toString()} entryInfo={entry}></WorkEntry>
          ))}
        </div>
      </div>
    </div>
  );
}
