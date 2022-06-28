import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import lazy from "react-lazy-with-preload";

const MainContainer = lazy(() => import("./main/container/MainContainer"));
const SignUpContainer = lazy(() =>
  import("./member/container/SignUpContainer")
);
const DashBoardContainer = lazy(() =>
  import("./menus/conatiner/DashBoardContainer")
);
const CalendarContainer = lazy(() =>
  import("./menus/conatiner/CalendarContainer")
);
const InOutcomeContainer = lazy(() =>
  import("./menus/conatiner/InOutcomeContainer")
);

MainContainer.preload();
CalendarContainer.preload();
DashBoardContainer.preload();
SignUpContainer.preload();
InOutcomeContainer.preload();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/signup" component={SignUpContainer} />
        <Route exact path="/dashboard" component={DashBoardContainer} />
        <Route exact path="/calendar" component={CalendarContainer} />
        <Route exact path="/inoutcome" component={InOutcomeContainer} />
      </Switch>
    </Router>
  );
}

export default App;
