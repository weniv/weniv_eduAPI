import { useState } from "react";
import styles from "./AsideMobile.module.css";
import Toggle from "../../assets/icon-down.svg";
import Toc from "./Toc";

const AsideMobile = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  // const menuRef = useRef(null);
  // // const lastBtn = useRef(null);

  // const handleFocusFirst = (e) => {
  //   if (!e.shiftKey && e.key === "Tab") {
  //     e.preventDefault();

  //     const firstItem = menuRef.current.querySelector("a");
  //     firstItem.focus();
  //   }
  // };
  const toggleMenu = () => {
    if (isMenuShow) {
      // 닫힘
      setIsMenuShow(!isMenuShow); // 메뉴 보이기 상태를 토글
      localStorage.setItem("toc", false);
    } else {
      // 열림
      setIsMenuShow(!isMenuShow); // 메뉴 보이기 상태를 토글
      localStorage.removeItem("toc", false);
    }
    setIsToggled(!isToggled);
  };
  return (
    <div className={styles.toc}>
      <div className={styles.tocWrap}>
        {!isMenuShow ? (
          <>
            <button onClick={toggleMenu} className={styles.tocBar}>
              목차
              <img src={Toggle} alt="" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={toggleMenu}
              className={`${styles.tocBar} ${isMenuShow ? styles.opened : ""}`}
            >
              목차
              <img src={Toggle} alt="" />
            </button>
            <div className={styles.positionWrap}>
              <Toc toggleMenu={toggleMenu} />
            </div>
            {/* <button
              type="button"
              className={styles.tocCloseBtn}
              onClick={toggleMenu}
              onKeyDown={handleFocusFirst}
              ref={lastBtn}
            >
              <img src={Toggle} alt="" />
              <span className="a11y-hidden">목차 닫기</span>
            </button> */}
          </>
        )}
      </div>
    </div>
  );
};

export default AsideMobile;
