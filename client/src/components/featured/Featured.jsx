import React from "react";
import styles from "./Featured.module.scss";

export default function Featured() {
  const featured = [
    {
      id: 1,
      city: "New York",
      propertyQty: 533,
      srcImg:
        "https://images.pexels.com/photos/944690/pexels-photo-944690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      city: "London",
      propertyQty: 210,
      srcImg:
        "https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      city: "Warsaw",
      propertyQty: 744,
      srcImg:
        "https://images.pexels.com/photos/15638791/pexels-photo-15638791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <div className={styles.featured}>
      {featured.map((featuredItem) => (
        <div className={styles.featuredItem}>
          <img
            src={featuredItem.srcImg}
            alt="imgCity"
            className={styles.featuredImg}
          />
          <div className={styles.featuredTitles}>
            <h1>{featuredItem.city}</h1>
            <h2>{featuredItem.propertyQty} properties</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
