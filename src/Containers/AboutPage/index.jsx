import React from "react";
import FiveStartsRating from "../../components/FiveStartsRating/FiveStartsRating";
import CourtsIcon from "./../../assets/images/about/5courts.svg";
import GymIcon from "./../../assets/images/about/gym.svg";
import SwimmingIcon from "./../../assets/images/about//swim.svg";
import CafeIcon from "./../../assets/images/about/cafe.svg";
import CyclingIcon from "./../../assets/images/about/cycling.svg";
import DangerAlertIcon from "./../../assets/images/about/danger.svg";
import ReviewIcon from "./../../assets/images/about/review.svg";
import MapCard from "../../components/MapCard/MapCard";
import AlertComponent from "../../components/Alert";
import CircledIconContainer from "../../components/CircleedIconContainer";
import ReviewCard from "../../components/ReviewCard";
import ReviewWithProgress from "../../components/ReviewWithProgress/ReviewWithProgress";
import FeaturedCard from "../../components/FeaturedCard";
import FAQs from "../../components/FAQs/FAQs";
import "./style.css";
const AboutPage = ({ isMobileScreen }) => {
  const fiveIconData = [
    {
      icon: CourtsIcon,
      name: "5 Courts",
    },
    {
      icon: GymIcon,
      name: "Gym",
    },
    {
      icon: CyclingIcon,
      name: "Cycling",
    },
    {
      icon: SwimmingIcon,
      name: "Swimming",
    },
    {
      icon: CafeIcon,
      name: "Cafe",
    },
  ];
  return (
    <>
      <section className="row  section-separator mb-5">
        <div
          className={`col-12 col-md-12 col-lg-6 ${
            !isMobileScreen ? "section-separator-right" : ""
          }`}
        >
          <FiveStartsRating />
          <p className="section-separator pb-4">
            Clubhouse Woodridge Tennis Academy offers amazing recently
            re-surfaced Tournament Ready courts servicing North Beach, Glenwood,
            Riversdale and Central Dakota. We also boast hosting the World #11
            favorite training ground and wordl class cafeteria for the hungry
            little ones.
          </p>
          <div className="container px-3">
            <div className="pb-4 activity-icons d-flex align-items-center justify-content-around">
              {fiveIconData.map((data) => {
                return (
                  <div className=" d-flex align-items-center justify-content-center flex-column">
                    <div className="icon-wrapper d-flex align-items-center justify-content-center">
                      <img src={data.icon} alt={`{${data.name} w-100`} />
                    </div>
                    <p className="icon-description">{data.name}</p>
                  </div>
                );
              })}
            </div>
            <AlertComponent
              isMobileScreen={isMobileScreen}
              icon={DangerAlertIcon}
              theme={"white"}
              message={"Currently undergoing renovations."}
            />
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
          <MapCard />
        </div>
      </section>
      <section className="row section-separator pb-3 mb-5">
        <div className="col-12 col-md-12 col-lg-12">
          <ReviewWithProgress />
        </div>
        <div className="col-12 col-md-12 col-lg-12">
          <h2 className="sub-heading text-left mb-3">Reviews</h2>
          <ReviewCard reviewIcon={ReviewIcon} isMobileScreen={isMobileScreen} reviewerName={"Peter Andrews"} reviewMessage={"Attracts staff and students from IU with very nice courts forall round use."}/>
        </div>
      </section>
      <section className="row section-separator p-0 pb-5 mb-5">
        <div className="col-12 col-md-12 col-lg-12">
          <h2 className="sub-heading text-left mb-3">Featured</h2>
          <div className="review-container">
            <div className="row no-gutters align-items-start">
              <div className="col-12">
                <FeaturedCard isMobileScreen={isMobileScreen} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="row section-separator  pb-5 mb-5">
        <div className="col-12 col-md-12 col-lg-12">
          <h2 className="sub-heading text-left mb-3">FAQ</h2>
          <div className="faq-container">
            <div className="row no-gutters align-items-start">
              <div className="col-12">
                <FAQs isMobileScreen={isMobileScreen}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;