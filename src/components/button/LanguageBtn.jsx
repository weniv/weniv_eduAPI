import React from "react";
import styles from "./LanguageBtn.module.css";

const LanguageBtn = () => {
  return (
    <div className={styles.lang_cont}>
      <button className={styles.lang_btn}>
        <span className="a11y-hidden">언어 선택</span>
      </button>
      <div className={styles.lang_modal}>
        <ul className={styles.lang_list}>
          <li>
            KR
            <span className="a11y-hidden">한국어로 변경</span>
          </li>
          <li>
            EN
            <span className="a11y-hidden">Change to English</span>
          </li>
          <li>
            JP
            <span className="a11y-hidden">Change to Japanese</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageBtn;
