import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import BadgeComponent from "../Badge";
import TimeIcon from "./../../assets/images/about/badge-time-icon.svg";
import DateIcon from "./../../assets/images/about/date-icon.svg";
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
    <div className="feature-container card-container m-auto pb-3">
      {featuredData?.map((data, index) => {
        return (
          <Card
            className={`${isMobileScreen ? "mb-2" : "mb-3"} text-left p-2`}
            key={index}
          >
            <Card.Body>
              <div className="row feature-info-container d-flex">
                <div className="col-12 col-6 col-md-6 title-info">
                  <div className="row">
                    <div className="col-12 col-lg-6 col-md-12">
                      <Card.Title>{data.name}</Card.Title>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12">
                      {data.notes && (
                        <BadgeComponent
                          icon={null}
                          text={data.notes}
                          theme={"orange"}
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-12 p-0">
                    <Card.Text>
                      <span className="d-inline-block feature-type">
                        {data.type}
                      </span>
                      -
                      <span className="d-inline-block feature-type green">
                        {data.for}
                      </span>
                    </Card.Text>
                  </div>
                </div>
                <div className="col-12 col-6 col-md-6 date-and-time-info">
                  <div
                    className={`time-date-container row ${
                      !isMobileScreen
                        ? "justify-content-end"
                        : "justify-content-between"
                    }`}
                  >
                    <BadgeComponent
                      icon={TimeIcon}
                      text={data.time}
                      theme={"gray"}
                    />
                    <BadgeComponent
                      icon={DateIcon}
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
                  <Button variant="primary " className="view-btn ml-auto">
                    View
                  </Button>
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
              view all
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
