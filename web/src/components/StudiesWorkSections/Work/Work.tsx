"use client";

import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import Button from "@/components/Buttons/Button/Button";
import styles from "./Work.module.css";

//TODO: Transalte to DB entry object
type workEntryInfo = {
  title: string;
  role: string;
  length: {
    startDate: string;
    endDate: string;
    duration: string;
  };
  technologies: string[];
};

function WorksEntry({ entryInfo }: { entryInfo: workEntryInfo }) {
  return (
    <div className={styles.entryContainer}>
      <div className={styles.titleAndArrow}>
        {/* Title&Duration */}
        <div
          className={styles.entryTitle}
        >{`${entryInfo.title} // ${entryInfo.role}`}</div>
        <div className={styles.arrow}></div>
      </div>
      <div className={styles.durationAndTech}>
        {/* Arrow&Tech */}
        <div
          className={styles.duration}
        >{`${entryInfo.length.startDate} - ${entryInfo.length.endDate} // ${entryInfo.length.duration}`}</div>
        <div className={styles.techStack}>
          {entryInfo.technologies.map((tech) => {
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
  const testInfo: workEntryInfo = {
    title: "Test @ Test company",
    role: "Front end developer",
    length: {
      startDate: "Oct. 2023",
      endDate: "Dec. 2030",
      duration: "7 years",
    },
    technologies: ["React", "Redux", "NextJS", "SASS"],
  };

  const worksList = [
    <WorksEntry key={1} entryInfo={testInfo}></WorksEntry>,
    <WorksEntry key={2} entryInfo={testInfo}></WorksEntry>,
    <WorksEntry key={3} entryInfo={testInfo}></WorksEntry>,
    <WorksEntry key={4} entryInfo={testInfo}></WorksEntry>,
    <WorksEntry key={5} entryInfo={testInfo}></WorksEntry>,
    <WorksEntry key={6} entryInfo={testInfo}></WorksEntry>,
    <WorksEntry key={7} entryInfo={testInfo}></WorksEntry>,
    <WorksEntry key={8} entryInfo={testInfo}></WorksEntry>,
  ];

  return (
    <div id="work" className={styles.container}>
      <div className={styles.title}>
        <AnimatedElement>EXPERIENCE</AnimatedElement>
      </div>
      <div className={styles.worksContainer}>
        <Filters></Filters>
        <div className={styles.list}>{worksList}</div>
      </div>
    </div>
  );
}
