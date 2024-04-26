import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import ScrollWrap from "./ScrollWrap";
import ChapterBtn from "../../assets/icon-down.svg";

const MenuItem = (props) => {
  const { title, link, sections } = props;
  console.log(link);
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
  if (sections && sections.length > 0) {
    return (
      <li className={styles.fold}>
        <div>
          <Link to={link}>{title}</Link>
          <button
            className={`${styles.chapterBtn} ${fold ? styles.close : null}`}
            onClick={toggleList}
          >
            <img src={ChapterBtn} alt="접기" />
          </button>
        </div>
        <ol className={fold ? styles.hide : null}>
          {sections.map((section, index) => (
            <MenuItem key={index} {...section} />
          ))}
        </ol>
      </li>
    );
  } else {
    return (
      <li>
        <Link to={link ? link : ""}>{title}</Link>
      </li>
    );
  }
};

const Nav = ({ menudata }) => {
  const { data } = menudata;
  return (
    <>
      {/* <ScrollWrap> */}
      <nav className={styles.nav}>
        <ol className={styles.menu}>
          {data.sections.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </ol>
      </nav>
      {/* </ScrollWrap> */}
    </>
  );
};

export default Nav;
