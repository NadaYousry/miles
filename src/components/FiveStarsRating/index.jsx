import { faGrinStars, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Star from "../Star";
import "./style.css";
const FiveStarsRating = () => {
  const stars = [
    {
      starIcon: faStar,
      value: 1,
    },
    {
      starIcon: faStar,
      value: 1,
    },
    {
      starIcon: faStar,
      value: 1,
    },
    {
      starIcon: faStar,
      value: 1,
    },
    {
      starIcon: faStar,
      value: 1,
    },
  ];
  return (
    <div className="five-stars-container">
      <span className="d-inline-block five-star-rating">4.5</span>
      <div
        className={`star-icon-wrapper d-flex align-items-center justify-content-center mx-2`}
      >
        {stars.map((star, index) => {
          return <Star theme={"blue"} />;
        })}
      </div>
      <span className="d-inline-block five-star-text">(122)</span>
    </div>
  );
};

export default FiveStarsRating;
