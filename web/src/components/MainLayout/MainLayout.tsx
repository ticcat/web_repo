import styles from "./MainLayout.module.css";
import AuthorRefButton from "./AuthorRefButton/AuthorRefButton";
import ThemeToggle from "./ThemeToggle/ThemeButton";
import ToTopButton from "../Buttons/ToTopButton/ToTopButton";
import NavBar from "./NavBar/NavBar";

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
      <div className={styles.topNavBar}>
        <NavBar></NavBar>
      </div>
      <div className={styles.authorNTheme}>
        <AuthorRefButton></AuthorRefButton>
        <ThemeToggle></ThemeToggle>
      </div>
      <ToTopButton></ToTopButton>
    </div>
  );
}
