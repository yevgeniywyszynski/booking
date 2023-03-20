import React from "react";
import styles from "./Featured.module.scss";

export default function Featured() {
  return (
    <div className={styles.featured}>
      <div className={styles.featuredItem}>
        <img
          src="https://images.pexels.com/photos/944690/pexels-photo-944690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="imgCity"
          className={styles.featuredImg}
        />
        <div className={styles.featuredTitles}>
          <h1>New York</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className={styles.featuredItem}>
        <img
          src="https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="imgCity"
          className={styles.featuredImg}
        />
        <div className={styles.featuredTitles}>
          <h1>London</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className={styles.featuredItem}>
        <img
          src="https://images.pexels.com/photos/15638791/pexels-photo-15638791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="imgCity"
          className={styles.featuredImg}
        />
        <div className={styles.featuredTitles}>
          <h1>Warsaw</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
}
