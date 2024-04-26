import React from "react";
import styles from "./Breadcrumb.module.css";
import { Link } from "react-router-dom";
const Breadcrumb = () => {
  return (
    <ol className={styles.breadcrumb}>
      <li>
        <Link href="/">eduAPI</Link>
      </li>
    </ol>
  );
};

export default Breadcrumb;
