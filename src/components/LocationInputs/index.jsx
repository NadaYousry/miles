import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ButtonComponent from "../Button";
import "./style.css";
const LocationInputs = ({ title }) => {
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
          <div className="input-wrapper col-12">
            <label className="d-block form-label">STREET NUMBER</label>
            <input
              type="text"
              className="address-input d-block w-100"
              placeholder="enter street number"
            />
          </div>
          <div className="input-wrapper col-12">
            <label className="d-block form-label">STREET NAME</label>
            <input
              type="text"
              className="address-input d-block w-100"
              placeholder="enter street name"
            />
          </div>
          <div className="input-wrapper col-12">
            <label className="d-block form-label">CITY / TOWN</label>
            <input
              type="text"
              className="address-input d-block w-100"
              placeholder="enter city or town"
            />
          </div>
          <div className="input-wrapper col-12">
            <label className="d-block form-label">STATE</label>
            <input
              type="text"
              className="address-input d-block w-100"
              placeholder="enter state"
            />
          </div>
          <div className="input-wrapper col-12">
            <label className="d-block form-label">AREA CODE</label>
            <input
              type="text"
              className="address-input d-block w-100"
              placeholder="enter area code"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LocationInputs;
