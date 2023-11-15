import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import ContactForm from "./ContactForm/ContactForm";
import styles from "./ContactPage.module.css";
import ContactButtons from "@/components/Buttons/ContactButtons/ContactButtons";

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <AnimatedElement>
        <div className={styles.title}>CONTACT</div>
      </AnimatedElement>
      <ContactForm></ContactForm>
      <ContactButtons></ContactButtons>
      <div className={styles.thanksText}>Thank you for dropping by!</div>
    </div>
  );
}
