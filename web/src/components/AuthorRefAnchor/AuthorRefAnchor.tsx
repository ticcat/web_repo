import styles from "./AuthorRefAnchor.module.css";

export default function AuthorRefAnchor() {
  return (
    <p className={styles.text}>
      <span className={styles.heart}>❥</span> By Sergio
    </p>
  );
}
