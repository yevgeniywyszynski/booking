import React from "react";
import styles from "./FeaturedProperties.module.scss";

export default function FeaturedProperties() {
  const featuredPropertList = [
    {
      id: 1,
      srcImg:
        "https://images.pexels.com/photos/7546767/pexels-photo-7546767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "ApartHotel Nowe Miasto",
      price: 120,
      rating: 8.9,
      ratingLevel: "Excelent",
      city: "Warsaw",
    },
    {
      id: 2,
      srcImg:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/14124278.jpg?k=dc69c06eae64a2c3a8c6d3c4d1d1dd058d41fd3e1ae7b8c18186f4afa5ffb2d8&o=&hp=1",
      title: "Hilton Gdansk",
      price: 180,
      rating: 9.1,
      ratingLevel: "Excelent",
      city: "Gdansk",
    },
    {
      id: 3,
      srcImg:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/242762313.jpg?k=61b01a6a4ce2ac9cc84ad501078bc8293c859a19b2c1e059d4d4951ffd619af2&o=&hp=1",
      title: "Radisson Hotel & Suites",
      price: 420,
      rating: 8.4,
      ratingLevel: "Excelent",
      city: "Gdansk",
    },
    {
      id: 4,
      srcImg:
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/74915774.jpg?k=d20ef5eda7db02dfe69fad687eea3b5bb54fa5e6661a704f7f446bdbd575972a&o=&hp=1",
      title: "Liberum Residence Old Town",
      price: 105,
      rating: 7.5,
      ratingLevel: "Good",
      city: "Gdansk",
    },
  ];

  return (
    <div className={styles.fProp}>
      {featuredPropertList.map((item) => (
        <div className={styles.fpItem} key={item.id}>
          <img src={item.srcImg} alt="fHotel" className={styles.fpImg} />
          <span className={styles.fName}>{item.title}</span>
          <span className={styles.fCity}>{item.city}</span>
          <span className={styles.fPrice}>Starting from ${item.price}</span>
          <div className={styles.fpRating}>
            <button className={styles.ratingBtn}>{item.rating}</button>
            <span className={styles.fRatindDesc}>{item.ratingLevel}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
