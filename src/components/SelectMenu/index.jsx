import React, { useState, useEffect } from "react";
import { Accordion, Card, Form } from "react-bootstrap";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
const SelectMenuComponent = ({ filters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleAccordion = (e) => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <Accordion className="select-menu mb-2">
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={"0"}
          className="d-flex align-items-center"
          onClick={(e) => {
            onToggleAccordion(e);
          }}
        >
          <h3 className="my-0">All classes</h3>
          <span className="arrow-icon-container">
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${isOpen ? "rotate" : ""} arrow-icon`}
            />
          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={"0"}>
            <form>
              {filters.map((filter,index)=>{
                return(
                  <div className="single-check-box-row" key={index}>
                    <div  className="form-group">
                    <input type="checkbox" id={filter.option} className={"form-check-box"}/>
                    <label htmlFor={filter.option} className={"form-check-label"}>{filter.option}</label>
                    </div>
                  </div>
                )
              })}
               
            </form>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default SelectMenuComponent;
