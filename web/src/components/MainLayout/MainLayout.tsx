import styles from "./MainLayout.module.css";
import AuthorRefButton from "./AuthorRefButton/AuthorRefButton";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import ToTopButton from "../Buttons/ToTopButton/ToTopButton";
import NavBar from "./NavBar/NavBar";
import SideLine from "./SideLine/SideLine";
import MotionButton from "./MotionButton/MotionButton";
import NavManager from "@/utils/NavManager";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <NavManager></NavManager>
      {/* <LoadingScreen loading={false} title={"welcome"}></LoadingScreen> */}
      <div className={styles.topLine}></div>
      <main className={styles.content}>
        <SideLine side="left"></SideLine>
        {children}
        <SideLine side="right"></SideLine>
      </main>
      <div className={styles.botLine}></div>
      <div className={styles.topNavBar}>
        <NavBar></NavBar>
      </div>
      <div className={styles.cornerHub}>
        <AuthorRefButton></AuthorRefButton>
        <div className={styles.settings}>
          <ThemeToggle></ThemeToggle>
          <MotionButton></MotionButton>
        </div>
      </div>
      <ToTopButton></ToTopButton>
    </div>
  );
}
