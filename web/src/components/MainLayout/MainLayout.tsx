"use client";

import styles from "./MainLayout.module.css";
import AuthorRefButton from "./AuthorRefButton/AuthorRefButton";
import ThemeToggle from "./ThemeToggle/ThemeButton";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import LinkButton from "../Buttons/LinkButton/LinkButton";
import { useState } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const [nextPageName, setNextPageName] = useState("");

  return (
    <div className={styles.container}>
      <LoadingScreen loading={loading} title={nextPageName}></LoadingScreen>
      <div className={styles.topLine}></div>
      <main className={styles.content}>{children}</main>
      <div className={styles.botLine}></div>
      <div className={styles.authorRefButton}>
        <LinkButton
          href="/about"
          setLoading={setLoading}
          setNextPageName={setNextPageName}
        >
          About
        </LinkButton>
        <LinkButton
          href="/"
          setLoading={setLoading}
          setNextPageName={setNextPageName}
        >
          Home
        </LinkButton>
        <AuthorRefButton></AuthorRefButton>
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
}
