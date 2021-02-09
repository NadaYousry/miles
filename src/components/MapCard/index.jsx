import React from "react";
import { Card } from "react-bootstrap";
import LocationMap from "./../../assets/images/about/location-map.png";
import MapLocationIcon from "./../../assets/images/about/map-icon.svg";
import TimeIcon from "./../../assets/images/about/time-icon.svg";
import PhoneIcon from "./../../assets/images/about/phone-icon.svg";
import "./style.css";
const MapCard = () => {
  const companyInfo = [
    {
      icon: MapLocationIcon,
      info: "6180 Old Dobbin Ln, Columbia, MD 21045, United States",
    },
    {
      icon: TimeIcon,
      info: "Open Now: 6:00am - 5:00pm",
    },
    {
      icon: PhoneIcon,
      info: "+14104234120",
    },
  ];
  return (
    <div className=" m-auto pb-3 map-container">
      <Card className="">
        <div className="image-container w-100 d-flex align-items-center justify-content-center">
          <img src={LocationMap} className="w-100" />
        </div>
        <Card.Body>
          {companyInfo.map((data, index) => {
            return (
              <Card.Text key={index} className="d-flex align-items-start mb-3">
                <>
                  <div className="icon-container d-flex align-items-center justify-content-center mr-3 mt-1">
                    <img src={data.icon} className="w-100" />
                  </div>
                  <p className="info-details mb-0">{data.info}</p>
                </>
              </Card.Text>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MapCard;
