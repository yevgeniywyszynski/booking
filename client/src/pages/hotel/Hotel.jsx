import React, { useState } from "react";
import styles from "./Hotel.module.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Hotel() {
  const { id } = useParams();
  const [slideIdex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const storeHotels = useSelector((state) => state.hotels.all);
  const currentHotel = storeHotels.find((hotel) => hotel._id == id);
  const optionsRedux = useSelector((state) => state.options.allOptions);

  console.log("options", optionsRedux);

  const handleOpen = (idx) => {
    setSlideIndex(idx);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideIdx;
    if (direction === "left") {
      newSlideIdx = slideIdex === 0 ? 5 : slideIdex - 1;
    } else {
      newSlideIdx = slideIdex === 5 ? 0 : slideIdex + 1;
    }

    setSlideIndex(newSlideIdx);
  };

  const calStayNight = () => {
    const { startDate, endDate } = optionsRedux;
    let difTime = endDate - startDate;
    let dayDif = Math.floor(difTime / (1000 * 60 * 60 * 24)) + 1;
    return dayDif;
  };

  const calPrice = (pricePerOneNight) => {
    const { startDate, endDate } = optionsRedux;
    let difTime = endDate - startDate;
    let dayDif = Math.floor(difTime / (1000 * 60 * 60 * 24)) + 1;
    console.log("dayDif", dayDif);
    let totalPrice = dayDif * pricePerOneNight;
    return totalPrice;
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className={styles.hotelContainer}>
        {open && (
          <div className={styles.slider}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={styles.close}
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className={styles.arrow}
              onClick={() => handleMove("left")}
            />
            <div className={styles.sliderWrapper}>
              <img
                src={currentHotel.photos[slideIdex].src}
                alt=""
                className={styles.slideImg}
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className={styles.arrow}
              onClick={() => handleMove("right")}
            />
          </div>
        )}
        <div className={styles.hotelWrapper}>
          <button className={styles.hotelBtnBookNow}>Reserve Book Now</button>
          <h1 className={styles.hotelTitle}>{currentHotel.name}</h1>
          <div className={styles.hotelAdressWrapper}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span className={styles.hotelAdress}>{currentHotel.adress}</span>
          </div>
          <span className={styles.hotelDistance}>
            Excellent location - {currentHotel.distanceToCentrum}m from center
          </span>
          <span className={styles.hotelPriceHighlight}>
            Book a stay ${currentHotel.pricePerNight} at this property and get a
            {currentHotel.freeTaxi}
          </span>
          <div className={styles.hotelImages}>
            {currentHotel.photos.map((photo, idx) => (
              <div key={idx} className={styles.hotelImagesWrapper}>
                <img
                  onClick={() => handleOpen(idx)}
                  src={photo.src}
                  alt="hotel"
                  className={styles.hotelImg}
                />
              </div>
            ))}
          </div>
          <div className={styles.hotelDetails}>
            <div className={styles.hotelDetailsTexts}>
              <h1 className={styles.hotelTitle}>
                Stay in the heart of center Warsaw
              </h1>
              <p className={styles.hotelDesc}>{currentHotel.descHotel}</p>
            </div>
            <div className={styles.hotelDetailsPrice}>
              <h1 className={styles.priceTitle}>Perfect for a 9-night stay</h1>
              <span className={styles.hotelLocationRating}>
                Located in the real center of Warsaw, this property has an
                excellent location score of {currentHotel.rating}!
              </span>
              <h2 className={styles.price}>
                <b>{calPrice(currentHotel.pricePerNight)}$</b> ({calStayNight()}{" "}
                nights)
              </h2>
              <button className={styles.hotelReservationBtn}>
                Reserve Book Now
              </button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}
