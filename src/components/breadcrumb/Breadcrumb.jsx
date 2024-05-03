import React from "react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";
import menuData from "../../data/menu/eduAPI.json"; //

const Breadcrumb = ({ data }) => {

  const findSectionTitle = (sections, path) => {
    for (let section of sections) {
      if (section.link === path) {
        return section.title;
      }
      if (section.sections) {
        const found = findSectionTitle(section.sections, path);
        if (found) return found;
      }
    }
  };

  const buildBreadcrumb = () => {
    const items = [];
    let currentPath = "";

    for (const part of data) {
      currentPath += "/" + part;
      const title = findSectionTitle(menuData.sections, currentPath);
      if (title) {
        items.push({ title: title, link: currentPath });
      }
    }

    return items;
  };

  const breadcrumbItems = buildBreadcrumb();

  return (
    <nav>
      <ol className={styles.breadcrumb}>
        {breadcrumbItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
