import styles from "./MainLayout.module.css";
import AuthorRefButton from "./AuthorRefButton/AuthorRefButton";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      {/* <LoadingScreen loading={false} title={"welcome"}></LoadingScreen> */}
      <div className={styles.topLine}></div>
      <main className={styles.content}>{children}</main>
      <div className={styles.botLine}></div>
      <div className={styles.authorNTheme}>
        <AuthorRefButton></AuthorRefButton>
        <Link href="/studiesnwork">To studies</Link>
        <Link href="/">To home</Link>
        {/* <ThemeToggle></ThemeToggle> */}
      </div>
    </div>
  );
}
