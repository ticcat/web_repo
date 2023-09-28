"use client";

import styles from "./ThemeButton.module.css";
import { useCallback, useState } from "react";

function changeTheme(newTheme: string) {
  document.documentElement.setAttribute("color-theme", newTheme);
}

export default function ThemeButton() {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const changeThemeCallback = useCallback(
    (newTheme?: string) => {
      const theme = newTheme
        ? newTheme
        : currentTheme === "light"
        ? "dark"
        : "light";

      changeTheme(theme);
      setCurrentTheme(theme);
    },
    [currentTheme]
  );

  return (
    <button
      className={styles.themeButton}
      onClick={() => changeThemeCallback()}
    >
      {currentTheme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
