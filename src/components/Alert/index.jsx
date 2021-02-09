import React from "react";
import "./style.css";
const AlertComponent = ({ icon, theme, message, isMobileScreen }) => {
  // theme white or dark
  return (
    <div className="alert-wrapper">
      <div className="alert alert-light d-flex align-items-center justify-content-around pl-auto">
        <img
          src={icon}
          alt={`${theme} alert icon`}
          className={`d-inline-block ${theme}`}
        />
        <p className={`m-0 ${!isMobileScreen ? "mx-3" : ""}`}>{message}</p>
      </div>
    </div>
  );
};

export default AlertComponent;
