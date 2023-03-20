import React from "react";
import styles from "./FeaturedProperties.module.scss";

export default function FeaturedProperties() {
  return (
    <div className={styles.fProp}>
      <div className={styles.fpItem}>
        <img
          src="https://images.pexels.com/photos/7546767/pexels-photo-7546767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="fHotel"
          className={styles.fpImg}
        />
        <span className={styles.fName}>ApartHotel Nowe Miasto</span>
        <span className={styles.fCity}>Warsaw</span>
        <span className={styles.fPrice}>Starting from $120</span>
        <div className={styles.fpRating}>
          <button className={styles.ratingBtn}>8.9</button>
          <span className={styles.fRatindDesc}>Excellent</span>
        </div>
      </div>
      <div className={styles.fpItem}>
        <img
          src="https://images.pexels.com/photos/7546721/pexels-photo-7546721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="fHotel"
          className={styles.fpImg}
        />
        <span className={styles.fName}>ApartHotel Nowe Miasto</span>
        <span className={styles.fCity}>Warsaw</span>
        <span className={styles.fPrice}>Starting from $120</span>
        <div className={styles.fpRating}>
          <button className={styles.ratingBtn}>8.9</button>
          <span className={styles.fRatindDesc}>Excellent</span>
        </div>
      </div>
      <div className={styles.fpItem}>
        <img
          src="https://images.pexels.com/photos/7601066/pexels-photo-7601066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="fHotel"
          className={styles.fpImg}
        />
        <span className={styles.fName}>ApartHotel Nowe Miasto</span>
        <span className={styles.fCity}>Warsaw</span>
        <span className={styles.fPrice}>Starting from $120</span>
        <div className={styles.fpRating}>
          <button className={styles.ratingBtn}>8.9</button>
          <span className={styles.fRatindDesc}>Excellent</span>
        </div>
      </div>
      <div className={styles.fpItem}>
        <img
          src="https://images.pexels.com/photos/11478412/pexels-photo-11478412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="fHotel"
          className={styles.fpImg}
        />
        <span className={styles.fName}>ApartHotel Nowe Miasto</span>
        <span className={styles.fCity}>Warsaw</span>
        <span className={styles.fPrice}>Starting from $120</span>
        <div className={styles.fpRating}>
          <button className={styles.ratingBtn}>8.9</button>
          <span className={styles.fRatindDesc}>Excellent</span>
        </div>
      </div>
    </div>
  );
}
