"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "@/components/Buttons/Button/Button";
import { sendEmail } from "@/utils/emailService";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (setter: (value: string) => void, newValue: string) => {
    setter(newValue);
  };

  const handleSubmit = (event: FormEvent) => {
    sendEmail({ email: email, subject: subject, content: content });
    event.preventDefault();
  };

  return (
    <div>
      <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
        <div className={styles.emailSubject}>
          <input
            className={styles.email}
            type="text"
            placeholder="Your e-mail"
            value={email}
            onChange={(event) => handleChange(setEmail, event.target.value)}
          ></input>
          <input
            className={styles.subject}
            type="text"
            placeholder="What's the matter?"
            value={subject}
            onChange={(event) => handleChange(setSubject, event.target.value)}
          ></input>
        </div>
        <textarea
          className={styles.content}
          placeholder="What do you need to tell me?"
          value={content}
          onChange={(event) => handleChange(setContent, event.target.value)}
        ></textarea>
        <div className={styles.submitButton}>
          <Button clickHandler={() => {}}>
            <input
              className={styles.submitText}
              type="submit"
              value="Send it →"
            ></input>
          </Button>
        </div>
      </form>
    </div>
  );
}
