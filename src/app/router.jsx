import React, { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import history from "./history";
import * as LazyComponents from "./../utlis/LazyLoading";
import Loader from "../components/Loader";

export const Routes = (
  <Suspense fallback={<Loader />}>
    <Router history={history}>
      <Switch>
        <LazyComponents.Home path="/" />
        <LazyComponents.BodyContainer path="/about" />
      </Switch>
    </Router>
  </Suspense>
);
