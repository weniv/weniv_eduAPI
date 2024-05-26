import React, { useEffect, useState } from "react";
import Scrollbar from "./Scrollbar";
import styles from "./Header.module.css";
import Logo from "../../assets/weniv-api-logo.svg";
import MenuIcon from "../../assets/hamburger.svg";
import Xicon from "../../assets/icon-X.svg";

import { Link, useLocation } from "react-router-dom";
import LanguageBtn from "../button/LanguageBtn";

const Header = ({ type = "null" }) => {
  const location = useLocation();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            {viewportWidth > 1024 ? (
              <>
                <ul className={styles.nav_list}>
                  <li className={isActive("/") ? styles.active : ""}>
                    <Link to="/">eduAPI 소개</Link>
                  </li>
                  <li className={isActive("/eduAPI") ? styles.active : ""}>
                    <Link to="/eduAPI">CRUD API 명세서</Link>
                  </li>
                </ul>
                <LanguageBtn />
              </>
            ) : (
              <>
                <LanguageBtn />
                <div className={styles.nav_icon} onClick={toggleDropdown}>
                  <button className={styles.closeMenuBtn}>
                    <img src={MenuIcon} alt="메뉴 열기 아이콘" />
                  </button>
                  {isDropdownOpen && (
                    <ul
                      className={`${styles.nav_modal} ${
                        isDropdownOpen ? styles.show : ""
                      }`}
                    >
                      <li>
                        <Link to="/" onClick={() => setIsDropdownOpen(false)}>
                          eduAPI 소개
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/eduAPI"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          CRUD API 명세서
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </>
            )}
          </nav>
        </div>
        {type === "mainPage" && <Scrollbar />}
      </header>
    </>
  );
};

export default Header;
