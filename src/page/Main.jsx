import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Side from "../components/menu/Side";
import menuData from "../data/menu/eduAPI.json";
import "../styles/sub.css";

const Main = () => {
  return (
    <>
      <Header type="mainPage" />
      <div className="sub">
        <Side data={menuData} />
        <Outlet />
      </div>
    </>
  );
};

export default Main;
