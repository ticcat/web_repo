"use client";

import { useEffect, useState } from "react";
import styles from "./MotionButton.module.css";
import Button from "@/components/Buttons/Button/Button";
import { getSetting, setSetting } from "@/utils/userConfig";

function ButtonOnSVG() {
  return (
    <div className={styles.icon}>
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M512 192C298.666667 192 115.2 324.266667 42.666667 512c72.533333 187.733333 256 320 469.333333 320 213.333333 0 396.8-132.266667 469.333333-320C908.8 324.266667 725.333333 192 512 192zM512 725.333333c-119.466667 0-213.333333-93.866667-213.333333-213.333333s93.866667-213.333333 213.333333-213.333333c119.466667 0 213.333333 93.866667 213.333333 213.333333S631.466667 725.333333 512 725.333333zM512 384c-72.533333 0-128 55.466667-128 128s55.466667 128 128 128c72.533333 0 128-55.466667 128-128S584.533333 384 512 384z" />
      </svg>
    </div>
  );
}

function ButtonOffSVG() {
  return (
    <div className={styles.icon}>
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M512 298.666667c117.76 0 213.333333 95.573333 213.333333 213.333333 0 27.52-5.546667 53.76-15.146666 77.866667l124.8 124.8c64.426667-53.76 115.2-123.306667 146.56-202.666667-74.026667-187.306667-256-320-469.546667-320-59.733333 0-116.906667 10.666667-170.026667 29.866667l92.16 91.946666c24.106667-9.386667 50.346667-15.146667 77.866667-15.146666zM85.333333 182.4l97.28 97.28 19.413334 19.413333C131.626667 354.133333 75.946667 427.306667 42.666667 512c73.813333 187.306667 256 320 469.333333 320 66.133333 0 129.28-12.8 187.093333-36.053333l18.133334 18.133333L841.6 938.666667 896 884.48 139.733333 128 85.333333 182.4zM321.28 418.133333l65.92 65.92c-1.92 9.173333-3.2 18.346667-3.2 27.946667 0 70.613333 57.386667 128 128 128 9.6 0 18.773333-1.28 27.733333-3.2l65.92 65.92C577.28 716.8 545.706667 725.333333 512 725.333333c-117.76 0-213.333333-95.573333-213.333333-213.333333 0-33.706667 8.533333-65.28 22.613333-93.866667z m183.68-33.493333l134.4 134.4L640 512c0-70.613333-57.386667-128-128-128l-7.04 0.64z" />
      </svg>
    </div>
  );
}

export default function MotionButton() {
  const prefersMotion = getSetting("prefers-motion", "true") === "true";

  const [motion, setMotion] = useState<boolean>(false);

  const changeMotionSetting = () => {
    setMotion(!motion);
    setSetting("prefers-motion", `${motion ? "false" : "true"}`);
  };

  useEffect(() => {
    setMotion(prefersMotion);
  }, [prefersMotion]);

  return (
    <Button
      clickHandler={() => changeMotionSetting()}
      tooltip={motion ? "Reduce motion" : "Enable motion"}
      isActive={motion}
    >
      <div className={styles.container}>
        {motion ? <ButtonOnSVG></ButtonOnSVG> : <ButtonOffSVG></ButtonOffSVG>}
      </div>
    </Button>
  );
}
