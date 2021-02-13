import React, { useState } from "react";
import "./style.css";
const CircleedImageContainer = ({ image, name }) => {
  const [selected, setSelected] = useState(false);
  const changeSelectCoach = (e) => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };
  return (
    <>
      <div className="image-container-and-slect px-2 mb-3 d-flex align-items-center justify-content-center">
        <div
          className={`image-container${selected ? " selected" : ""}`}
          id={name}
          onClick={(e) => {
            changeSelectCoach(e);
          }}
        >
          <img src={image} alt={name} className={`w-100`} />
        </div>
      </div>
    </>
  );
};

export default CircleedImageContainer;
