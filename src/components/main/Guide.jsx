import React from "react";
import styles from "./Guide.module.css";
import GuideImg from "../../assets/guideImg.png";
const Guide = () => {
  return (
    <section className={styles.section}>
      <div>
        <img src={GuideImg} alt="가이드이미지" className={styles.guide_img} />
        <div>
          <h2 className={styles.h2_section}>사용방법</h2>
          <h3 className={styles.title_section}>API 명세서를 확인하세요.</h3>
          <p className={styles.guide_title}>
            API 사용 방법에 대한 자세한 안내가 필요하다면 <br />
            API 명세서 페이지를 확인해 주세요.
          </p>
          <p className={styles.guide_description}>
            API 요청의 기본 구조부터 시작하여, 각 API의 엔드포인트, 필요한
            파라미터, 요청 방법, 예상되는 응답, 그리고 예시 코드까지 상세하게
            설명합니다.
          </p>
          <ul className={styles.guide_ul}>
            <li className={styles.guide_li}>
              <span>API 명세서</span> 페이지로 들어가주세요.
            </li>
            <li className={styles.guide_li}>
              개발자 도구 또는 자신의 개발 환경에서 실습 환경을 세팅해 주세요.
            </li>
            <li className={styles.guide_li}>
              간단한 요청부터 시작하여, 점차 복잡한 CRUD 작업에 도전해 보세요!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Guide;
