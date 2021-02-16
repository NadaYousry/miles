import React from "react";
import {  Button } from "react-bootstrap";
import  ShareIcon  from "./../../assets/images/private-lessons/share-icon.svg";
import "./style.css";
const ButtonComponent = ({ text, theme,share , onClickButton , type  , onSumbitForm}) => {
  return (
    <Button variant="primary " className={`${theme}-btn ml-auto btn ${theme} ${share?"share-btn":""}`} onClick={onClickButton}  type={type}>
      {share&&
      <span className="mr-2"><img src={ShareIcon}/></span>
    }
      {text}
    </Button>
  );
};

export default ButtonComponent;
