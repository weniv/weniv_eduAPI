import React, { useEffect, useState } from "react";
import styles from "./Toc.module.css";

const observerOption = {
  rootMargin: "-70px 0px -50% 0px",
  threshold: 1,
};

// IntersectionObserver 생성 함수
const getIntersectionObserver = (setState) => {
  let direction = "";
  let prevYposition = 0;

  // 스크롤 방향 체크
  const checkScrollDirection = (prevY) => {
    if (window.scrollY === 0 && prevY === 0) return;
    else if (window.scrollY > prevY) direction = "down";
    else direction = "up";

    prevYposition = window.scrollY;
  };

  // observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      checkScrollDirection(prevYposition);
      if (
        (direction === "down" && !entry.isIntersecting) ||
        (direction === "up" && entry.isIntersecting)
      ) {
        setState(entry.target.id);
      }
    });
  }, observerOption);
  return observer;
};

// 스크롤 위치 조정 함수
const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -70; // header의 높이에 따라 이 값을 조정
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

// Toc 컴포넌트
export default function Toc({ toggleMenu }) {
  const [currentId, setCurrentId] = useState("");
  const [headingEls, setHeadingEls] = useState([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const headingElements = Array.from(document.querySelectorAll("h4, h5, h6"));
    const result = [];

    let h4Obj = null;
    let h5Obj = null;

    headingElements.map((heading) => {
      observer.observe(heading);
      const title = heading.textContent;
      const tagName = heading.tagName.toLowerCase();
      const href = title;

      heading.id = href;
      if (tagName === "h4") {
        h4Obj = { title, href, section: [] };
        result.push(h4Obj);
      } else if (tagName === "h5") {
        h5Obj = { title, href, section: [] };
        h4Obj.section.push(h5Obj);
      } else if (tagName === "h6") {
        h5Obj.section.push({ title, href, section: [] });
      }
    });

    setHeadingEls(result);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const menu = document.querySelector(`.${styles.wrap}`);
    const currentItem = menu.querySelector(`.${styles.active}`);

    const scrollToTop = () => {
      menu.scrollTo({
        top: currentItem && currentItem.offsetTop - menu.scrollHeight / 4,
        behavior: "smooth",
      });
    };
    scrollToTop();
  }, [currentId]);

  // ToC 렌더링 함수
  const renderToc = (sections) => {
    return (
      <ol className={styles.toc}>
        {sections.map((section, index) => (
          <li key={index}>
            <a
              href={`#${section.title}`}
              className={currentId === section.title ? styles.active : ""}
              onClick={(e) => {
                e.preventDefault(); // 기본 링크 동작을 막음
                toggleMenu && toggleMenu();
                setCurrentId(section.title);
                const el = document.getElementById(section.title);
                scrollWithOffset(el); // 스크롤 위치 조정 함수 호출
              }}
            >
              {section.title}
            </a>
            {section.section.length > 0 && renderToc(section.section)}
          </li>
        ))}
      </ol>
    );
  };

  return <div className={styles.wrap}>{renderToc(headingEls)}</div>;
}
