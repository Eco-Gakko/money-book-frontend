import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import MenuStyle from "../component/scss/Menu.module.scss";

const Menu = () => {
  return (
    <>
      <div className={MenuStyle.wrap}>
        <div className={MenuStyle.btnWrap}>
          <button className={MenuStyle.btn1}>
            {" "}
            <Link className={MenuStyle.link1} to="/dashboard">
              대시보드{" "}
            </Link>
          </button>
          <button className={MenuStyle.btn1}>
            {" "}
            <Link className={MenuStyle.link1} to="/calendar">
              달력{" "}
            </Link>
          </button>
          <button className={MenuStyle.btn2}>
            {" "}
            <Link className={MenuStyle.link2} to="/inoutcome">
              {" "}
              수입 / 지출 내역{" "}
            </Link>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
