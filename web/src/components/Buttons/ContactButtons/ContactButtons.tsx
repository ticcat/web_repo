import EmailButton from "@/components/Buttons/ContactButtons/EmailButton/EmailButton";
import SocialMediaButtons from "@/components/Buttons/ContactButtons/SMNButtons/SMNButtons";
import CVButton from "@/components/Buttons/ContactButtons/CVButton/CVButton";
import styles from "./ContactButtons.module.css";
import PhoneButton from "./PhoneButton/PhoneButton";

export default function ContactButtons() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <span className={styles.separator}>//</span>
        <EmailButton></EmailButton>
        <span className={styles.separator}>//</span>
        <CVButton></CVButton>
        <span className={styles.separator}>//</span>
        <PhoneButton></PhoneButton>
      </div>
      <div className={styles.smnButtons}>
        <SocialMediaButtons></SocialMediaButtons>
      </div>
    </div>
  );
}
