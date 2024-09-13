import { useState, useEffect } from "react";
import styles from "./AsideMobile.module.css";
import Toggle from "../../assets/icon-down.svg";
import Toc from "./Toc";
import SubBanner from "./SubBanner";

const AsideMobile = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
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
