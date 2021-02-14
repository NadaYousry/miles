import React from "react";
import "./style.css";
const Loader = () => {
  return (
    <div className="loader-container">
   <div id="pgring" className="progress-ring">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="ring">
      <circle className="static" cx="50%" cy="50%" r="43.75%"></circle>
      <circle className="dynamic" cx="50%" cy="50%" r="43.75%"></circle>
    </svg>
  </div>
    </div>
 
  );
};

export default Loader;
