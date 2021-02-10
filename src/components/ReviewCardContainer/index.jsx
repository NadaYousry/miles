import React from "react";
import ReviewCard from "./../ReviewCard";
import "./style.css";
import ReviewIcon from "./../../assets/images/about/review.svg";
const ReviewCardContainer = ({ isMobileScreen }) => {
  const reviewData = [
    {
      reviewIcon: ReviewIcon,
      reviewerName: "Peter Andrews",
      message:
        "Attracts staff and students from IU with very nice courts forall round use.",
    }
  ];
  console.log(reviewData);
  return (
    <div className="review-container">
      {reviewData.map((review, index) => {
        return (
          <ReviewCard isMobileScreen={isMobileScreen} review={review} key={index} length={reviewData.length}/>
        );
      })}

      <div className="row view-all-link ">
        <div className="col-12">
          <div className="link text-right w-100">
            <p className={`${isMobileScreen ? "text-center" : "text-right"}`}>
              view all
            </p>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default ReviewCardContainer;