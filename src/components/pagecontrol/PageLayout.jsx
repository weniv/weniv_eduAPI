import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../breadcrumb/Breadcrumb";
import MarkdownContent from "./MarkdownContent";
import menuData from "../../data/menu/eduAPI.json";
import Aside from "../menu/Aside";
import styles from "./PageLayout.module.css";

const PageLayout = () => {
  const location = useLocation();
  const path = location.pathname;

  const [markdownPath, setMarkdownPath] = useState("");
  const [isHeading, setIsHeading] = useState(0);

  useEffect(() => {
    let mdPath = "";
    if (path === "/eduAPI") {
      mdPath = "/_md/eduAPI.md";
    } else {
      mdPath = `/_md/${path.replace("/eduAPI", "")}.md`;
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
    }, 100); // 이거 이렇게 해도 맞는건가..?;;
  }, []);

  return (
    <div className={styles.layout}>
      <BreadCrumb
        data={path.split("/").filter(Boolean).slice(1)}
        title={title}
        subtitle={subtitle}
      />
      <div className={styles.content}>
        <h2 className="a11y-hidden">{title}</h2>
        <MarkdownContent
          markdownPath={markdownPath}
          onContentLoad={handleContentLoad}
        />
        {isHeading ? <Aside /> : null}
      </div>
    </div>
  );
};

export default PageLayout;
