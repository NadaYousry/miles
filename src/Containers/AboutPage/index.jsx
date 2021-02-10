import React from "react";
import FiveStarsRating from "../../components/FiveStarsRating";
import CourtsIcon from "./../../assets/images/about/5courts.svg";
import GymIcon from "./../../assets/images/about/gym.svg";
import SwimmingIcon from "./../../assets/images/about//swim.svg";
import CafeIcon from "./../../assets/images/about/cafe.svg";
import CyclingIcon from "./../../assets/images/about/cycling.svg";
import DangerAlertIcon from "./../../assets/images/about/danger.svg";
import MapCard from "../../components/MapCard";
import AlertComponent from "../../components/Alert";
import CircledIconContainer from "../../components/CircleedIconContainer";
import ReviewCardContainer from "../../components/ReviewCardContainer";
import ReviewWithProgress from "../../components/ReviewWithProgress";
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
          <FiveStarsRating />
          <p className="section-separator pb-4">
            Clubhouse Woodridge Tennis Academy offers amazing recently
            re-surfaced Tournament Ready courts servicing North Beach, Glenwood,
            Riversdale and Central Dakota. We also boast hosting the World #11
            favorite training ground and wordl class cafeteria for the hungry
            little ones.
          </p>
          <div className="">
            <div className="pb-4 activity-icons d-flex align-items-center justify-content-around">
              {fiveIconData.map((data, index) => {
                return (
                  <div
                    className=" d-flex align-items-center justify-content-center flex-column"
                    key={index}
                  >
                    <CircledIconContainer icon={data.icon} name={data.name} />
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
          <h2
            className={`sub-heading text-left text-center ${
              isMobileScreen ? "mb-3" : "mb-4"
            }`}
          >
            Map
          </h2>
          <MapCard />
        </div>
      </section>
      <section className="row section-separator pb-3 mb-5">
        <div className="col-12 col-md-12 col-lg-12">
          <ReviewWithProgress />
        </div>
        <div className="col-12 col-md-12 col-lg-12">
          <h2 className="sub-heading text-left mb-3">Reviews</h2>
          <ReviewCardContainer isMobileScreen={isMobileScreen} />
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
                <FAQs isMobileScreen={isMobileScreen} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
