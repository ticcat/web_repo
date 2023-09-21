import styles from "./AuthorRefAnchor.module.css";

export default function AuthorRefAnchor() {
  return (
    <a
      className={styles.text}
      href="https://twitter.com/serrial3"
      target="_blank"
      rel="noreferrer"
    >
      <span className={styles.heart}>❥</span> By Sergio
    </a>
  );
}
