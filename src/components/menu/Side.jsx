import React, { useState, useEffect } from "react";
import styles from "./Side.module.css";
import ToggleClose from "../../assets/icon-side-close-left.svg";
import ToggleOpen from "../../assets/icon-chapter.svg";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Copyright from "../footer/Copyright";
import ListSNS from "../footer/ListSNS";

// 넓은 화면에서 사이드바를 열어둘지에 대한 사용자의 선택을 기억합니다.
const SIDE_STORAGE_KEY = "sidebar";

const Side = (menudata) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  // 넓은 화면에서의 선택 (새로고침·리사이즈 후에도 유지)
  const [isPinned, setIsPinned] = useState(
    () => localStorage.getItem(SIDE_STORAGE_KEY) === "true"
  );
  // 좁은 화면에서 버튼으로 여는 오버레이 (유지하지 않음)
  const [isOverlayShow, setIsOverlayShow] = useState(false);
  const location = useLocation();

  const isWide = viewportWidth > 1024;
  const isMenuShow = isWide ? isPinned : isOverlayShow;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      // 넓어지면 오버레이는 닫습니다. 사이드바는 저장된 선택에 따라 다시 열립니다.
      if (width > 1024) {
        setIsOverlayShow(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 오버레이가 열려 있는 동안에만 배경 스크롤을 막습니다.
  useEffect(() => {
    document.body.style.overflow = !isWide && isOverlayShow ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isWide, isOverlayShow]);

  // 페이지를 이동하면 오버레이를 닫습니다.
  useEffect(() => {
    setIsOverlayShow(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    if (isWide) {
      const nextIsPinned = !isPinned;
      setIsPinned(nextIsPinned);
      localStorage.setItem(SIDE_STORAGE_KEY, String(nextIsPinned));
    } else {
      setIsOverlayShow((prevIsOverlayShow) => !prevIsOverlayShow);
    }
  };

  return (
    <>
      {isMenuShow && (
        <>
          <div className={`${styles.side}`}>
            <h3 className={styles.side_title}>
              <Link to="/eduAPI">edu API</Link>
            </h3>
            <Nav menudata={menudata} />
            <footer className={styles.footer}>
              <Copyright />
              <ListSNS />
            </footer>
            <button className={styles.btnClose} onClick={toggleMenu}>
              <img src={ToggleClose} alt="" />
              <span className="a11y-hidden">목차 메뉴 접기</span>
            </button>
          </div>
          {!isWide && <div className={styles.dim} onClick={toggleMenu}></div>}
        </>
      )}

      <button
        type="button"
        className={`${styles.btnOpen} ${
          isMenuShow ? styles.hide : styles.show
        }`}
        onClick={toggleMenu}
      >
        <img src={ToggleOpen} alt="" />
        <span className="a11y-hidden">목차 메뉴 열기</span>
      </button>
    </>
  );
};

export default Side;
