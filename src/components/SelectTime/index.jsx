import React from "react";
import ButtonComponent from "../Button";
import "./style.css";
const SelectTime = ({ title }) => {
  return (
    <div className="form-group-container">
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
          <label className="address-label px-3">SELECT ALL WEEK DAYS</label>
          <div className="row px-3">
            <div className="col-6 col-md-4 col-lg-3 d-flex align-items-center">
              <label className="time-label mr-3">From</label>
              <input
                className="time"
                type="time"
                id="from"
                name="from"
                min="09:00"
                max="18:00"
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3 d-flex align-items-center">
              <label className="time-label mr-3">To</label>
              <input
                className="time"
                type="time"
                id="to"
                name="to"
                min="09:00"
                max="18:00"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectTime;
