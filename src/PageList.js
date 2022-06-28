import React from "react";
import lazy from "react-lazy-with-preload";
import { Route } from "react-router-dom";

const MainContainer = lazy(() => import("./main/container/MainContainer"));

MainContainer.preload();

const PageList = () => {
  return <Route path="/" render={() => <MainContainer></MainContainer>} />;
};

export default PageList;
