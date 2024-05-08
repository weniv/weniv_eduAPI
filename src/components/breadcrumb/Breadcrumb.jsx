import React from "react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";

const Breadcrumb = ({ data, title, subtitle }) => {

  const buildBreadcrumb = () => {
    const items = [];
    let currentPath = "";

    for (let index = 0; index < data.length; index++) {
      const part = data[index];
      currentPath += "/" + part;
      const isTitle = index === 0;
      items.push({
        title: isTitle ? title : subtitle,
        link: currentPath,
      });
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
