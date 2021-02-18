import React from "react";
import Carousels from "../../components/Carousel";
import useWindowResize from "../../cutomHooks/useWindowResize";
import HomePageBodyContainer from "../HomePageBodyContainer";
const Home = () => {
  const isMobileScreen = useWindowResize();
  return (
    <>
      <Carousels isMobileScreen={isMobileScreen} />
      <HomePageBodyContainer isMobileScreen={isMobileScreen} />
    </>
  );
};

export default Home;
