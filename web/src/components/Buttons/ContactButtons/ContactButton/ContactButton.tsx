"use client";

import Button from "../../Button/Button";
import styles from "./ContactButton.module.css";
import LinkButton from "../../LinkButton/LinkButton";
import { getPageByHref } from "@/components/NavManager/NavManager";

export default function ContactButton() {
  return (
    <Button clickHandler={() => {}}>
      <LinkButton page={getPageByHref("/contact")}>
        <span className={styles.text}>
          Want to tell me something? <span className={styles.arrow}>→</span>
        </span>
      </LinkButton>
    </Button>
  );
}
