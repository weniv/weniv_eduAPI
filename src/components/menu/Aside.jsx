import React, { useState } from "react";
import styles from "./Aside.module.css";
import CloseIcon from "../../assets/icon-side-close-left.svg";
import OpenIcon from "../../assets/icon-chapter.svg";
import SubBanner from "./SubBanner";
import Toc from "./Toc";

const Aside = () => {
  const [isMenuShow, setIsMenuShow] = useState(true);

  const toggleMenu = () => {
    setIsMenuShow((prevIsMenuShow) => !prevIsMenuShow);
  };

  return isMenuShow ? (
    <aside className={styles.aside}>
      <div className={styles.sublist}>
        <h3 className={styles.asideTitle}>목차</h3>
        <button className={styles.btnClose} onClick={toggleMenu}>
          <img src={CloseIcon} alt="" />
          <span className="a11y-hidden">목차 메뉴 접기</span>
        </button>
        <Toc />
      </div>
      <SubBanner />
    </aside>
  ) : (
    <aside className={styles.aside}>
      <button className={styles.btnOpen} onClick={toggleMenu}>
        <img src={OpenIcon} alt="" />
        <span className="a11y-hidden">목차 메뉴 열기</span>
      </button>
    </aside>
  );
};

export default Aside;
