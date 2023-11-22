"use client";

import Tooltip from "@/components/Tooltip/Tooltip";
import styles from "./Button.module.css";

function ButtonContent({
  children,
  clickHandler,
  isActive,
  motion,
}: {
  children: React.ReactNode;
  clickHandler: () => void;
  isActive?: boolean;
  motion: boolean;
}) {
  return (
    <div
      className={`${styles.container} ${isActive ? styles.active : ""} ${
        motion && styles.animated
      }`}
      onClick={() => clickHandler()}
    >
      <div className={styles.fill1}></div>
      <div className={styles.fill2}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default function Button({
  children,
  clickHandler,
  tooltip,
  isActive,
}: {
  children: React.ReactNode;
  clickHandler: () => void;
  tooltip?: string;
  isActive?: boolean;
}) {
  // const prefersMotion = getSetting("prefers-motion", "true") === "true";

  return (
    <>
      {tooltip ? (
        <Tooltip text={tooltip}>
          <ButtonContent
            clickHandler={clickHandler}
            isActive={isActive}
            motion={true}
          >
            {children}
          </ButtonContent>
        </Tooltip>
      ) : (
        <ButtonContent
          clickHandler={clickHandler}
          isActive={isActive}
          motion={true}
        >
          {children}
        </ButtonContent>
      )}
    </>
  );
}
