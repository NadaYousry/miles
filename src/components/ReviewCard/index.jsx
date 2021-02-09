import React from "react";
import "./style.css";
const ReviewCard = ({
  isMobileScreen,
  reviewIcon,
  reviewerName,
  reviewMessage,
}) => {
  return (
    <div className="review-container">
      <div className="row no-gutters align-items-start">
        <div
          className={`${
            isMobileScreen ? "col-2" : "col-1"
          } d-flex align-items-start justify-content-center flex-column`}
        >
          <div className="icon-wrapper review d-flex align-items-center justify-content-center">
            <img src={reviewIcon} alt="review icon w-100" />
          </div>
        </div>
        <div className="col-10">
          <p className=" text-left mb-0">{`"${reviewMessage}"`}</p>
          <span className="w-100 reviewer-name text-secondary text-left d-inline-block">
            {reviewerName}
          </span>
        </div>
      </div>
      <div className="row view-all-link ">
        <div className="col-12">
          <div className="link text-right w-100">
            <p className={`${isMobileScreen?"text-center":"text-right"}`}>view all</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
