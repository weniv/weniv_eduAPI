import React from "react";
import styles from "./Notfound.module.css";
import NotfoundImg from "../assets/404.png";
import Button from "../components/button/Button";

const Notfound = () => {
  return (
    <main className={styles.notFound}>
      <img src={NotfoundImg} alt="404" />
      <h2>페이지를 찾을 수 없습니다.</h2>
      <p>
        페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.
        <br /> 웹 주소가 올바른지 확인해 주세요.
      </p>
      <div className={styles.btnGroup}>
        <Button>메인으로</Button>
        <Button color="white" goBack>
          이전 페이지
        </Button>
      </div>
    </main>
  );
};

export default Notfound;
