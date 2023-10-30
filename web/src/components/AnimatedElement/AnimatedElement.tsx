"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedElement.module.css";

export default function AnimatedElement({
  children,
  text,
  showPromise,
}: {
  children?: React.ReactNode;
  text?: string;
  showPromise?: Promise<boolean>;
}) {
  const [visible, setVisible] = useState(false);
  const container = useRef(null);

  const intersectionCallback = (entries: Array<IntersectionObserverEntry>) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
    console.log("Visible");
  };
  const intersectionOptions = {
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );
    const containerElement = container.current;

    if (showPromise) {
      showPromise?.then((show) => show && !visible && setVisible(true));
    } else {
      if (containerElement) observer.observe(containerElement);
    }

    return () => {
      if (!showPromise && containerElement) {
        observer.unobserve(containerElement);
      }
    };
  });

  return (
    <>
      {text ? (
        text.split(" ").map((word, index) => {
          return <AnimatedElement key={index}>{word}&nbsp;</AnimatedElement>;
        })
      ) : (
        <span
          className={`${styles.container} ${visible && styles.animate}`}
          ref={container}
        >
          <span className={styles.child}>{children}</span>
        </span>
      )}
    </>
  );
}
