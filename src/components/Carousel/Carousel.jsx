import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import SliderImage from "./../../assets/images/home/slider.png";
import MobileSliderImage from "./../../assets/images/home/mobile-slider.png";
import VideoPlayIcon from "./../../assets/images/home/videoPlay.png";
import "./Carousel.css";
const Carousels = ({isMobileScreen}) => {
  const carouselsItemsData = [
    {
      image: isMobileScreen?MobileSliderImage : SliderImage ,
      description: "view 15 other pictures",
      heading: "",
    },
    {
      image: isMobileScreen?MobileSliderImage : SliderImage ,
      description: "view 15 other pictures",
      heading: "",
    },
    {
      image:isMobileScreen?MobileSliderImage : SliderImage ,
      description: "view 15 other pictures",
      heading: "",
    },
  ];
  return (
    <section className="section container" id="home">
      <Carousel className="carousel">
        {carouselsItemsData.map((data,index) => {
          return (
            <Carousel.Item interval={5000} className="slider-container" key={index}>
              <img
                className="d-block w-100"
                src={data.image}
                alt="First slide"
              />
              <div className="slider-image-filter">
              <div className="video-play-icon">
                <img src={VideoPlayIcon} alt="video icon"/>
              </div>
              </div>
              <Carousel.Caption>
                <h3>{data.heading}</h3>
                <p className="text-center">{data.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Carousels;
