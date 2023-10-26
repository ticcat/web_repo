"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedElement.module.css";

export default function AnimatedElement({
  children,
  text,
  showPromise,
  showOnRender,
}: {
  children?: React.ReactNode;
  text?: string;
  showPromise?: Promise<boolean>;
  showOnRender?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const container = useRef(null);

  const intersectionCallback = (entries: Array<IntersectionObserverEntry>) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
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

    if (!showOnRender) {
      showPromise?.then((show) => show && !visible && setVisible(true));
    } else {
      if (containerElement) observer.observe(containerElement);
    }

    return () => {
      if (showOnRender && containerElement) {
        observer.unobserve(containerElement);
      }
    };
  });

  return (
    <>
      {text ? (
        //TODO: Read word by word to animate each
        text.split(" ").map((word, index) => {
          return (
            <span
              className={`${styles.container} ${visible && styles.animate}`}
              ref={container}
              key={index}
            >
              <span className={styles.child}>{word}&nbsp;</span>
            </span>
          );
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
