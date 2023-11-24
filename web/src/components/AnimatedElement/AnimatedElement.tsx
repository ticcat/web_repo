"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedElement.module.css";
import { getSetting } from "@/utils/userConfig";

export default function AnimatedElement({
  children,
  text,
  showPromise,
}: {
  children?: React.ReactNode;
  text?: string;
  showPromise?: Promise<boolean>;
}) {
  const prefersMotion = getSetting("prefers-motion", "true") === "true";

  const [contentClass, setContentClass] = useState(
    `${styles.container} ${styles.static}`
  );

  const container = useRef(null);

  useEffect(() => {
    const intersectionCallback = (
      entries: Array<IntersectionObserverEntry>
    ) => {
      const [entry] = entries;
      setContentClass(
        `${styles.container} ${
          entry.isIntersecting && prefersMotion ? styles.animate : styles.static
        }`
      );
    };

    const intersectionOptions = {
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );
    const containerElement = container.current;

    if (showPromise) {
      showPromise?.then(
        (show) =>
          show && setContentClass(`${styles.container} ${styles.animate}`)
      );
    } else {
      if (containerElement) observer.observe(containerElement);
    }

    return () => {
      if (!showPromise && containerElement) {
        observer.unobserve(containerElement);
      }
    };
  }, [showPromise, prefersMotion]);

  return (
    <>
      {prefersMotion ? (
        <>
          {text ? (
            text.split(" ").map((word, index) => {
              return (
                <AnimatedElement key={index}>{word}&nbsp;</AnimatedElement>
              );
            })
          ) : (
            <span className={contentClass} ref={container}>
              <span className={styles.child}>{children}</span>
            </span>
          )}
        </>
      ) : (
        <>
          {text ? (
            <span className={contentClass} ref={container}>
              <span className={styles.child}>{text}</span>
            </span>
          ) : (
            <span className={contentClass} ref={container}>
              <span className={styles.child}>{children}</span>
            </span>
          )}
        </>
      )}
    </>
  );
}
