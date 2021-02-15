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
            <div className="col-12 col-lg-7 col-md-7 ">
              <h3>
                Didn’t find what you need
                <FontAwesomeIcon
                  icon={faQuestion}
                  className={"ml-2 question-icon"}
                />
              </h3>
              <p className={"contact-us"}>
                Please contact us, we always have a class for you.
              </p>
            </div>
            <div className="col-12 col-lg-5 col-md-5 d-flex flex-column justify-content-between">
              <div className="my-2 w-100">
                <ButtonComponent
                  text={"Get in touch"}
                  theme={"black"}
                  share={false}
                />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DontFoundYouNeedCard;
