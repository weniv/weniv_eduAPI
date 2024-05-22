import React, { useState, useRef } from "react";
import styles from "./Side.module.css";
import Toggle from "../../assets/icon-side-close-left.svg";
import Copyright from "../footer/Copyright";
import ListSNS from "../footer/ListSNS";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Side = (menudata) => {
  const [isMenuShow, setIsMenuShow] = useState(true);
  const slideRef = useRef(null);

  const toggleMenu = () => {
    if (isMenuShow) {
      // SlideOut(닫힘)
      slideRef?.current.classList.add(styles.slideOut);
      setTimeout(() => {
        setIsMenuShow(false);
      }, 100);
    } // SlideIn(열림)
    else setIsMenuShow(true);
    setTimeout(() => {
      slideRef?.current.classList.add(styles.slideIn);
    }, 100);
  };

  return (
    <>
      {isMenuShow && (
        <div ref={slideRef} className={`${styles.side}`}>
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
      )}

      <button
        type="button"
        className={`${styles.btnOpen} ${
          isMenuShow ? styles.hide : styles.show
        }`}
        onClick={toggleMenu}
      >
        <img src={Toggle} alt="목차 메뉴 열기" />
        <span className="a11y-hidden">목차 메뉴 열기</span>
      </button>
    </>
  );
};

export default Side;
