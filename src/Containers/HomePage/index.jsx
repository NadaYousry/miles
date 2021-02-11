import React, { useEffect, useState } from "react";
import BodyContainer from "../BodyContainer";
import HeaderContainer from "../HeaderContainer";
const Home = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);
  useEffect(() => {
    setCurrentWidth(window.innerWidth);
    if (window.outerWidth < 768) {
      setIsMobileScreen(true);
    } else {
      setIsMobileScreen(false);
    }

    window.addEventListener("resize", (e) => {
      setCurrentWidth(window.innerWidth);
      if (window.outerWidth < 768) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    });
  }, [currentWidth]);
  return (
    <>
      <HeaderContainer isMobileScreen={isMobileScreen} />
      <BodyContainer isMobileScreen={isMobileScreen} />
    </>
  );
};

export default Home;
