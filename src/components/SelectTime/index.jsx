import React from "react";
import ButtonComponent from "../Button";
import "./style.css";
const SelectTime = ({ title }) => {
  return (
    <div className="form-group-container">
      <form className="form-group">
        <div className="row form-title">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <label className="form-label">{title}</label>
            <ButtonComponent share={""} text={"Update"} theme={"light-green"} />
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
              id="appt"
              name="appt"
              min="09:00"
              max="18:00"
            /></div>
            <div className="col-6 col-md-4 col-lg-3 d-flex align-items-center">
            <label className="time-label mr-3">To</label>
            <input
            className="time"
              type="time"
              id="appt"
              name="appt"
              min="09:00"
              max="18:00"
            /></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectTime;
