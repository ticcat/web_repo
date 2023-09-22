import styles from "./HomeLanding.module.css";
import Image from "next/image";

function SocialMediaButtons() {
  return (
    <div className={styles.socialMedia}>
      <Image
        src="/icons/github.svg"
        alt="GitHub logo"
        height={40}
        width={40}
      ></Image>
      <Image
        src="/icons/twitter.svg"
        alt="Twitter logo"
        height={40}
        width={40}
      ></Image>
      <Image
        src="/icons/linkedin.svg"
        alt="Linkedin logo"
        height={45}
        width={45}
      ></Image>
    </div>
  );
}

function NameCarousel() {
  return (
    <div className={styles.nameCarousel}>
      <span className={styles.name}>SERGIO RICO ALFONSO</span>
      <span className={styles.name}> // </span>
      <span className={styles.name}>SERGIO RICO ALFONSO</span>
      <Image
        className={styles.logo}
        src={"/logo.svg"}
        alt="My logo"
        width={950}
        height={245}
      ></Image>
    </div>
  );
}

export default function HomeLandingSection() {
  return (
    <section id="homeLanding" className={styles.homeSection}>
      <div id="topInfo" className={styles.topInfo}>
        <div className={styles.email}>// serialticcatl@gmail.com //</div>
        <SocialMediaButtons></SocialMediaButtons>
      </div>
      <div id="botInfo" className={styles.botInfo}>
        <div className={styles.locationRole}>
          FRONT END DEVELOPER // <br></br> VALENCIA, SPAIN
        </div>
        <div className={styles.workInProgress}>// WORK IN PROGRESS //</div>
        <NameCarousel></NameCarousel>
      </div>
    </section>
  );
}
