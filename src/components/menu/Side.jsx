import React, { useState } from "react";
import styles from "./Side.module.css";

import Toggle from "../../assets/icon-side-close-left.svg";
import Copyright from "../footer/Copyright";
import ListSNS from "../footer/ListSNS";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Side = (menudata) => {
  const [isMenuShow, setIsMenuShow] = useState(true);
  const toggleMenu = () => {
    setIsMenuShow(!isMenuShow);
  };
  return (
    <>
      {isMenuShow ? (
        <div className={`${styles.side} ${styles.show}`}>
          <h3 className={styles.side_title}>
            <Link to="/eduAPI">목차:</Link>
          </h3>
          <Nav menudata={menudata} />
          <footer className={styles.footer}>
            <Copyright />
            <ListSNS />
          </footer>
          <button className={styles.btnClose} onClick={toggleMenu}>
            <img src={Toggle} alt="목차 메뉴 접기" />
            <span className="a11y-hidden">목차 메뉴 접기</span>
          </button>
        </div>
      ) : (
        <button className={styles.btnOpen} onClick={toggleMenu}>
          <img src={Toggle} alt="목차 메뉴 열기" />
          <span className="a11y-hidden">목차 메뉴 열기</span>
        </button>
      )}
    </>
  );
};

export default Side;
