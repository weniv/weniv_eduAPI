import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../breadcrumb/Breadcrumb";
import MarkdownContent from "./MarkdownContent";
import menuData from "../../data/menu/eduAPI.json";

const PageLayout = () => {
  const location = useLocation();
  const path = location.pathname;
  const markdownPath = `../_md${path}.md`;
  const pathArray = path.split("/").filter(Boolean);

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

  return (
    <div>
      <h2 className="a11y-hidden">{title}</h2>
      <BreadCrumb data={pathArray} title={title} subtitle={subtitle} />
      <MarkdownContent markdownPath={markdownPath} />
    </div>
  );
};

export default PageLayout;
