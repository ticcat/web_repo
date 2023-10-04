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
  const [nextPage, setNextPage] = useState("");

  return (
    <div className={styles.container}>
      <LoadingScreen loading={loading} title={nextPage}></LoadingScreen>
      <div className={styles.topLine}></div>
      <main className={styles.content}>{children}</main>
      <div className={styles.botLine}></div>
      <div className={styles.authorRefButton}>
        <LinkButton
          href="/about"
          setLoading={setLoading}
          setNextPage={setNextPage}
        >
          About
        </LinkButton>
        <LinkButton href="/" setLoading={setLoading} setNextPage={setNextPage}>
          Home
        </LinkButton>
        <AuthorRefButton></AuthorRefButton>
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
}
