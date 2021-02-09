import {  faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./ReviewWithProgress.css";
const ReviewWithProgress = () => {
  const stars = [
    {
      startRate: "5",
      starIcon: faStar,
      value: 80,
    },
    {
      startRate: "4",
      starIcon: faStar,
      value: 40,
    },
    {
      startRate: "3",
      starIcon: faStar,
      value: 5,
    },
    {
      startRate: "2",
      starIcon: faStar,
      value: 2,
    },

    {
      startRate: "1",
      starIcon: faStar,
      value: 20,
    },
  ];
  return (
    <div className="five-stars-with-progress-container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-8  ml-auto">
          {stars?.map((star, index) => {
            return (
              <div key={index} className="progress-container">
                <div className="mx-3">
                  {" "}
                  <span>{star.startRate}</span>
                </div>
                <ProgressBar variant="success" now={star.value} key={index} />
              </div>
            );
          })}
        </div>
        <div className="col-lg-2 col-md-6 col-4 ">
          <span className="d-inline-block five-star-with-progress-rating w-100">
            4.5
          </span>
          <div className="w-100">
            {stars.map((data,index) => {
              return (
                <FontAwesomeIcon
                  icon={faStar}
                  className="five-star-with-progress-icon mx-0"
                  key={index}
                />
              );
            })}
          </div>
          <span className="d-inline-block five-star-with-progress-text w-100">
            125 Reviews
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewWithProgress;
