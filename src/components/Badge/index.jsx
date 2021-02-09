import React from "react";
import { Badge } from "react-bootstrap";

import "./style.css";
const BadgeComponent = ({ icon, text, theme }) => {
  return (
    <Badge
    className={`badge d-flex align-items-center ${theme} ${theme==="orange"?"justify-content-center":""}`}
  >
    {icon&&
    <div className="icon-container mr-2">
      <img src={icon} alt="time icon" className="w-100" />
    </div>
    }
    <div className="info-container">
      <span>{text}</span>
    </div>
  </Badge>
  );
};

export default BadgeComponent;
