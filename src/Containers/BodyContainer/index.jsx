import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import AboutPage from "../AboutPage";
import "./style.css";
const BodyContainer = ({isMobileScreen}) => {
  return (
    <div className="home-container container py-5 px-4 col-11 col-lg-9">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 col-lg-4">
            <h1 className="heading text-left">
              Clubhouse Woodridge Tennis Academy
            </h1>
          </div>
        </div>
        <div className="row  mb-5">
          <div className="col-12">
            <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
              <Tab eventKey="about" title="about">
                <AboutPage isMobileScreen={isMobileScreen}/>
              </Tab>
              <Tab eventKey="groupLesson" title="groupLesson">
                group Lessons
              </Tab>
              <Tab eventKey="reviews" title="reviews">
                reviews
              </Tab>
              <Tab eventKey="gallery" title="gallery">
                gallery
              </Tab>
              <Tab eventKey="faq" title="faq">
                faq
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContainer;
