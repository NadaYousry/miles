import React from "react";
import "./style.css";
const Message = () => {
  return (
    <div className="message">
      <div className="row">
        <div className="col-12 text-center mb-2">
          <i className="far fa-check-circle message-icon"></i>
        </div>
        <div className="col-12">
          <h4>Thank You!</h4>
          <p>
            Your submission has been received. You Will be Contacted Shortly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
