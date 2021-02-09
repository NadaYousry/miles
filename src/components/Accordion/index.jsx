import React, { useState, useEffect } from "react";
import { Accordion, Card } from "react-bootstrap";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
const AccordionComponent = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);


  const onToggleAccordion = (e) => {
         if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <Accordion key={data.id}>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={`${data.id}`}
          data-event={data.id}
          className="d-flex align-items-center px-0"
          onClick={(e) => {
            onToggleAccordion(e);
          }}
        >
          <span>
            {isOpen ? (
              <FontAwesomeIcon icon={faMinus} className=" mr-2" />
            ) : (
              <FontAwesomeIcon icon={faPlus} className=" mr-2" />
            )}
          </span>
          <h3 className="my-0">{data.question}</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={`${data.id}`}>
          <Card.Body>
            {data.answer}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default AccordionComponent;
