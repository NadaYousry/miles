import React from "react";
import Carousels from "../../components/Carousel";
import NavBar from "../../components/Navbar";
const HeaderContainer = ({isMobileScreen}) => {
  return (
    <>
      <NavBar isMobileScreen={isMobileScreen} />
      <Carousels isMobileScreen={isMobileScreen} />
    </>
  );
};

export default HeaderContainer;
