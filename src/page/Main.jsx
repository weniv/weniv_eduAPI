import React from "react";
import Header from "../components/header/Header";
import Side from "../components/menu/Side";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import "../styles/sub.css";

const Main = () => {
  return (
    <>
      <Header type="mainPage" />
      <div className="sub">
        <Side />
        <div className="sub__content">
          <Breadcrumb />
          {/* {children} */}
        </div>
      </div>
    </>
  );
};

export default Main;
