import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccordionComponent from "../Accordion";
import "./FAQs.css";
const FAQs = ({faqsData,isMobileScreen}) => {
 
  return (
    <>
      <div className="card-container pb-3 ">
        {faqsData?.map((data, index) => {
          return (
            <AccordionComponent key={index} data={data}/>
          );
        })}
      </div>
    </>
  );
};

export default FAQs;
