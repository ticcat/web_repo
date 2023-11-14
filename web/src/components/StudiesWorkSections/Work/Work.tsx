"use client";

import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import Button from "@/components/Buttons/Button/Button";
import Link from "next/link";
import WorkEntryInfo from "@/dbClasses/WorkEntry";
import styles from "./Work.module.css";
import { useState } from "react";
import useFetchState from "@/hooks/useFetchState";

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

function Filters({
  setWorkEntries,
}: {
  setWorkEntries: (entries: Array<WorkEntryInfo>) => void;
}) {
  type Filter = {
    name: string;
    selected: boolean;
    type: string;
  };

  const [filters, setFilters] = useState<Filter[]>([
    { name: "All", selected: true, type: "" },
    { name: "Company", selected: false, type: "work" },
    { name: "Personal", selected: false, type: "personal" },
  ]);

  const clickHandler = (filter: Filter) => {
    const updatedFilters = filters.map((f) => {
      if (f.name === filter.name) {
        return {
          name: f.name,
          selected: true,
          type: f.type,
        };
      } else {
        return {
          name: f.name,
          selected: false,
          type: f.type,
        };
      }
    });

    fetch(`/api/studiesnexp/experience/shortList?type=${filter.type}`)
      .then((res) => res?.json())
      .then((data) => {
        setWorkEntries(data);
        console.log(filter.name + " clicked");
        setFilters(updatedFilters);
      });
  };

  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <Button
          key={filter.name}
          clickHandler={() => clickHandler(filter)}
          isActive={filter.selected}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
}

export default function Work() {
  const [workEntries, setWorkEntries] = useFetchState<WorkEntryInfo>(
    "/api/studiesnexp/experience/shortList"
  );

  return (
    <div id="work" className={styles.container}>
      <div className={styles.title}>
        <AnimatedElement>EXPERIENCE</AnimatedElement>
      </div>
      <div className={styles.worksContainer}>
        <Filters
          setWorkEntries={(entries) => setWorkEntries(entries)}
        ></Filters>
        <div className={styles.list}>
          {workEntries.map((entry) => (
            <WorkEntry key={entry.id.toString()} entryInfo={entry}></WorkEntry>
          ))}
        </div>
      </div>
    </div>
  );
}
