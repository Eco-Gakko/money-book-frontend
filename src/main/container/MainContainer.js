import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as MainService from "../service/MainService";
import Header from "../../common/container/Header";
import Menu from "../../common/container/Menu";
import Content from "../../common/container/Content";

const MainContainer = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Header />
        <Menu />
        <Content />
      </div>
    </>
  );
};

export default MainContainer;
