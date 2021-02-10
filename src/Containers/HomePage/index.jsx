import React, { useEffect, useState } from "react";
import Carousels from "../../components/Carousel";
import NavBar from "../../components/Navbar";
import BodyContainer from "../BodyContainer";
const Home = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("load", (e) => {
      if (window.innerWidth < 892) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    });
    window.addEventListener("resize", (e) => {
      setCurrentWidth(window.innerWidth);
      if (window.innerWidth < 892) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    });
  }, [currentWidth]);
  return (
    <>
      <NavBar isMobileScreen={isMobileScreen} />
      <Carousels isMobileScreen={isMobileScreen} />
      <BodyContainer isMobileScreen={isMobileScreen} />
    </>
  );
};

export default Home;
