import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/weniv-api-logo-gray.svg";
import Toggle from "../../assets/icon-down.svg";
import ListSNS from "./ListSNS";
import Copyright from "./Copyright";

const Footer = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsInfoVisible((prev) => !prev);
  };

  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.intro_footer}>
          <section className={styles.footer_top}>
            <h2 className={styles.logo}>
              <img src={Logo} alt="weniv eduAPI" />
              <span className="a11y-hidden">WenivEduApi</span>
            </h2>
            <Copyright />
          </section>
          <div
            className={`${styles.wenivInfo} ${
              viewportWidth && isInfoVisible ? styles.active : ""
            }`}
          >
            <button
              type="button"
              className={styles.info_toggleBtn}
              onClick={handleToggle}
            >
              (주)위니브 사업자 정보
              <img src={Toggle} alt="" />
            </button>
            {(!viewportWidth || isInfoVisible) && (
              <dl>
                <div className={styles.sort}>
                  <dt className={styles.sortTitle}>
                    <span
                      className={styles.data_line}
                      data-lang="company-name-value"
                    >
                      (주)위니브
                    </span>
                  </dt>
                  <dd className={styles.data_line} data-lang="ceo-value">
                    대표: 이호준
                  </dd>
                </div>
                <div className={styles.sort}>
                  <dt data-lang="business-license">사업자 번호:</dt>
                  <dd className={styles.data_line}>546-86-01737</dd>
                  <dt className={styles.srOnly} data-lang="industry">
                    업종:
                  </dt>
                  <dd
                    className={`${styles.data_line} ${styles.dataInvolved} ${styles["data-lang-industry-value"]}`}
                  >
                    정보통신업
                  </dd>
                </div>
                <div className={styles.sort}>
                  <dt data-lang="address">주소:</dt>
                  <dd data-lang="address-value">
                    제주 제주시 첨단로 330 세미양빌딩 A동 1층 106호
                  </dd>
                </div>
              </dl>
            )}
          </div>
        </div>
        <ListSNS />
      </div>
    </footer>
  );
};

export default Footer;
