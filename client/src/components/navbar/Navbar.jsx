import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link className={styles.homeLink} to="/">
          <span className={styles.logo}>Booking.com</span>
        </Link>
        <div className={styles.navLoginBtnWrapper}>
          <button className={styles.navBtn}>Register</button>
          <button className={styles.navBtn}>Login</button>
        </div>
      </div>
    </div>
  );
}
