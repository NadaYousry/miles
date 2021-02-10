import React from "react";
import { Card } from "react-bootstrap";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComponent from "../Button";
import "./style.css";
const DontFoundYouNeedCard = ({ isMobileScreen }) => {
  return (
    <div className={"do-not-find-need-container mb-3"}>
      <Card>
        <Card.Body>
          <div className="row align-items-center">
            <div className="col-12 col-lg-9 ">
              <h3>
                Didn’t find what you need
                <FontAwesomeIcon icon={faQuestion} className={"ml-2 question-icon"} />
              </h3>
              <p className={'contact-us'}>Please contact us, we always have a class for you.</p>
            </div>
            <div className={`col-12 col-lg-3 d-flex justify-content-end`}>
              <ButtonComponent
                text={"Get in touch"}
                theme={"black"}
                share={false}
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DontFoundYouNeedCard;
