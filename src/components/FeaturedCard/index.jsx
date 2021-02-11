import React from "react";
import {  Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BadgeComponent from "../Badge";
import ButtonComponent from "../Button";
import "./style.css";
const FeaturedCard = ({ isMobileScreen }) => {
  const featuredData = [
    {
      name: "Footwork Patterns",
      type: "Groups",
      for: "Kids | 4-7",
      description:
        "Improve with other players in a similar skill set and a fun envoronment.",
      time: "4:00pm - 5:00pm",
      date: "23 Aug - 13 Sep",
      notes: "",
    },
    {
      name: "Match fitness",
      type: "Private",
      for: "Adults | 18+",
      description:
        "Get one on one private instruction. Improve faster working on specific skills.",
      time: "4:00pm - 5:00pm",
      date: "23 Aug - 13 Sep",
      notes: "",
    },
    {
      name: "Match fitness",
      type: "Private",
      for: "Adults | 18+",
      description:
        "Get one on one private instruction. Improve faster working on specific skills.",
      time: "4:00pm - 5:00pm",
      date: "23 Aug - 13 Sep",
      notes: "Still time left to register",
    },
    {
      name: "Match fitness",
      type: "Private",
      for: "Adults | 18+",
      description:
        "Get one on one private instruction. Improve faster working on specific skills.",
      time: "4:00pm - 5:00pm",
      date: "23 Aug - 13 Sep",
      notes: "Class is in session, book now",
    },
  ];
  return (
    <div className="feature-container card-container">
      {featuredData?.map((data, index) => {
        return (
          <Card
            className={`${isMobileScreen ? "mb-2" : "mb-3"} text-left p-2`}
            key={index}
          >
            <Card.Body>
              <div className="row feature-info-container d-flex">
                <div className="col-12 col-lg-7 col-md-7 title-info">
                  <div className="row flex-wrap">
                      <Card.Title className="mr-2 mb-0">{data.name}</Card.Title>
                      {data.notes && (
                        <BadgeComponent
                          type={''}
                          text={data.notes}
                          theme={"orange"}
                        />
                      )}
                  </div>
                  <div className="col-12 p-0">
                    <Card.Text>
                        <span className="feature-type">{data.type}</span>
                      -
                        <span className="feature-type green">{data.for}</span>
                    </Card.Text>
                  </div>
                </div>
                <div className="col-12 col-lg-5 col-md-5 date-and-time-info">
                  <div
                    className={`time-date-container row ${
                      !isMobileScreen
                        ? "justify-content-end"
                        : "justify-content-between"
                    }`}
                  >
                    <BadgeComponent
                      type={'time'}
                      text={data.time}
                      theme={"gray"}
                    />
                    <BadgeComponent
                      type={'date'}
                      text={data.date}
                      theme={"gray"}
                    />
                  </div>
                </div>

                <div className="col-lg-9 col-12 col-md-9 description-info">
                  <Card.Text className="feature-description">
                    {data.description}
                  </Card.Text>
                </div>
                <div className="col-lg-3 col-12 text-right feature-button p-0">
                  <ButtonComponent text={'View'} theme={"green"} share={false}/>
                </div>
              </div>
            </Card.Body>
          </Card>
        );
      })}
      <div className="row view-all-link ">
        <div className="col-12">
          <div className="link text-right w-100">
            <p className={`${isMobileScreen ? "text-center" : "text-right"}`}>
             <Link to="./"> view all</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
