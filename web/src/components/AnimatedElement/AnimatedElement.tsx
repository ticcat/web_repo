"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedElement.module.css";

export default function AnimatedElement({
  children,
  showPromise,
  showOnRender,
}: {
  children: React.ReactNode;
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
    <div
      className={`${styles.container} ${visible && styles.animate}`}
      ref={container}
    >
      <span className={styles.child}>{children}</span>
    </div>
  );
}
