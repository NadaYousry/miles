import React, { useState } from "react";
import ButtonComponent from "../Button";
import DaySelectCard from "../DaySelectCard";
import "./style.css";
const SelectDays = ({ title }) => {
  const days = [
    {
      dayName: "Sunday",
    },
    {
      dayName: "Monday",
    },
    {
      dayName: "Tuesday",
    },
    {
      dayName: "Wednesday",
    },
    {
      dayName: "Friday",
    },
    ,
    {
      dayName: "Saturday",
    },
  ];
  return (
    <div className="form-group-container">
      <form className="form-group">
        <div className="row form-title">
          <div className="col-5 col-lg-7 col-md-5  d-flex align-items-center justify-content-between">
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
          <label className="address-label px-3">SELECT ALL WEEK DAYS</label>
          <div className="row px-3">
            {days.map((day, index) => {
              return (
                <div
                  key={index}
                  className={`col-12 col-lg-2 days-select-container mb-2`}
                >
                  <DaySelectCard day={day} />
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectDays;
