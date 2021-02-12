import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../../assets/images/navbar/logo.svg";
import { Nav } from "react-bootstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
const NavBar = ({isMobileScreen}) => {
 
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="navbar-container"
    >
      <div className="container">
        <Navbar.Toggle aria-controls="responsive-navbar-nav navbar" id="toggle"/>
        {isMobileScreen&&(
        <Navbar.Brand
        
          className={`mobile-screen-logo logo-container pt-2 m-0 d-flex align-items-center justify-content-center`}
        >
          <img src={logo} alt="logo" className="w-100" />
        </Navbar.Brand>
          )}
        <Navbar.Collapse id="responsive-navbar-nav d-flex align-items-center justify-content-center">
          <Nav className="w-75 pt-4 d-flex align-items-center justify-content-around m-auto">
            <Nav.Link ><FontAwesomeIcon icon={faHome} className=" mr-2" />Home</Nav.Link>
            <Nav.Link >Book Private Lessons</Nav.Link>
        {!isMobileScreen&&(
        <Navbar.Brand
        
          className={`logo-container m-0 d-flex align-items-center justify-content-center`}
        >
          <img src={logo} alt="logo" className="w-100" />
        </Navbar.Brand>
          )}
            <Nav.Link>school program</Nav.Link>
            <Nav.Link>About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </div>
    </Navbar>
  );
};

export default NavBar;
