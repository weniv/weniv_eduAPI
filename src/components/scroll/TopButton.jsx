import { useEffect, useState } from "react";
import { throttle } from "lodash";

import styles from "./TopButton.module.css";

// 화면 높이의 이 비율만큼 내려오면 버튼을 노출합니다.
const SHOW_RATIO = 0.5;

// 페이지를 일정 부분 스크롤했을 때 나타나는 상단 이동 버튼입니다.
const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = document.documentElement.scrollTop;
      setIsVisible(scrollTop > window.innerHeight * SHOW_RATIO);
    }, 100);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`${styles.topBtn} ${isVisible ? styles.show : ""}`}
      onClick={handleClick}
      // 숨어 있는 동안에는 키보드와 스크린리더가 닿지 않도록 합니다.
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 3.90002C12.2646 3.90003 12.5026 4.01427 12.6673 4.19613L18.6659 10.7946C19.0003 11.1624 18.9732 11.7316 18.6054 12.066C18.2376 12.4003 17.6684 12.3732 17.334 12.0054L12.9 7.12796V19.2C12.9 19.6971 12.497 20.1 12 20.1C11.5029 20.1 11.1 19.6971 11.1 19.2V7.12798L6.66593 12.0054C6.33157 12.3732 5.76237 12.4003 5.39458 12.066C5.02678 11.7316 4.99968 11.1624 5.33404 10.7946L11.3308 4.19813C11.4956 4.0151 11.7343 3.90002 12 3.90002C12 3.90002 12 3.90002 12 3.90002Z"></path>
      </svg>
      <span className="a11y-hidden">상단으로</span>
    </button>
  );
};

export default TopButton;
