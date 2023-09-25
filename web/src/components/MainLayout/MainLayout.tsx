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
      <AuthorRefAnchor></AuthorRefAnchor>
    </div>
  );
}
