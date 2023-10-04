import styles from "./MainLayout.module.css";
import AuthorRefButton from "./AuthorRefButton/AuthorRefButton";
import ThemeToggle from "./ThemeToggle/ThemeButton";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <LoadingScreen loading={false} title={"welcome"}></LoadingScreen>
      <div className={styles.topLine}></div>
      <main className={styles.content}>{children}</main>
      <div className={styles.botLine}></div>
      <div className={styles.authorRefButton}>
        <AuthorRefButton></AuthorRefButton>
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
}
