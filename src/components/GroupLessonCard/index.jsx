import React from "react";
import { Card } from "react-bootstrap";
import BadgeComponent from "../Badge";
import ButtonComponent from "../Button";
import "./style.css";
const GroupLessonCard = ({ lesson, isMobileScreen }) => {
  return (
    <div className={"group-lessons-container mb-3"}>
      <Card>
        <Card.Header
          as="div"
          className={`d-flex flex-row justify-content-center align-items-center`}
        >
          <div className={`heading-info`}>
            <h5
              className={`group-lessons-trainner-name mb-0 ${
                isMobileScreen ? "mb-2" : ""
              }`}
            >
              {lesson.groupName}
            </h5>
            <BadgeComponent type={""} text={lesson.label} theme={"white"} />
            <span className={`group-for ml-2`}>{lesson.groupFor}</span>
          </div>
          <div className={`date-and-time-info desktop-screen`}>
            <div
              className={`time-date-container d-flex ${
                !isMobileScreen
                  ? "justify-content-end"
                  : "justify-content-between"
              }`}
            >
              <div className="w-50">
                <BadgeComponent
                  type={"time"}
                  text={lesson.time}
                  theme={"gray"}
                />
              </div>
              <div className="w-50">
                <BadgeComponent
                  type={"date"}
                  text={lesson.date}
                  theme={"gray"}
                />
              </div>
            </div>
          </div>
        </Card.Header>
        {isMobileScreen && (
          <Card.Header className="mobile-screen">
              <Card.Text
                className={`group-lessons-description ${
                  isMobileScreen ? "mb-3" : ""
                } mb-1`}
              >
                {lesson.description}
              </Card.Text>
            <div className={`date-and-time-info`}>
              <div
                className={`time-date-container d-flex ${
                  !isMobileScreen
                    ? "justify-content-end"
                    : "justify-content-between"
                }`}
              >
                <div className="w-50">
                  <BadgeComponent
                    type={"time"}
                    text={lesson.time}
                    theme={"gray"}
                  />
                </div>
                <div className="w-50">
                  <BadgeComponent
                    type={"date"}
                    text={lesson.date}
                    theme={"gray"}
                  />
                </div>
              </div>
            </div>
          </Card.Header>
        )}
        <Card.Body>
          <div className="row">
            <div className="col-12 col-lg-8 col-md-8 description d-flex justify-content-center flex-column">
              <Card.Text
                className={`group-lessons-description desktop-screen ${
                  isMobileScreen ? "mb-3" : ""
                } mb-1`}
              >
                {lesson.description}
              </Card.Text>
              <span className="place-name">{lesson.place}</span>
            </div>
            <div
              className={`col-12 col-lg-4 col-md-4 price-and-button  d-flex flex-column`}
            >
              <span
                className={`group-lessons-price  mb-2 ${
                  isMobileScreen ? "mb-3 text-center" : ""
                }`}
              >
                {lesson.price}
              </span>
              <ButtonComponent
                text={"Register Now"}
                theme={"orange"}
                share={false}
              />
              <ButtonComponent
                text={`Share this`}
                theme={"white"}
                share={true}
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GroupLessonCard;
