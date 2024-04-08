import React from "react";
import styles from "./Target.module.css";
import Ali from "../../assets/ali.png";
import Hati from "../../assets/hati.png";
import Rosy from "../../assets/rosy.png";
import Mura from "../../assets/mura.png";

const Target = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.target_h2}>사용대상</h2>
      <p className={styles.target_description}>
        API 요청을 통한 비동기 통신을 실습! <br />
        어디서부터 어떻게 시작해야 할지 모르겠나요?
      </p>
      <h3 className={styles.title_section}>eduAPI로 쉽게 실습하세요!</h3>
      <ul className={styles.target_ul}>
        <li className={styles.target_li}>
          <img src={Ali} alt="타겟이미지" />
          <p className={styles.target_li_title}>웹 개발 초보자</p>
          <span>웹 개발 초보자로 비동기 통신의 개념을 이해하고 싶으신 분</span>
        </li>
        <li className={styles.target_li}>
          <img src={Hati} alt="타겟이미지" />
          <p className={styles.target_li_title}>웹 개발 입문자</p>
          <span>
            웹 프론트엔드에서의 API 요청과 CRUD 프로세스를 직접 실습하며 배우고
            싶으신 분
          </span>
        </li>
        <li className={styles.target_li}>
          <img src={Rosy} alt="타겟이미지" />
          <p className={styles.target_li_title}>프론트엔드 개발자</p>
          <span>JavaScript의 fetch API 사용법을 익히고 싶으신 분</span>
        </li>
        <li className={styles.target_li}>
          <img src={Mura} alt="타겟이미지" />
          <p className={styles.target_li_title}>백엔드 개발자</p>
          <span>
            프론트엔드 개발자가 어떠한 방식으로 호출하는지 빠르게 학습하고
            싶으신 분
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Target;
