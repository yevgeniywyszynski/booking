import React from "react";
import styles from "./Options.module.scss";

const Options = ({ optionsStore, handleOption }) => {
  return (
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
  );
};

export default Options;
