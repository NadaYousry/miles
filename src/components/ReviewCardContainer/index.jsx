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
    },
  ];
  return (
    <div className="review-container">
      {reviewData.map((review, index) => {
        return (
          <div
            key={index}
            className={`row no-gutters align-i  tems-start py-3  ${reviewData.length?"section-separator":""} ${
              reviewData.length > 1 ? "section-separator-top" : ""
            }`}
          >
            <ReviewCard
              isMobileScreen={isMobileScreen}
              review={review}
              length={reviewData.length}
            />
          </div>
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
