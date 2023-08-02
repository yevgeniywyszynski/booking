import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import styles from "./List.module.scss";
import { format } from "date-fns";
import SearchItem from "../../components/searchItem/SearchItem";
import { useSelector } from "react-redux";
import { getSearchHotel } from "../../redux/hotelsSlice";
import { useDispatch } from "react-redux";
import { updateOptions } from "../../redux/optionsSlice";
import Calendar from "../../components/Calendar/Calendar";
import { getHotels } from "../../redux/hotelsSlice";
import ListSearchOptions from "../../components/listSearchOptions/ListSearchOptions";

export default function List() {
  const dispatch = useDispatch();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);

  const isLoading = useSelector((state) => state.hotels.loading);

  useEffect(() => {
    if (!isLoading) {
      dispatch(
        updateOptions({
          where: destination.charAt(0).toUpperCase() + destination.slice(1),
        })
      );
    }
  }, [destination]);

  useEffect(() => {
    if (!isLoading) {
      if (!destination) {
        dispatch(getHotels());
      }
    }
  }, []);

  const optionsRedux = useSelector((state) => state.options.allOptions);
  const hotelsList = useSelector((state) => state.hotels.all);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className={styles.listContainer}>
        <div className={styles.listWrapper}>
          <div className={styles.listSearch}>
            <h1 className={styles.listSearchTitle}>Search</h1>
            <div className={styles.listSearchItem}>
              <label className={styles.searchL}>Destination</label>
              <input
                className={styles.searchInputL}
                placeholder={optionsRedux.where}
                type="text"
                onChange={(e) => setDestination(e.target.value)}
              ></input>
            </div>
            <div className={styles.listSearchItem}>
              <label className={styles.searchL}>Chek-in Date </label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className={styles.dataSearchInput}
              >{`${format(optionsRedux.startDate, "MM/dd/yyyy")} to ${format(
                optionsRedux.endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && <Calendar className={styles.date} />}
            </div>
            <ListSearchOptions />
            <button
              onClick={() => dispatch(getSearchHotel(optionsRedux.where))}
              className={styles.lSearchBtn}
            >
              Search
            </button>
          </div>
          <div className={styles.listResult}>
            {hotelsList.length > 0 ? ( // Jesli znalazlo
              <SearchItem />
            ) : !isLoading ? (
              <p>Not found</p> // Jesli zakonczylo pobiernie i jest 0 w length
            ) : (
              <p>Loading</p> // Jest 0 w length, ale pobieranie trwa
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
