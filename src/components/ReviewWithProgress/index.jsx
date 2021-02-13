import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { ProgressBar } from "react-bootstrap";
import FiveStarsRating from "../FiveStarsRating";
import "./style.css";
const ReviewWithProgress = () => {
  const stars = [
    {
      startRate: "5",
      value: 80,
    },
    {
      startRate: "4",
      value: 40,
    },
    {
      startRate: "3",
      value: 5,
    },
    {
      startRate: "2",
      value: 2,
    },

    {
      startRate: "1",
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
            <div
              className={`star-icon-wrapper d-flex align-items-center justify-content-center`}
            >
              <FiveStarsRating
                ratingNumber={""}
                peopleNumber={""}
                theme={"green"}
              />
            </div>
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
