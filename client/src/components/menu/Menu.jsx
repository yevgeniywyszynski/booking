import React, { useState } from "react";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MobileNav from "../mobileNav/MobileNav";

const Menu = () => {
  const [burger, setBurger] = useState(false);
  return (
    <>
      <div className={styles.menuList}>
        <Link to="/hotels" className={styles.menuListItem}>
          <FontAwesomeIcon icon={faBed} />
          <span className={styles.icon}>Stays</span>
        </Link>
        <Link to="/" className={styles.menuListItem}>
          <FontAwesomeIcon icon={faPlane} />
          <span className={styles.icon}>Flights</span>
        </Link>
        <Link to="/" className={styles.menuListItem}>
          <FontAwesomeIcon icon={faCar} />
          <span className={styles.icon}>Car rentals</span>
        </Link>
        <Link to="/" className={styles.menuListItem}>
          <FontAwesomeIcon icon={faBed} />
          <span className={styles.icon}>Attractions</span>
        </Link>
        <Link to="/" className={styles.menuListItem}>
          <FontAwesomeIcon icon={faTaxi} />
          <span className={styles.icon}>Airport taxis</span>
        </Link>
      </div>
      <div className={styles.mobile}>
        <button className={styles.burger} onClick={() => setBurger(!burger)}>
          {burger ? (
            <CloseIcon className={styles.burgerMenuIcon} />
          ) : (
            <MenuIcon className={styles.burgerMenuIcon} />
          )}
        </button>
        {burger ? <MobileNav /> : null}
      </div>
    </>
  );
};

export default Menu;
