import { useState, useEffect } from "react";
import styles from "./AsideMobile.module.css";
import Toggle from "../../assets/icon-down.svg";
import Toc from "./Toc";
import SubBanner from "./SubBanner";
import { ASIDE_BREAKPOINT } from "../../utils/breakpoints";

const AsideMobile = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // 우측 목차로 전환되는 너비가 되면 열려있던 목차를 닫습니다.
      if (window.innerWidth > ASIDE_BREAKPOINT) {
        setIsMenuShow(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuShow(!isMenuShow);
  };

  return (
    <div className={styles.toc}>
      <div className={styles.tocWrap}>
        <button
          onClick={toggleMenu}
          className={`${styles.tocBar} ${isMenuShow ? styles.opened : ""}`}
        >
          목차
          <img
            src={Toggle}
            alt=""
            className={isMenuShow ? styles.rotated : ""}
          />
        </button>
        {isMenuShow && (
          <div className={styles.positionWrap}>
            <Toc toggleMenu={toggleMenu} />
            <div className={styles.subBanner}>
              <SubBanner />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AsideMobile;
