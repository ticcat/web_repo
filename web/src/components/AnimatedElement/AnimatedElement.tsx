"use client";

import { useState } from "react";
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

  if (!showOnRender) {
    showPromise?.then((show) => show && !visible && setVisible(true));
  } else {
    //TODO: Write render detection to change visible state (Might need useEffect)
  }

  return (
    <div className={`${styles.container} ${visible && styles.animate}`}>
      <span className={styles.child}>{children}</span>
    </div>
  );
}
