"use client";

import styles from "./ThemeButton.module.css";
import { useCallback, useEffect, useState } from "react";

function detectColorScheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  } else {
    return "light";
  }
}

export default function ThemeButton() {
  const [currentTheme, setCurrentTheme] = useState(detectColorScheme());

  const changeTheme = useCallback(
    (newTheme?: string) => {
      const theme = newTheme
        ? newTheme
        : currentTheme === "light"
        ? "dark"
        : "light";

      document.documentElement.setAttribute("color-theme", theme);
      setCurrentTheme(theme);
    },
    [currentTheme]
  );

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        changeTheme(event.matches ? "dark" : "light");
      });
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", (event) => {
          changeTheme(event.matches ? "dark" : "light");
        });
    };
  }, [currentTheme, changeTheme]);

  return (
    <button className={styles.themeButton} onClick={() => changeTheme()}>
      {currentTheme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
