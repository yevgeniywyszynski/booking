import React from "react";
import styles from "./PropertyList.module.scss";

export default function PropetyList() {
  return (
    <div className={styles.pList}>
      <div className={styles.pListItem}>
        <img
          src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="hotels"
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Hotels</h1>
          <h2>200 hotels</h2>
        </div>
      </div>
      <div className={styles.pListItem}>
        <img
          src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="apartaments"
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Apartaments</h1>
          <h2>652 apartaments</h2>
        </div>
      </div>
      <div className={styles.pListItem}>
        <img
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="resort"
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Resort</h1>
          <h2>132 resort</h2>
        </div>
      </div>
      <div className={styles.pListItem}>
        <img
          src="https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="resort"
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Villas</h1>
          <h2>132 villas</h2>
        </div>
      </div>
      <div className={styles.pListItem}>
        <img
          src="https://images.pexels.com/photos/428427/pexels-photo-428427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="resort"
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Cabins</h1>
          <h2>22 cabins</h2>
        </div>
      </div>
    </div>
  );
}
