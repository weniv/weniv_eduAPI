import React from "react";
import { Link } from "react-router-dom";
import styles from "./SubBanner.module.css";
import banner from "../../data/subBanner.json";
import handleAnalyticsClick from "../../utils/handleAnalyticsClick";

const SubBanner = () => {
  const randomNum = Math.floor(Math.random() * banner.length);

  if (banner.length > 0) {
    const selectedBanner = banner[randomNum];
    const imagePath = require(`../../assets/${selectedBanner.src}`);

    return (
      <div className={styles.banner}>
        <Link
          onClick={(event) =>
            handleAnalyticsClick(event, selectedBanner.subText)
          }
          to={selectedBanner.url}
          style={{
            backgroundColor: selectedBanner.bgColor,
            color: selectedBanner.textColor,
            border: selectedBanner.bgColor ? "none" : undefined,
          }}
          target="_blank"
        >
          <h3>{selectedBanner.title}</h3>
          <p>{selectedBanner.subText}</p>
          <img src={imagePath} alt={selectedBanner.title} />
        </Link>
      </div>
    );
  }

  return null;
};

export default SubBanner;
