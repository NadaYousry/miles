import React from "react";
import "./style.css";
const CircledIconContainer = ({icon, name ,theme }) => {
  return (
    <>
      <div className={`icon-wrapper d-flex align-items-center justify-content-center ${theme}`}>
        <img src={icon} alt={`{${name} w-100`} />
      </div>
      {name&&<p className="icon-description">{name}</p>}
      </>
  );
};

export default CircledIconContainer;
