import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccordionComponent from "../Accordion";
import "./FAQs.css";
const FAQs = ({isMobileScreen}) => {
  const faqsData = [
    {
      id:1,
      question: "What are the rules in place related to Corvid-19 regulations",
      answer:
        "The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. ",
    },
    {
      id:2,
      question: "What are the rules in place related to Corvid-19 regulations",
      answer:
        "The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. ",
    },
    {
      id:3,
      question: "How quickly can I get a new slot",
      answer:
        "The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. ",
    },
    {
      id:4,
      question: "How many students are permitted in a class",
      answer:
        "The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. ",
    },
  ];
  return (
    <>
      <div className="card-container pb-3 ">
        {faqsData?.map((data, index) => {
          return (
            <AccordionComponent key={index} data={data}/>
          );
        })}
      </div>
      
      <div className="row view-all-link ">
        <div className="col-12">
          <div className="link text-right w-100">
            <p className={`${isMobileScreen?"text-center":"text-right"}`}>
              <Link to="/faq">view all</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
