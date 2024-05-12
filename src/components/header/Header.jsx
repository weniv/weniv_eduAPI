import React from "react";
import Scrollbar from "./Scrollbar";
import styles from "./Header.module.css";
import Logo from "../../assets/weniv-api-logo.svg";
import { Link, useLocation } from "react-router-dom";
const Header = ({ type = "null" }) => {
  const location = useLocation();
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };
  return (
    <>
    <header>
      <div className={styles.header_top}>
        <Link to="/">
          <h1 className={styles.logo}>
            <img src={Logo} alt="로고" />
            <span className="a11y-hidden">WenivEduApi</span>
          </h1>
        </Link>
        <nav className={styles.header_nav}>
          <ul className={styles.nav_list}>
            <li className={isActive("/") ? styles.active : ""}>
              <Link to="/">eduAPI 소개</Link>
            </li>
            <li className={isActive("/eduAPI") ? styles.active : ""}>
              <Link to="/eduAPI">CRUD API 명세서</Link>
            </li>
          </ul>
          <div className={styles.lang_cont}>
            <button className={styles.lang_btn}>
              <span className="a11y-hidden"> 언어 선택</span>
            </button>
            <div className={styles.lang_modal}>
              <ul className={styles.lang_list}>
                <li>
                  KR
                  <span className="a11y-hidden">한국어로 변경</span>
                </li>
                <li>
                  EN
                  <span className="a11y-hidden">Change to English</span>
                </li>
                <li>
                  JP
                  <span className="a11y-hidden">Change to Japanese</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* 프로그래스 바 */}
    </header>
      {type === "mainPage" && <Scrollbar />}
    </>
  );
};

export default Header;
