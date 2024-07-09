import React, { useState, useRef, useEffect } from "react";
import styles from "./Side.module.css";
import ToggleClose from "../../assets/icon-side-close-left.svg";
import ToggleOpen from "../../assets/icon-chapter.svg";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Copyright from "../footer/Copyright";
import ListSNS from "../footer/ListSNS";

const Side = (menudata) => {
  const slideRef = useRef(null);
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // 화면 크기에 따른 메뉴 상태 관리 및 로컬 스토리지 저장
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      if (width <= 1024 && isMenuShow) {
        setIsMenuShow(false);
        localStorage.setItem("toc", "false");
      }
    };
    window.addEventListener("resize", handleResize);

    // 초기 로드 시 상태 설정
    if (viewportWidth > 1024 && localStorage.getItem("toc") === "true") {
      setIsMenuShow(true);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuShow(!isMenuShow);
    localStorage.setItem("toc", !isMenuShow ? "true" : "false");
  };

  return (
    <>
      {isMenuShow && (
        <>
          <div ref={slideRef} className={`${styles.side}`}>
            <h3 className={styles.side_title}>
              <Link to="/eduAPI">edu API</Link>
            </h3>
            <Nav menudata={menudata} />
            <footer className={styles.footer}>
              <Copyright />
              <ListSNS />
            </footer>
            <button className={styles.btnClose} onClick={toggleMenu}>
              <img src={ToggleClose} alt="목차 메뉴 접기" />
              <span className="a11y-hidden">목차 메뉴 접기</span>
            </button>
          </div>
          {viewportWidth <= 1024 && <>{<div className={styles.dim}></div>}</>}
        </>
      )}

      <button
        type="button"
        className={`${styles.btnOpen} ${
          isMenuShow ? styles.hide : styles.show
        }`}
        onClick={toggleMenu}
      >
        <img src={ToggleOpen} alt="목차 메뉴 열기" />
        <span className="a11y-hidden">목차 메뉴 열기</span>
      </button>
    </>
  );
};

export default Side;
