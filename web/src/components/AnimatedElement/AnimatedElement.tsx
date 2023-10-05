import styles from "./AnimatedElement.module.css";

export default function AnimatedElement({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${styles.animate}`}>
      <span className={styles.child}>{children}</span>
    </div>
  );
}
