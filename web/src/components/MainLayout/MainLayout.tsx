import styles from "./MainLayout.module.css";
import AuthorRefButton from "./AuthorRefButton/AuthorRefButton";
import ThemeToggle from "./ThemeButton/ThemeButton";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.topLine}></div>
      <div className={styles.content}>{children}</div>
      <div className={styles.botLine}></div>
      <div className={styles.authorRefButton}>
        <AuthorRefButton></AuthorRefButton>
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
}
