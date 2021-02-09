import { faGrinStars, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./FiveStartsRating.css";
const FiveStartsRating = () => {
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
      {stars.map((star,index) => {
        return <FontAwesomeIcon icon={faStar} className="five-star-icon mx-1" key={index}/>;
      })}
      <span className="d-inline-block five-star-text">(122)</span>
    </div>
  );
};

export default FiveStartsRating;
