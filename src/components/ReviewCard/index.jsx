import React from "react";
import "./style.css";
const ReviewCard = ({ isMobileScreen, review, length }) => {
  return (
    <>
      <div
        className={`${
          isMobileScreen ? "col-2" : "col-1"
        } d-flex align-items-start justify-content-center flex-column`}
      >
        <div className="icon-wrapper review d-flex align-items-center justify-content-center">
          <img src={review.reviewIcon} alt="review icon w-100" />
        </div>
      </div> 
      <div className="col-10">
        <p className=" text-left mb-0">{`"${review.message}"`}</p>
        <span className="w-100 reviewer-name text-secondary text-left d-inline-block">
          {review.reviewerName}
        </span>
      </div>
    </>
  );
};

export default ReviewCard;
