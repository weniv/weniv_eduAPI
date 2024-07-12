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

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
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
                {/* <LanguageBtn /> */}
              </>
            ) : (
              <>
                {/* <LanguageBtn /> */}

                <button className={styles.menuBtn} onClick={toggleDropdown}>
                  <img src={MenuIcon} alt="" />
                  <span className="a11y-hidden">메뉴</span>
                </button>
                {isDropdownOpen && (
                  <ul
                    className={`${styles.nav_modal} ${
                      isDropdownOpen ? styles.show : ""
                    }`}
                  >
                    <li>
                      <Link to="/">eduAPI 소개</Link>
                    </li>
                    <li>
                      <Link to="/eduAPI">CRUD API 명세서</Link>
                    </li>
                  </ul>
                )}
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
