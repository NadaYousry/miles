import React, { useState } from "react";
import "./style.css";
const CheckBox = ({ option, showOptions , theme }) => {
  
  const [selected, setSelected] = useState(false);
  const onSelectCheckBox = (e) => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
  };
  return (
    <>
      <div className={`${showOptions?"single-check-box-row":""}`}>
        <div className="checkbox-form-group">
          <input type="checkbox" id={option} className={"form-check-box"} />
          <label htmlFor={option} className={`form-check-label ${theme==="green"?"green":""} ${selected?"checked":""}`} onClick={(e)=>{onSelectCheckBox(e)}}>
            {showOptions && option }
          </label>
        </div>
      </div>
    </>
  );
};

export default CheckBox;
