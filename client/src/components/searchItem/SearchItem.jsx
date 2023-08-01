import React from "react";
import styles from "./SearchItem.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Searchitem() {
  const navigation = useNavigate();

  const hotelsList = useSelector((state) => state.hotels.all);
  const searchOptions = useSelector((state) => state.options.allOptions);

  const setRating = (storeRating) => {
    let rating = storeRating;
    let ratingDesc = "";

    if (rating <= 8.4) {
      ratingDesc = "Normal";
    } else if (rating > 8.4 && rating < 9.1) {
      ratingDesc = "God";
    } else {
      ratingDesc = "Excellent";
    }

    return ratingDesc;
  };

  const calPrice = (pricePerOneNight) => {
    const { startDate, endDate } = searchOptions;
    let difTime = endDate - startDate;
    let dayDif = Math.floor(difTime / (1000 * 60 * 60 * 24)) + 1;
    let totalPrice = dayDif * pricePerOneNight;
    return totalPrice;
  };

  return (
    <>
      {hotelsList.map((hotel) => (
        <div
          key={hotel.id}
          className={styles.searchItem}
          onClick={() => navigation(`/hotels/${hotel._id}`)}
        >
          <div className={styles.searchItemImgWrapper}>
            <img
              src={hotel.generalSearchPhoto}
              alt="searchItemImg"
              className={styles.searchItemImg}
            />
          </div>
          <div className={styles.showMobile}>
            <div className={styles.seachDesc}>
              <h1 className={styles.seacrhItemTitle}>{hotel.name}</h1>
              <span className={styles.seacrhItemDistance}>
                {hotel.distanceToCentrum} m from center
              </span>
              {hotel.freeTaxi && (
                <span className={styles.seacrhItemTaxiOp}>
                  Free airport taxi
                </span>
              )}
              {hotel.airConditioning && (
                <span className={styles.seacrhItemSubtitle}>
                  Studio Apartamnet with Air conditioning
                </span>
              )}
              <span className={styles.seacrhItemFeatures}>
                Entire studio • {hotel.bathroom} bathroom • {hotel.meterOfRoom}{" "}
                ㎡ 1 full bed
              </span>
              {hotel.freeCancelation && (
                <span className={styles.seacrhItemCancelOp}>
                  Free cancelation
                </span>
              )}
              <span className={styles.seacrhItemCancelOpSubtitle}>
                You can cancel later, so lock in this great price today!
              </span>
            </div>
            <div className={styles.searchDetails}>
              <div className={styles.searchItemRating}>
                <span className={styles.searchItemRatingDesc}>
                  {setRating(hotel.rating)}
                </span>
                <button className={styles.searchItemBtnRating}>
                  {hotel.rating}
                </button>
              </div>
              <div className={styles.searchItemDetailsText}>
                <span className={styles.searchItemPrice}>
                  {calPrice(hotel.pricePerNight)}$
                </span>
                {hotel.taxesInclud && (
                  <span className={styles.searchItemTaxOpt}>
                    Includes taxes and fees
                  </span>
                )}
                <button className={styles.searchItemCheckButton}>
                  See availability
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
