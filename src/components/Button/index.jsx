import React from "react";
import {  Button } from "react-bootstrap";
import "./style.css";
const ButtonComponent = ({ text, theme }) => {
  return (
    <Button variant="primary " className={`${theme}-btn ml-auto ${theme}`}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
