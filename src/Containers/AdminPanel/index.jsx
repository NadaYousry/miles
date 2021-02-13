import React, { useEffect, useState } from "react";
import TextAreaFrom from "../../components/TextAreaFrom";
import TextInput from "../../components/TextInput";
import LocationInputs from "../../components/LocationInputs";
import ImageUploader from "../../components/ImageUploader";
import SelectDays from "../../components/SelectDays";
import SelectTime from "../../components/SelectTime";
import SelectAmenities from "../../components/SelectAmenities";
import SelectFeatured from "../../components/SelectFeatured";
import PrivateLessonCardContainer from "../../components/PrivateLessonCardContainer";
import FaqFrom from "../../components/FaqFrom";
import "./style.css";
const AdminPanel = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);
  useEffect(() => {
    setCurrentWidth(window.innerWidth);
    if (window.outerWidth < 768) {
      setIsMobileScreen(true);
    } else {
      setIsMobileScreen(false);
    }

    window.addEventListener("resize", (e) => {
      setCurrentWidth(window.innerWidth);
      if (window.outerWidth < 768) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    });
  }, [currentWidth]);
  return (
    <div className="admin-panel-container container">
      <TextInput title={"Title"} wordsValue={200} />
      <TextAreaFrom title={"Description"} wordsValue={200} />
      <TextAreaFrom title={"Special mention"} wordsValue={200} />
      <ImageUploader title={"Gallery"} />
      <LocationInputs title={"Location"} />
      <SelectDays title={"Open Days"}/>
      <SelectTime title={"Open Hours"}/>
      <SelectAmenities title={"Amenities"}/>
      <SelectFeatured  title={"Features"} isMobileScreen={isMobileScreen}/>
      <div className="form-group-container">
        <div className="form-body p-2">
        <PrivateLessonCardContainer isMobileScreen={isMobileScreen} find={false}/>
        </div>
      </div>
      <FaqFrom/>
    </div>
  );
};

export default AdminPanel;
