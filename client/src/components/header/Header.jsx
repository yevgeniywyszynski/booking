import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "react-date-range/dist/styles.css"; // main css file calendar
import "react-date-range/dist/theme/default.css"; // theme css file calendar
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateOptions } from "../../redux/optionsSlice";
import { getSearchHotel } from "../../redux/hotelsSlice";
//import { getHotels } from "../../redux/hotelsSlice";
import Calendar from "../Calendar/Calendar";

export default function Header({ type }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const optionsStore = useSelector((state) => state.options.allOptions);

  const [loaded, setLoaded] = useState(false);
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      setValidated(false);
      dispatch(
        updateOptions({
          where: destination.charAt(0).toUpperCase() + destination.slice(1),
        })
      );
    }
  }, [destination]);

  const handleOption = (name, operation) => {
    dispatch(
      updateOptions({
        [name]:
          operation === "i" ? optionsStore[name] + 1 : optionsStore[name] - 1,
      })
    );
  };

  const handleSearch = () => {
    if (!destination) {
      setValidated(true);
      /*Druga opcja, member nie wybral nic, 
        pokaz informacje ze zostanie pokazana 
        cala lista hoteli 
      */
      // alert(
      //   "Kierunek podrozy nie zostal wybrany, zostanie pokazana cala lista hoteli"
      // );
      // dispatch(getHotels());
      // navigate("/hotels");
    } else {
      let clientDestination =
        destination.charAt(0).toUpperCase() + destination.slice(1);
      dispatch(getSearchHotel(clientDestination));
      navigate("/hotels");
    }
  };

  return (
    <div className={styles.header}>
      <div
        className={
          type === "list"
            ? styles.headerContainerListMode
            : styles.headerContainer
        }
      >
        <div className={styles.headerList}>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faBed} />
            <span className={styles.icon}>Stays</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faPlane} />
            <span className={styles.icon}>Flights</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faCar} />
            <span className={styles.icon}>Car rentals</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faBed} />
            <span className={styles.icon}>Attractions</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faTaxi} />
            <span className={styles.icon}>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className={styles.headerTitle}>Where to next, Kowalski?</h1>
            <p className={styles.headerDesc}>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free booking account
            </p>
            <button className={styles.headerBtn}>Sign in / Register</button>
            <div className={styles.searchMobile}>
              <div className={styles.headerSearch}>
                {/* Where */}
                <div className={styles.headerSearchItem}>
                  <FontAwesomeIcon icon={faBed} className={styles.headerIcon} />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className={styles.headerSearchInput}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                  {validated ? (
                    <div className={styles.errorWrapper}>
                      <FontAwesomeIcon
                        className={styles.iconError}
                        icon={faCircleExclamation}
                      />
                    </div>
                  ) : null}
                </div>
                <div className={styles.headerSearchItem}>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className={styles.headerIcon}
                  />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className={styles.headerSearchText}
                  >{`${format(
                    optionsStore.startDate,
                    "MM/dd/yyyy"
                  )} to ${format(optionsStore.endDate, "MM/dd/yyyy")}`}</span>
                  {openDate && (
                    <div className={styles.calendarWrapper}>
                      <Calendar />
                    </div>
                  )}
                </div>
                <div className={styles.headerSearchItem}>
                  <FontAwesomeIcon
                    icon={faPerson}
                    className={styles.headerIcon}
                  />
                  <span
                    className={styles.headerSearchText}
                    onClick={() => setOpenOptions(!openOptions)}
                  >
                    {`${optionsStore.adults} adults • ${optionsStore.children} children • ${optionsStore.room} room`}
                  </span>

                  {openOptions && (
                    <div className={styles.options}>
                      <div className={styles.optionItem}>
                        <span className={styles.optionText}>Adult</span>
                        <div className={styles.optionCounter}>
                          <button
                            disabled={optionsStore.adults <= 1}
                            className={styles.optionCounterBtn}
                            onClick={() => handleOption("adults", "d")}
                          >
                            -
                          </button>
                          <span className={styles.optionCounterNumber}>
                            {optionsStore.adults}
                          </span>
                          <button
                            className={styles.optionCounterBtn}
                            onClick={() => handleOption("adults", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className={styles.optionItem}>
                        <span className={styles.optionText}>Children</span>
                        <div className={styles.optionCounter}>
                          <button
                            disabled={optionsStore.children <= 0}
                            className={styles.optionCounterBtn}
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className={styles.optionCounterNumber}>
                            {optionsStore.children}
                          </span>
                          <button
                            className={styles.optionCounterBtn}
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className={styles.optionItem}>
                        <span className={styles.optionText}>Room</span>
                        <div className={styles.optionCounter}>
                          <button
                            disabled={optionsStore.room <= 1}
                            className={styles.optionCounterBtn}
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className={styles.optionCounterNumber}>
                            {optionsStore.room}
                          </span>
                          <button
                            className={styles.optionCounterBtn}
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.heastinationrSearchItem}>
                  <button
                    onClick={() => handleSearch()}
                    className={styles.headerBtn}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}
