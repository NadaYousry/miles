import React, { useState } from "react";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComponent from "../Button";
import DefaultImage from "../../assets/images/home/mobile-slider.png";
import "./style.css";
const ImageUploader = ({ title }) => {
  const [count, setCount] = useState(0);
  const countWords = (e) => {
    setCount(e.target.value.length + 1);
  };
  return (
    <div className="imagae-uploader-container">
      <form className="form-group">
        <div className="row form-title">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <label className="form-label">{title}</label>
            <ButtonComponent share={""} text={"Update"} theme={"light-green"} />
          </div>
        </div>
        <div className="form-body d-flex flex-wrap">
          <div className="image-wrapper">
            <img src={DefaultImage} alt=" image" className="w-100" />
            <button className="cancel" type="button">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="button-wrapper">
            <span className="label">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <input
              type="file"
              name="upload"
              id="upload"
              className="upload-box"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImageUploader;
