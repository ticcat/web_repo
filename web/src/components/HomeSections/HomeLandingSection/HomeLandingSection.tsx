import AnimatedElement from "@/components/AnimatedElement/AnimatedElement";
import Image from "next/image";
import styles from "./HomeLanding.module.css";
import EmailButton from "@/components/Buttons/EmailButton/EmailButton";
import SocialMediaButtons from "@/components/Buttons/SMNButtons/SMNButtons";
import CVButton from "@/components/Buttons/CVButton/CVButton";

const showElementTimeout = (
  resolve: (value: boolean | PromiseLike<boolean>) => void
) => setTimeout(() => resolve(true), 2800);

function Logo() {
  return (
    <div className={styles.logo}>
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 471.03 115.84"
      >
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <path d="m57.92,17.71c-16.37,0-30.57,9.96-36.81,24.12-.32.73-.62,1.46-.9,2.21-1.61,4.33-2.49,9.01-2.49,13.89,0,2.42.22,4.8.64,7.12l30.7-17.73c3.89-2.25,7.74-3.28,12.23-3.28h57.42c13.65,0,25.73,7.06,32.76,17.71,3.4,5.15,5.63,11.14,6.28,17.57.13,1.3.2,7.66.2,9v.29l-16.49,9.52-1.22.7-23.78,13.73c-3.89,2.25-7.74,3.28-12.23,3.28H0v-17.71h127.3c4.49,0,8.34-1.03,12.23-3.28l.69-.4v-11.17c0-11.81-9.73-21.54-21.54-21.54H38.2c-4.49,0-8.34,1.03-12.23,3.28l-6.71,3.87-15.66,9.04c-.37-.99-.71-2-1.02-3.01-.68-2.2-1.23-4.45-1.65-6.75-.6-3.33-.92-6.76-.92-10.26,0-4.78.59-9.43,1.69-13.88C7.96,18.83,30.85,0,57.92,0h100.02v17.71H57.92Z" />
            <path d="m314.04,42.29c-.21,2.71-.7,5.35-1.44,7.88l-1.18.68-20.14,11.63c1.52.51,2.99,1.12,4.41,1.84,2.07,1.04,4.02,2.29,5.82,3.73.64.51,1.26,1.04,1.85,1.59,6.63,6.11,10.8,14.86,10.8,24.53v21.67h-17.71v-21.67c0-8.03-6.2-14.75-14.02-15.59l.05-.13c-.57.03-1.14.04-1.71.04h-62.33c-4.49,0-8.34,1.03-12.23,3.28l-20.05,11.57c-6.39,3.69-10.54,9.55-11.82,16.51-.28,1.51-.42,3.08-.42,4.68v1.31h-17.71V0h118.69c21.59,0,39.25,17.66,39.25,39.25,0,1.03-.04,2.04-.12,3.05Zm-17.83.11c.15-1.03.24-2.09.24-3.16,0-11.81-9.73-21.54-21.54-21.54h-100.99v78.32l30.37-17.54,24.99-14.43c3.89-2.25,7.74-3.28,12.23-3.28h33.39c10.74,0,19.75-8.04,21.3-18.37Z" />
            <path d="m432.99,54.99l-.39.23-21.58,12.46-24.99,14.43c-3.89,2.25-7.74,3.28-12.23,3.28h-42.98v30.46h-17.71V39.25c0-21.59,17.66-39.25,39.24-39.25h118.69v115.84h-17.71V43.25l-16.88,9.75-3.46,2Zm-102.18,12.69h66.06c4.49,0,8.35-1.04,12.23-3.28l27.34-15.78,4.65-2.68c7.78-4.49,12.23-12.2,12.23-21.19v-7.03h-100.98c-11.81,0-21.54,9.73-21.54,21.54v28.43Z" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NameCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.nameCarousel}>
        <AnimatedElement
          showPromise={new Promise((resolve) => showElementTimeout(resolve))}
        >
          <span className={styles.name}>
            <span className={styles.spacer}>//</span>SERGIO RICO ALFONSO
          </span>
        </AnimatedElement>
      </div>
      <div className={styles.nameCarousel}>
        <AnimatedElement
          showPromise={new Promise((resolve) => showElementTimeout(resolve))}
        >
          <span className={styles.name}>
            <span className={styles.spacer}>//</span>SERGIO RICO ALFONSO
          </span>
        </AnimatedElement>
      </div>
    </div>
  );
}

export default function HomeLandingSection() {
  return (
    <section id="homeLanding" className={styles.homeSection}>
      <div className={styles.me}>
        <Image
          src="/imgs/home.webp"
          alt="me"
          fill
          priority
          quality={100}
        ></Image>
      </div>
      <div id="topInfo" className={styles.topInfo}>
        <div className={styles.links}>
          <span className={styles.separator}>//</span>
          <EmailButton></EmailButton>
          <span className={styles.separator}>//</span>
          <CVButton></CVButton>
          <span className={styles.separator}>//</span>
        </div>
        <SocialMediaButtons></SocialMediaButtons>
      </div>
      <div id="botInfo" className={styles.botInfo}>
        <div className={styles.locationRole}>
          <AnimatedElement
            showPromise={new Promise((resolve) => showElementTimeout(resolve))}
          >
            FRONT END DEVELOPER // <br></br> VALENCIA, SPAIN
          </AnimatedElement>
        </div>
        <div className={styles.workInProgress}>
          <AnimatedElement
            showPromise={new Promise((resolve) => showElementTimeout(resolve))}
          >
            // WORK IN PROGRESS //
          </AnimatedElement>
        </div>
        <div>
          <NameCarousel></NameCarousel>
          <Logo></Logo>
        </div>
      </div>
    </section>
  );
}
