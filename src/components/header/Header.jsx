import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/weniv-api-logo.svg";
import World from "../../assets/icon-world.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className={styles.header}>
          <h1 className={styles.logo}>
            <img src={Logo} alt="로고" />
            <span className="a11y-hidden">WenivEduApi</span>
          </h1>
          <nav className={styles.header_nav}>
            <ul className={styles.nav_list}>
              <li className={styles.active}>
                <Link>eduAPI 소개</Link>
              </li>
              <li>
                <Link>CRUD API 명세서</Link>
              </li>
            </ul>
            <button className={styles.lang_btn}></button>
            {/* 언어선택 */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
