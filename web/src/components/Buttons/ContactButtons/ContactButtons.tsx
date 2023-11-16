import EmailButton from "@/components/Buttons/ContactButtons/EmailButton/EmailButton";
import SocialMediaButtons from "@/components/Buttons/ContactButtons/SMNButtons/SMNButtons";
import CVButton from "@/components/Buttons/ContactButtons/CVButton/CVButton";
import styles from "./ContactButtons.module.css";
import PhoneButton from "./PhoneButton/PhoneButton";
import ContactButton from "./ContactButton/ContactButton";

export default function ContactButtons({
  contactLink,
}: {
  contactLink?: boolean;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div className={styles.link}>
          <span className={styles.separator}>//&nbsp;</span>
          <EmailButton></EmailButton>
        </div>
        <div className={styles.link}>
          <span className={styles.separator}>//&nbsp;</span>
          <PhoneButton></PhoneButton>
        </div>
        <div className={styles.link}>
          <span className={styles.separator}>//&nbsp;</span>
          <CVButton></CVButton>
        </div>
        {contactLink && (
          <div className={styles.link}>
            <span className={styles.separator}>//&nbsp;</span>
            <ContactButton></ContactButton>
          </div>
        )}
      </div>
      <div className={styles.smnButtons}>
        <SocialMediaButtons></SocialMediaButtons>
      </div>
    </div>
  );
}
