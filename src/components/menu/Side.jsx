import React, { useState, useRef, useEffect } from "react";
import styles from "./Side.module.css";
import ToggleClose from "../../assets/icon-side-close-left.svg";
import ToggleOpen from "../../assets/icon-chapter.svg";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Copyright from "../footer/Copyright";
import ListSNS from "../footer/ListSNS";

const Side = (menudata) => {
  const slideRef = useRef(null);
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      if (width <= 1024 && isMenuShow) {
        setIsMenuShow(false);
        document.body.style.overflow = "auto";
        localStorage.setItem("toc", "false");
      }
    };

    window.addEventListener("resize", handleResize);

    // 초기 로드 시 상태 설정
    if (viewportWidth > 1024 && localStorage.getItem("toc") === "true") {
      setIsMenuShow(true);
    }

    // 컴포넌트 언마운트 시 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, [viewportWidth, isMenuShow]);

  useEffect(() => {
    // URL 경로가 변경될 때 사이드바 상태를 모바일에서만 업데이트
    if (viewportWidth <= 1024) {
      setIsMenuShow(false);
      document.body.style.overflow = "auto";
      localStorage.setItem("toc", "false");
    }
  }, [location.pathname, viewportWidth]); // viewportWidth 의존성 추가

  const toggleMenu = () => {
    setIsMenuShow((prevIsMenuShow) => {
      const newIsMenuShow = !prevIsMenuShow;
      if (newIsMenuShow) {
        // 사이드바가 열릴 때
        if (viewportWidth <= 1024) {
          document.body.style.overflow = "hidden";
        }
      } else {
        // 사이드바가 닫힐 때
        document.body.style.overflow = "auto";
      }
      localStorage.setItem("toc", newIsMenuShow ? "true" : "false");
      return newIsMenuShow;
    });
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
          {viewportWidth <= 1024 && (
            <div className={styles.dim} onClick={toggleMenu}></div>
          )}
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
