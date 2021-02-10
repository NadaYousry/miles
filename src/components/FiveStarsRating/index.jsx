import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Star from "../Star";
import "./style.css";
const FiveStarsRating = ({ratingNumber,peopleNumber}) => {
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
      {peopleNumber&&<span className="d-inline-block five-star-rating">{ratingNumber}</span>}
      <div
        className={`star-icon-wrapper d-flex align-items-center justify-content-center mx-2`}
      >
        {stars.map((star, index) => {
          return(
            <div key={index}>
            <Star theme={"dark-blue"}/></div>);
        })}
      </div>
      {ratingNumber&&<span className="d-inline-block five-star-text">({peopleNumber})</span>}
    </div>
  );
};

export default FiveStarsRating;
