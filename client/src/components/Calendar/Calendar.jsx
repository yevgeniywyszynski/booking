import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateOptions } from "../../redux/optionsSlice";
import styles from "./Calendar.module.scss";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DefinedRange } from "react-date-range";
import { useSelector } from "react-redux";

export default function Calendar() {
  const dispatch = useDispatch();
  const optionsRedux = useSelector((state) => state.options.allOptions);
  const [date, setDate] = useState([
    {
      startDate: optionsRedux.startDate,
      endDate: optionsRedux.endDate,
      key: "selection",
    },
  ]);

  useEffect(() => {
    dispatch(updateOptions(date[0]));
  }, [date]);

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item) => setDate([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={date}
      className={styles.date}
      minDate={new Date()}
    />
  );
}
