import React from "react";
import { HashRouter, NavLink, Router } from "react-router-dom";
import history from "./../../app/history";
import logo from "./../../assets/images/navbar/logo.svg";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { Nav } from "react-bootstrap";
import CircledIconContainer from "../CircleedIconContainer";
const Footer = () => {
  return (
    <footer className="footer-container pt-5 pb-4 px-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 col-md-6 pb-5 column-container">
            <div className="image-container mb-3">
              <img src={logo} alt="logo" className="w-100" />
            </div>
            <div className="contact-info-container">
              <div className="phone-info  mb-3">
                <p>
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="mr-2 phone-icon"
                  />
                  <a href="tel:301-200-5455">301-200-5455</a>
                </p>
              </div>
              <div className="email-info">
                <p>
                  <a href="mailto:info@milesaheadtennis.com">
                    info@milesaheadtennis.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 col-md-6 pb-5 about-miles-container column-container">
            <div className="about-miles">
              <p>
                MilesAhead is a great service! I used their trainers to get back
                in shape and improve at tennis for my club!
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-12 col-md-6 pb-5 column-container">
            <div className="links-conainer">
              <Router history={history}>
                <Nav className={` navbar px-0`}>
                  <NavLink
                    activeClassName="active"
                    to={`/about`}
                    className="nav-link"
                  >
                    About
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    to={`/group-lessons`}
                    className="nav-link"
                  >
                    Group Lesson
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    to={`/private-lessons`}
                    className="nav-link"
                  >
                    Private Lesson
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    to={`/reviews`}
                    className="nav-link"
                  >
                    reviews
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    to={`/gallery`}
                    className="nav-link"
                  >
                    gallery
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    to={`/faq`}
                    className="nav-link"
                  >
                    FAQ
                  </NavLink>
                </Nav>
              </Router>
            </div>
          </div>
          <div className="col-lg-3 col-12 col-md-6 pb-5 column-container">
            <div className="my-account-container">
              <p>My Account</p>
            </div>
            <div className="login-register-container">
              <Router history={history}>
                <Nav className="navbar px-0">
                  <NavLink to="/" className="nav-link">
                    Register
                  </NavLink>
                  <NavLink to="/" className="nav-link">
                    Login
                  </NavLink>
                </Nav>
              </Router>
            </div>
          </div>
        </div>
      </div>
      <div className="section-separator w-100 mb-3"></div>
      <div className="container copy-right-container">
        <div className="row">
          <div className="col-6">
            <p className="mb-0">&copy; Miles Ahead Tennis. All Rights Reserved</p>
          </div>
          <div className="col-6 d-flex ">
            <div className="social-media-icons text-right">
              <i className="fab fa-youtube"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
