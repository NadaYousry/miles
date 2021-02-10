import React from "react";
import { Card } from "react-bootstrap";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Star from "./../Star";
import ButtonComponent from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
const PrivateLessonCard = ({ lesson, isMobileScreen }) => {
  const stars = [
    {
      starIcon: faStar,
    },
    {
      starIcon: faStar,
    },
    {
      starIcon: faStar,
    },
    {
      starIcon: faStar,
    },
    {
      starIcon: faStar,
    },
  ];
  return (
    <div className={"private-lessons-container mb-3"}>
      <Card>
        <Card.Header as="div" className={`${isMobileScreen?"d-flex flex-column justify-content-center align-items-center":""}`}>
            {isMobileScreen && (
                <div className="private-lessons-image-container d-flex align-items-center justify-content-center mx-auto mb-3">
                  <div className="image-wrapper">
                    <img
                      src={lesson.image}
                      alt={`trainner image`}
                      className="w-100"
                    />
                  </div>
                </div>
              )}
          <h5 className={`private-lessons-trainner-name mb-0 ${isMobileScreen?"mb-2":""}`}>
            {lesson.trainner}
          </h5>
          <span className={`d-inline-block mr-2  ${isMobileScreen?"mb-2":""}`}>
            {stars.map((star, index) => {
              return (
                <span key={index}>
                  <Star theme={"sky-blue"} />
                </span>
              );
            })}
          </span>
          <span className={`rate-from`}>{lesson.rateFrom}</span>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-12 col-lg-2 d-flex align-items-center">
              {!isMobileScreen && (
                <div className="private-lessons-image-container d-flex align-items-center justify-content-center">
                  <div className="image-wrapper">
                    <img
                      src={lesson.image}
                      alt={`trainner image`}
                      className="w-100"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="col-12 col-lg-7 description d-flex align-items-center">
              <Card.Text className={`private-lessons-description ${isMobileScreen?"mb-3":""}`}>
                {lesson.description}
              </Card.Text>
            </div>
            <div className={`col-12 col-lg-3 price-and-button  d-flex flex-column`}>
              <span className={`private-lessons-price  mb-2 ${isMobileScreen?"mb-3 text-center":""}`}>
                {lesson.price}
              </span>
              <ButtonComponent
                text={"View Profile"}
                theme={"sky-blue"}
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

export default PrivateLessonCard;
