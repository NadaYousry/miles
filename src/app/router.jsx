import React, { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import history from "./history";
import * as LazyComponents from "./../utlis/LazyLoading";
import Loader from "../components/Loader";

export const Routes = (
  <Suspense fallback={<Loader />}>
    <Router history={history}>
      <Switch>
        <LazyComponents.AdminPanel path="/admin" exact/>
        <LazyComponents.Home path="/" />
        <LazyComponents.HomePageBodyContainer path="/about" />
      </Switch>
    </Router>
  </Suspense>
);
