import React, { useState } from "react";
import ButtonComponent from "../Button";
import CourtsIcon from "./../../assets/images/about/5courts.svg";
import GymIcon from "./../../assets/images/about/gym.svg";
import SwimmingIcon from "./../../assets/images/about//swim.svg";
import CafeIcon from "./../../assets/images/about/cafe.svg";
import CyclingIcon from "./../../assets/images/about/cycling.svg";
import GolfIcon from "./../../assets/images/about/golf.svg";
import YogaIcon from "./../../assets/images/about/yoga.svg";
import FitnessIcon from "./../../assets/images/about/fitness.svg";
import CirrcledIconContainer from "../CircleedIconContainer";
import "./style.css";
const SelectAmenities = ({ title }) => {
  const amenities = [
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
    {
      icon: CourtsIcon,
      name: "5 Courts",
    },
    {
      icon: GolfIcon,
      name: "Golf",
    },
    {
      icon: YogaIcon,
      name: "Yoga",
    },
    {
      icon: FitnessIcon,
      name: "Fitness",
    },
  ];

  const [selected, setSelected] = useState(false);
  const onCircleSelect = (e) => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };
  return (
    <div className="form-group-container form-body amenity">
      <form className="form-group">
        <div className="row form-title">
          <div className="col-5 col-lg-7 col-md-5 d-flex align-items-center justify-content-between">
            <label className="form-label">{title}</label>
          </div>
          <div className="col-7 col-lg-5 col-md-7 d-flex flex-column justify-content-between">
            <div className="d-flex align-items-center flex-column ">
              <div className="my-2 w-100">
                <ButtonComponent
                  share={""}
                  text={"Update"}
                  theme={"light-green"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-body text-left px-0">
          <div className="row px-3">
            <div className="section-separator col-12 pb-4 mb-4">
              <label className="address-label">NUMBER OF COURTS</label>
              <span className="d-block amwnity-label">7</span>
            </div>
            <div className="col-12 col-lg-7 d-flex justify-content-start flex-wrap ">
              {amenities.map((amenity, index) => {
                return (
                  <div
                    className="d-inline-block mx-1 icon-container"
                    key={index}
                  >
                    <CirrcledIconContainer
                      selecting={true}
                      icon={amenity.icon}
                      name={amenity.name}
                      theme={"normal-selecting"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectAmenities;
