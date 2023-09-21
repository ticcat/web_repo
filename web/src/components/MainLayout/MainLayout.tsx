import styles from "./MainLayout.module.css";

function AuthorRefAnchor() {
  return (
    <a
      className={styles.authorRefText}
      href="https://twitter.com/serrial3"
      target="_blank"
      rel="noreferrer"
    >
      <span className={styles.heart}>❥</span> By Sergio
    </a>
  );
}

export default function MainLayout() {
  return (
    <>
      <AuthorRefAnchor></AuthorRefAnchor>
    </>
  );
}
