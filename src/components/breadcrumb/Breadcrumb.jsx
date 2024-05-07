import React from "react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";

const Breadcrumb = ({ data, title, subtitle }) => {
  console.log(data, title, subtitle);

  const buildBreadcrumb = () => {
    const items = [];
    let currentPath = "";

    for (let index = 0; index < data.length; index++) {
      const part = data[index];
      currentPath += "/" + part;
      const isTitle = index === 0; // 첫 번째 아이템이면 true, 그 외에는 false
      items.push({
        title: isTitle ? title : subtitle, // 첫 번째 아이템에는 'title'을 사용하고, 그 외에는 'subtitle' 사용
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
