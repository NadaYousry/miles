import React, { useState } from "react";
import { Form } from "react-bootstrap";
import ButtonComponent from "../Button";
import "./style.css";
const LocationInputs = ({ title,wordsValue }) => {

  return (
    <div className="imagae-uploader-container">
    <form className="form-group">
      <div className="row form-title">
        <div className="col-12 d-flex align-items-center justify-content-between">
          <label className="form-label">{title}</label>
          <ButtonComponent share={""} text={"Update"} theme={"light-green"} />
        </div>
      </div>
      <div className="form-body text-left px-0">
        <div className="input-wrapper col-12">
          <label className="d-block address-label">STREET NUMBER</label>
          <input type="text" className="address-input d-block w-100" placeholder="enter street number"/>
        </div>
        <div className="input-wrapper col-12">
          <label className="d-block address-label">STREET NAME</label>
          <input type="text" className="address-input d-block w-100" placeholder="enter street name"/>
        </div>
        <div className="input-wrapper col-12">
          <label className="d-block address-label">CITY / TOWN</label>
          <input type="text" className="address-input d-block w-100" placeholder="enter city or town"/>
        </div>
        <div className="input-wrapper col-12">
          <label className="d-block address-label">STATE</label>
          <input type="text" className="address-input d-block w-100" placeholder="enter state"/>
        </div>
        <div className="input-wrapper col-12">
          <label className="d-block address-label">AREA CODE</label>
          <input type="text" className="address-input d-block w-100" placeholder="enter area code"/>
        </div>
      </div>
    </form>
  </div>
  );
};

export default LocationInputs;
