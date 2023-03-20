import React from "react";
import styles from "./MailList.module.scss";

export default function MailList() {
  return (
    <div className={styles.mailList}>
      <h1 className={styles.mailTitle}>Save time, save money!</h1>
      <span>Sign up and we'll send the best deals to you</span>
      <div className={styles.mailInputContainer}>
        <input
          className={styles.inputMail}
          type="email"
          placeholder="Your email"
        />
        <button className={styles.mailBtn}>Subscribe</button>
      </div>
    </div>
  );
}
