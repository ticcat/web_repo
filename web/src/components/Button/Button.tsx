import styles from "./Button.module.css";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.fill1}></div>
      <div className={styles.fill2}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
