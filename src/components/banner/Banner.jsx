import React from "react";
import styles from "./Banner.module.css";
import BannerImg from "../../assets/image 1.png";
import Button from "../button/Button";
const Banner = () => {
  return (
    <section>
      <div className={styles.banner}>
        <div>
          <h2>
            학습용 CRUD API, <span>eduAPI</span>
          </h2>
          <p>eduAPI와 함께 빠르고, 쉽게 비동기 통신 실습을 경험해 보세요!</p>
          <Button children={`API 명세서 보러가기`} />
        </div>
        <img src={BannerImg} alt="" className={styles.img} />
      </div>
    </section>
  );
};

export default Banner;
