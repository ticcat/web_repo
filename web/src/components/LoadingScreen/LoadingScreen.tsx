"use client";

import style from "./LoadingScreen.module.css";
import { usePathname } from "next/navigation";

export default function LoadingScreen({ show }: { show?: boolean }) {
  const path = usePathname();
  const loadingTitle = path === "/" ? "Home" : path;

  return (
    <div className={`${style.container} ${show ? style.show : style.hide}`}>
      <div className={style.screen}>
        <div className={style.title}>
          <h1>{loadingTitle.toUpperCase()}</h1>
        </div>
      </div>
      <div className={style.fill2}></div>
      <div className={style.fill1}></div>
    </div>
  );
}
