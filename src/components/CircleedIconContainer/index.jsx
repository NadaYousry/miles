import React, { useState } from "react";
import "./style.css";
const CircledIconContainer = ({icon, name ,theme,selecting }) => {
  
  const [selected, setSelected] = useState(false);
  const onCircleSelect = (e) => {
    if(selecting){
    if(selected){
      setSelected(false)
    }else{
      setSelected(true)
    }
  }
  };
  return (
    <>
    <div className={`${selected?"selected":""} ${selecting?"radial":""}  d-flex align-items-center justify-content-center`} onClick={(e)=>{onCircleSelect(e)}}>
    <div className={`icon-wrapper d-flex align-items-center justify-content-center  ${theme} `}>
        <img src={icon} alt={`{${name} w-100`} />
      </div>
    </div>
      {name&&<p className="icon-description">{name}</p>}
    </> 
  );
};

export default CircledIconContainer;
