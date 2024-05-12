import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Side from "../components/menu/Side";
import menuData from "../data/menu/eduAPI.json";
import "../styles/sub.css";

const Main = () => {
  const [menu, setMenu] = useState(menuData);

  return (
    <>
      <Header type="mainPage" />
      <div className="sub">
        <Side data={menu} />
        {/* <div className="sub__content"> */}
        <Outlet />
        {/* </div> */}
      </div>
    </>
  );
};

export default Main;
