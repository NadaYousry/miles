import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../../assets/images/navbar/logo.svg";
import { Nav } from "react-bootstrap";
import "./Nav.css";
const NavBar = ({isMobileScreen}) => {
 
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="navbar-container"
    >
      <div className="container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle"/>
        {isMobileScreen&&(
        <Navbar.Brand
        
          href="#home"
          className={`logo-container pt-2 m-0 d-flex align-items-center justify-content-center`}
        >
          <img src={logo} alt="logo" className="w-100" />
        </Navbar.Brand>
          )}
        <Navbar.Collapse id="responsive-navbar-nav d-flex align-items-center justify-content-center">
          <Nav className="w-75 pt-4 d-flex align-items-center justify-content-around m-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-us">Book Private Lessons</Nav.Link>
        {!isMobileScreen&&(
        <Navbar.Brand
        
          href="#home"
          className={`logo-container m-0 d-flex align-items-center justify-content-center`}
        >
          <img src={logo} alt="logo" className="w-100" />
        </Navbar.Brand>
          )}
            <Nav.Link href="#pricing">school program</Nav.Link>
            <Nav.Link href="#pricing">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </div>
    </Navbar>
  );
};

export default NavBar;
