import styles from "./Tooltip.module.css";

export default function Tooltip({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.tooltip}>
        <span className={styles.tooltipText}>{text}</span>
      </div>
    </div>
  );
}
