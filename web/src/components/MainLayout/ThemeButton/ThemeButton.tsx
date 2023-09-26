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

function changeTheme(newTheme: string) {
  document.documentElement.setAttribute("color-theme", newTheme);
}

export default function ThemeButton() {
  const [currentTheme, setCurrentTheme] = useState(detectColorScheme());

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

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        changeThemeCallback(event.matches ? "dark" : "light");
      });
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", (event) => {
          changeThemeCallback(event.matches ? "dark" : "light");
        });
    };
  }, [changeThemeCallback, currentTheme]);

  useEffect(() => {
    //Manual color theme setter to execute on first mount
    changeTheme(detectColorScheme());
  }, []);

  return (
    <button
      className={styles.themeButton}
      onClick={() => changeThemeCallback()}
    >
      {currentTheme === "light" ? "Dark mode" : "Light mode"}
    </button>
  );
}
