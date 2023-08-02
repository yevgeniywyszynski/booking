import React from "react";
import styles from "./ListSearchOptions.module.scss";
import { useSelector } from "react-redux";

const ListSearchOptions = () => {
  const optionsRedux = useSelector((state) => state.options.allOptions);

  return (
    <div className={styles.listSearchItem}>
      <label className={styles.searchL}>Options</label>
      <div className={styles.listOption}>
        <div className={styles.listOptionItem}>
          <span className={styles.listOptionText}>Min price per night</span>
          <input type="number" min={1} className={styles.listOptionInput} />
        </div>
        <div className={styles.listOptionItem}>
          <span className={styles.listOptionText}>Max price per night</span>
          <input min={1} type="number" className={styles.listOptionInput} />
        </div>
        <div className={styles.listOptionItem}>
          <span className={styles.listOptionText}>Adults</span>
          <input
            min={1}
            type="number"
            className={styles.listOptionInput}
            placeholder={optionsRedux.adults}
          />
        </div>
        <div className={styles.listOptionItem}>
          <span className={styles.listOptionText}>Children</span>
          <input
            min={0}
            type="number"
            className={styles.listOptionInput}
            placeholder={optionsRedux.children}
          />
        </div>
        <div className={styles.listOptionItem}>
          <span className={styles.listOptionText}>Room</span>
          <input
            min={1}
            type="number"
            className={styles.listOptionInput}
            placeholder={optionsRedux.room}
          />
        </div>
      </div>
    </div>
  );
};

export default ListSearchOptions;
