import React, { useState, useEffect } from "react";
import styles from "./Aside.module.css";
import CloseIcon from "../../assets/icon-side-close-left.svg";
import OpenIcon from "../../assets/icon-chapter.svg";
import Toggle from "../../assets/icon-down.svg";
import Toc from "./Toc";

const Aside = () => {
  const [isMenuShow, setIsMenuShow] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isToggled, setIsToggled] = useState(false);

  const toggleMenu = () => {
    if (isMenuShow) {
      // 닫힘
      setIsMenuShow(false);
      localStorage.setItem("toc", false);
    } else {
      // 열림
      setIsMenuShow(true);
      localStorage.removeItem("toc", false);
    }
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMenuShow ? (
    <aside className={styles.aside}>
      <div className={styles.sublist}>
        <h3>목차</h3>
        <button className={styles.btnClose} onClick={toggleMenu}>
          {viewportWidth > 1024 ? (
            <>
              <img src={CloseIcon} alt="" />
              <span className="a11y-hidden">목차 메뉴 열기</span>
            </>
          ) : (
            <img
              src={Toggle}
              alt=""
              className={
                isToggled ? styles.rotateUpIcon : styles.rotateDownIcon
              }
            />
          )}
          <span className="a11y-hidden">목차 메뉴 접기</span>
        </button>
        <Toc />
      </div>
    </aside>
  ) : (
    <aside className={`${styles.aside} ${styles.hide}`}>
      <button className={styles.btnOpen} onClick={toggleMenu}>
        {viewportWidth > 1024 ? (
          <img src={OpenIcon} alt="목차 메뉴 열기" />
        ) : (
          <>
            <h3>목차</h3>
            <img
              src={Toggle}
              alt="목차 메뉴 열기"
              className={
                isToggled ? styles.rotateUpIcon : styles.rotateDownIcon
              }
            />
          </>
        )}
      </button>
      <span className="a11y-hidden">목차 메뉴 열기</span>
    </aside>
  );
};

export default Aside;
