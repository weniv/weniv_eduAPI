import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import "../styles/sub.css";

const Main = () => {
  return (
    <>
      <Header type="mainPage" />
      <div className="sub">
        <Outlet />
      </div>
    </>
  );
};

export default Main;
