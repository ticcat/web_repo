"use client";

import styles from "./ThemeButton.module.css";
import { useState } from "react";

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState("dark");

  function changeTheme(newTheme?: string) {
    const theme = newTheme
      ? newTheme
      : currentTheme === "light"
      ? "dark"
      : "light";

    document.documentElement.setAttribute("color-theme", theme);
    setCurrentTheme(theme);
  }

  return (
    <button className={styles.themeButton} onClick={() => changeTheme()}>
      {currentTheme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
