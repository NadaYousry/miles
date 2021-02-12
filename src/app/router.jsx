import React, { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import history from "./history";
import * as LazyComponents from "./../utlis/LazyLoading";
import Loader from "../components/Loader";

export const Routes = (
  <Suspense fallback={<Loader />}>
    <Router history={history}>
      <Switch>
        <LazyComponents.AdminPanel path="/react-app/admin" exact/>
        <LazyComponents.Home path="/react-app/" />
        <LazyComponents.HomePageBodyContainer path="/react-app/about" />
      </Switch>
    </Router>
  </Suspense>
);
