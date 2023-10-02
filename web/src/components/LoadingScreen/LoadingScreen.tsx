"use client";

import style from "./LoadingScreen.module.css";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const path = usePathname();
  const loadingTitle = path === "/" ? "Home" : path;

  return (
    <div className={style.container}>
      <div className={style.screen}>
        <h1 className={style.title}>{loadingTitle.toUpperCase()}</h1>
      </div>
      <div className={style.fill2}></div>
      <div className={style.fill1}></div>
    </div>
  );
}
