import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import ScrollWrap from "./ScrollWrap";
import ChapterBtn from "../../assets/icon-down.svg";

const MenuItem = () => {
  const [fold, setFold] = useState(false);

  // scroll 이동
  // useEffect(() => {
  //   const sideMenu = document.querySelector("#naviWrap");
  //   const currentSidebarItem = document.querySelector("#active");
  //   const scrollToTop = () => {
  //     sideMenu.scrollTo({
  //       top:
  //         currentSidebarItem &&
  //         currentSidebarItem.offsetTop - window.innerHeight / 4,
  //       behavior: "smooth",
  //     });
  //   };
  //   scrollToTop();
  // }, [path]);

  const toggleList = () => {
    setFold(!fold);
  };
  return (
    <li className={styles.fold}>
      <div>
        <Link href="./">eduAPI</Link>
        <button
          className={`${styles.chapterBtn} ${fold ? styles.close : null}`}
          onClick={toggleList}
        >
          <img src={ChapterBtn} alt="접기" />
        </button>
      </div>
      <ol className={fold ? styles.hide : null}>
        <li>
          <Link to="/">eduAPI소개</Link>
        </li>
        <li>
          <Link to="/">API안내</Link>
        </li>
      </ol>
    </li>
  );
};

const Nav = () => {
  // const { title, link, sections } = data;
  return (
    <>
      {/* <ScrollWrap> */}
      <nav className={styles.nav}>
        <ol className={styles.menu}>
          {/* {sections.map((data, index) => (
              <MenuItem key={index} {...data} />
            ))} */}
          <MenuItem />
        </ol>
      </nav>
      {/* </ScrollWrap> */}
    </>
  );
};

export default Nav;
