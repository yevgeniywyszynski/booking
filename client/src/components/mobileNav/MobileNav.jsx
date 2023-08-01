import React from "react";
import { Link } from "react-router-dom";
import styles from "./MobileNav.module.scss";

export default function MobileNavbar() {
  return (
    <>
      <nav className={styles.pagesLinkWrapperMobile}>
        <ul className={styles.linkList}>
          <Link className={styles.link} to="/">
            HOME
          </Link>
          <Link className={styles.link} to="/hotels">
            HOTELS
          </Link>
          <Link className={styles.link} to="/">
            FLIGHTS
          </Link>
          <Link className={styles.link} to="/">
            CAR RENATLS
          </Link>
          <Link className={styles.link} to="/">
            SUPPORT
          </Link>
        </ul>
      </nav>
    </>
  );
}
