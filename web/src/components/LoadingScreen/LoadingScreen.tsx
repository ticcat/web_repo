import styles from "./LoadingScreen.module.css";

export default function LoadingScreen({
  loading,
  title,
  slow,
}: {
  loading?: boolean;
  title: string;
  slow?: boolean;
}) {
  return (
    <div
      className={`${styles.container} ${
        slow ? styles.slowHide : loading ? styles.show : styles.hide
      }`}
    >
      <div className={styles.screen}>
        <div className={styles.title}>
          <h1>{`${title === "" ? "home" : title}`.toUpperCase()}</h1>
        </div>
      </div>
      <div className={styles.fill2}></div>
      <div className={styles.fill1}></div>
    </div>
  );
}
