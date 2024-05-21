import React, { useState } from "react";
import styles from "./Aside.module.css";
import CloseIcon from "../../assets/icon-side-close-left.svg";
import OpenIcon from "../../assets/icon-chapter.svg";
import Toc from "./Toc";
const Aside = () => {
  const [isMenuShow, setIsMenuShow] = useState(true);

  const toggleMenu = () => {
    if (isMenuShow) {
      // 닫힘
      setIsMenuShow(false);
      // localStorage.setItem("toc", false);
    } else {
      // 열림
      setIsMenuShow(true);
      // localStorage.removeItem("toc", false);
    }
  };
  
  return isMenuShow ? (
    <aside className={styles.aside}>
      <div className={styles.sublist}>
        <h3>목차</h3>
        <button className={styles.btnClose} onClick={toggleMenu}>
          <img src={CloseIcon} alt="" />
          <span className="a11y-hidden">목차 메뉴 접기</span>
        </button>
        <Toc />
      </div>
    </aside>
  ) : (
    <aside className={`${styles.aside} ${styles.hide}`}>
      <button className={`${styles.btnOpen}`} onClick={toggleMenu}>
        <img src={OpenIcon} alt="" />
      </button>
      <span className="a11y-hidden">목차 메뉴 열기</span>
    </aside>
  );
};

export default Aside;
