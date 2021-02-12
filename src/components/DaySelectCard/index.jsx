import React, { useState } from "react";
import ButtonComponent from "../Button";
import "./style.css";
const DaySelectCard = ({ day }) => {
  const [days, setDays] = useState([]);
  const [selected, setSelected] = useState(false);
  const onDaySelect = (e) => {
    if(selected){
      setSelected(false)
    }else{
      setSelected(true)
    }
  };
  return (
    <>
        <p
          className={`day ${selected ?"selected":""} mb-0`}
          onClick={(e) => {
            onDaySelect(e);
          }}
        >
          {day.dayName}
        </p>
        </>
  );
};

export default DaySelectCard;
