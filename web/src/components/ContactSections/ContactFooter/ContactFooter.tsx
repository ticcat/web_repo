import ContactButtons from "@/components/Buttons/ContactButtons/ContactButtons";
import styles from "./ContactFooter.module.css";

export default function ContactFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        CONTACT ME <span className={styles.arrow}>↓</span>
      </div>
      <ContactButtons></ContactButtons>
    </div>
  );
}
