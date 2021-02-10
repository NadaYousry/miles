import React, { Suspense } from "react";
import { Tabs, Tab, Nav } from "react-bootstrap";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import history from "./../../app/history";
import AboutPage from "../AboutPage";
import * as LazyComponents from "./../../utlis/LazyLoading";
import GalleryPage from "../GalleryPage";
import ReviewsPage from "../ReviewsPage";
import "./style.css";
import Loader from "../../components/Loader";
const BodyContainer = ({ isMobileScreen }) => {
  return (
    <>
      <div className="home-container container py-5 px-4 ">
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
                <Nav className={'navbar'}>
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
                    to={`/gallery`}
                    className="nav-link"
                  >
                    gallery
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    to={`/gallfaqery`}
                    className="nav-link"
                  >
                    FAQ
                  </NavLink>
                </Nav>
              <Switch>
                <Route path={`/about`}>
                  <Suspense fallback={<Loader />}>
                    <LazyComponents.AboutPage isMobileScreen={isMobileScreen} />
                  </Suspense>
                </Route>
                <Route path={`/review`}>
                  <Suspense fallback={<Loader />}>
                    <LazyComponents.ReviewsPage
                      isMobileScreen={isMobileScreen}
                    />
                  </Suspense>
                </Route>
                <Route path={`/gallery`}>
                  <Suspense fallback={<Loader />}>
                    <LazyComponents.GalleryPage />
                  </Suspense>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodyContainer;
