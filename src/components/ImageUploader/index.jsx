import React, { useState } from "react";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComponent from "../Button";
import DefaultImage from "../../assets/images/home/mobile-slider.png";
import "./style.css";
const ImageUploader = ({ title }) => {
  const [images, setImages] = useState([]);
  const uploadImage = (e) => {
    let fileData = e.target.files[0];
    let fileSrc;
    let fileObj = { src: null };
    let mimeType = fileData?.type;
    if (mimeType?.match(/image||text\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onload = () => {
      fileSrc = reader.result;
      fileObj.src = fileSrc;
      setImages([...images ,fileObj ]);
    };
    console.log(images);
  };
  const deleteImage =(e , index)=>{
    const newImagesArray = images.splice(index, 1);
    // setImages([...images ,newImagesArray ]);
// console.log(e , index , newImagesArray);
  }

  return (
    <div className="form-group-container">
      <form className="form-group">
        <div className="row form-title">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <label className="form-label">{title}</label>
            <ButtonComponent share={""} text={"Update"} theme={"light-green"} />
          </div>
        </div>
        <div className="form-body d-flex flex-wrap">
          {images.map((images, index) => {
            return (
              <div className="image-wrapper" key={index}>
                <img src={images.src} alt=" image" className="w-100" />
                <button className="cancel" type="button" key={index} onClick={(e)=>{deleteImage(e , index)}}>
                  <FontAwesomeIcon icon={faTimes} /> 
                </button>
              </div>
            );
          })}

          <div className="button-wrapper">
            <span className="label">
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <input
              type="file"
              name="upload"
              id="upload"
              className="upload-box"
              onChange={(e) => {
                uploadImage(e);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImageUploader;
