import React from "react";
import styles from "./Main.module.css";
import Button from "../button/Button";
import GuideImg from "../../assets/guideImg.png";
import Ali from "../../assets/ali.png";
import Hati from "../../assets/hati.png";
import Rosy from "../../assets/rosy.png";
import Mura from "../../assets/mura.png";
import Lock from "../../assets/icon-lock.svg";
import Medal from "../../assets/icon-medal.svg";
import Drawer from "../../assets/icon-drawer.svg";
import Search from "../../assets/icon-Search.svg";
const Main = () => {
  return (
    <div className={styles.main}>
      <section className={styles.section}>
        <h2 className={styles.h2_section}>사용대상</h2>
        <p className={styles.target_description}>
          API 요청을 통한 비동기 통신을 실습! <br />
          어디서부터 어떻게 시작해야 할지 모르겠나요?
        </p>
        <h3 className={styles.title_section}>eduAPI로 쉽게 실습하세요!</h3>
        <ul className={styles.target_ul}>
          <li className={styles.target_li}>
            <img src={Ali} alt="" />
            <p className={styles.target_li_title}>웹 개발 초보자</p>
            <span>
              웹 개발 초보자로 비동기 통신의 개념을 이해하고 싶으신 분
            </span>
          </li>
          <li className={styles.target_li}>
            <img src={Hati} alt="" />
            <p className={styles.target_li_title}>웹 개발 입문자</p>
            <span>
              웹 프론트엔드에서의 API 요청과 CRUD 프로세스를 직접 실습하며
              배우고 싶으신 분
            </span>
          </li>
          <li className={styles.target_li}>
            <img src={Rosy} alt="" />
            <p className={styles.target_li_title}>프론트엔드 개발자</p>
            <span>JavaScript의 fetch API 사용법을 익히고 싶으신 분</span>
          </li>
          <li className={styles.target_li}>
            <img src={Mura} alt="" />
            <p className={styles.target_li_title}>백엔드 개발자</p>
            <span>
              프론트엔드 개발자가 어떠한 방식으로 호출하는지 빠르게 학습하고
              싶으신 분
            </span>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <div className={styles.section_guide}>
          <img src={GuideImg} alt="" className={styles.guide_img} />
          <div className={styles.guide_section}>
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
      <section className={styles.section}>
        <h2 className={styles.h2_section}>제공기능</h2>
        <h3 className={`${styles.title_section} ${styles.center}`}>
          다양한 API를 통해 <br />
          비동기 통신 실습을 지원합니다.
        </h3>
        <ul className={styles.func_ul}>
          <li className={styles.func_li}>
            <div>
              <img src={Lock} alt="" />
            </div>
            <span>회원가입,로그인,로그아웃</span>
            <p>사용자 인증 과정의 API 통신을 실습해 볼 수 있습니다.</p>
          </li>
          <li className={styles.func_li}>
            <div>
              <img src={Medal} alt="" />
            </div>
            <span>토큰을 통한 인증 방식 실습</span>
            <p>토큰을 활용한 인증 방식을 배울 수 있습니다.</p>
          </li>
          <li className={styles.func_li}>
            <div>
              <img src={Drawer} alt="" />
            </div>
            <span>사용자, 블로그, 상품, 강의 정보 관리</span>
            <p>여러 가지 종류의 CRUD 작업을 실습해 볼 수 있습니다.</p>
          </li>
          <li className={styles.func_li}>
            <div>
              <img src={Search} alt="" />
            </div>
            <span>검색 기능 제공</span>
            <p>상품 정보에 한하여 검색 기능을 제공합니다.</p>
          </li>
        </ul>
      </section>
      <div className={`${styles.api_info} ${styles.center}`}>
        <p>
          복잡하게 느껴졌던 API 통신!
          <br />
          eduAPI와 함께라면, 손쉽게 이해하고 적용할 수 있습니다.
        </p>
        <Button children={`API 명세서 보러가기`} color="white" />
      </div>
    </div>
  );
};

export default Main;
