import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../breadcrumb/Breadcrumb";
import MarkdownContent from "./MarkdownContent";
import menuData from "../../data/menu/eduAPI.json";
import Aside from "../menu/Aside";
import AsideMobile from "../menu/AsideMobile";
import styles from "./PageLayout.module.css";
import Side from "../menu/Side";

// 메인페이지 전체 레이아웃 구성

const PageLayout = () => {
  const location = useLocation();
  const path = location.pathname;

  const [markdownPath, setMarkdownPath] = useState("");
  const [isHeading, setIsHeading] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // url에 따라 markdown 파일 경로 설정
  useEffect(() => {
    let mdPath = "";
    if (path === "/eduAPI") {
      mdPath = `${process.env.PUBLIC_URL}/md/eduAPI.md`;
    } else {
      mdPath = `${process.env.PUBLIC_URL}/md${path.replace("/eduAPI", "")}.md`;
    }
    setMarkdownPath(mdPath);
  }, [path]);

  const getTitleAndSubtitle = (menuData, path) => {
    if (menuData.link === path) {
      return { title: menuData.title, subtitle: "" };
    }

    for (const section of menuData.sections) {
      if (section.link === path) {
        return { title: section.title, subtitle: "" };
      }
      if (section.sections) {
        for (const subSection of section.sections) {
          if (subSection.link === path) {
            return { title: section.title, subtitle: subSection.title };
          }
        }
      }
    }
    return { title: "", subtitle: "" };
  };

  const { title, subtitle } = getTitleAndSubtitle(menuData, path);

  const handleContentLoad = useCallback(() => {
    setTimeout(() => {
      const headingElements = Array.from(
        document.querySelectorAll("h4, h5, h6")
      );
      setIsHeading(headingElements.length);
    }, 100);
  }, []);

  return (
    <div className={styles.sub}>
      <Side data={menuData} />
      <div className={styles.layout}>
        {viewportWidth <= 1024 ? <AsideMobile /> : null}
        {viewportWidth > 1024 ? (
          <BreadCrumb
            data={path.split("/").filter(Boolean).slice(1)}
            title={title}
            subtitle={subtitle}
          />
        ) : null}
        <div className={styles.content}>
          <h2 className="a11y-hidden">{title}</h2>
          <MarkdownContent
            markdownPath={markdownPath}
            onContentLoad={handleContentLoad}
          />
          {viewportWidth > 1024 && isHeading ? <Aside /> : null}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
