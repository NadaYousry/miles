import React from "react";
import TimeIcon from "./../../assets/images/about/badge-time-icon.svg";
import DateIcon from "./../../assets/images/about/date-icon.svg";
import { Badge } from "react-bootstrap";

import "./style.css";
const BadgeComponent = ({ type, text, theme }) => {
  return (
    <Badge
    className={`badge d-flex align-items-center ${theme}`}
  >
    {type&&
    <div className="icon-container mr-2">
      <img src={type==="date"?DateIcon:TimeIcon} alt="time icon" className="w-100" />
    </div>
    }
    <div className={` ${theme === "orange"?"":"info-container"}`}>
      <span>{text}</span>
    </div>
  </Badge>
  );
};

export default BadgeComponent;
