import EmailButton from "@/components/Buttons/EmailButton/EmailButton";
import SocialMediaButtons from "@/components/Buttons/SMNButtons/SMNButtons";
import CVButton from "@/components/Buttons/CVButton/CVButton";
import styles from "./ContactButtons.module.css";

export default function ContactButtons() {
  return (
    <>
      {" "}
      <div className={styles.links}>
        <span className={styles.separator}>//</span>
        <EmailButton></EmailButton>
        <span className={styles.separator}>//</span>
        <CVButton></CVButton>
        <span className={styles.separator}>//</span>
      </div>
      <SocialMediaButtons></SocialMediaButtons>
    </>
  );
}
