import React, { useEffect, useState } from "react";
import TextAreaFrom from "../../components/TextAreaFrom";
import TextInput from "../../components/TextInput";
import LocationInputs from "../../components/LocationInputs";
import ImageUploader from "../../components/ImageUploader";
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
    </div>
  );
};

export default AdminPanel;
