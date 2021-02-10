import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
const Star = ({ theme }) => {
  return (
      <FontAwesomeIcon icon={faStar} className={`${theme} star-icon`} />
  );
};

export default Star;
