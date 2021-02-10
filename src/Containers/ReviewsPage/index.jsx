import React from "react";
import ReviewCard from "../../components/ReviewCard";
import ReviewWithProgress from "../../components/ReviewWithProgress";
import ReviewIcon from "./../../assets/images/about/review.svg";
const ReviewPage = ({ isMobileScreen }) => {
  const allReviews = [
    {
      reviewIcon: ReviewIcon,
      reviewerName: "Peter Andrews",
      date:"2 April 2021",
      message:
        "Attracts staff and students from IU with very nice courts forall round use.",
    },
    {
      reviewIcon: ReviewIcon,
      reviewerName: "Peter Andrews",
      date:"2 April 2021",
      message:
        "Attracts staff and students from IU with very nice courts forall round use.",
    },
    {
      reviewIcon: ReviewIcon,
      reviewerName: "Peter Andrews",
      date:"2 April 2021",
      message:
        "Attracts staff and students from IU with very nice courts forall round use.",
    },
    {
      reviewIcon: ReviewIcon,
      reviewerName: "Peter Andrews",
      date:"2 April 2021",
      message:
        "Attracts staff and students from IU with very nice courts forall round use.",
    },
  ];
  return (
    <>
      <ReviewWithProgress />
        <div className="mt-5">
          <h2 className="sub-heading text-left mb-3">Reviews</h2>
      {allReviews.map((review,index)=>{
        return(
          <ReviewCard review={review} key={index} length={allReviews.length} isMobileScreen={isMobileScreen} />
        )
      })}
      </div>
    </>
  );
};
export default ReviewPage;