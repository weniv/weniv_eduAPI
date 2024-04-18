import React from "react";
import styles from "./ListSNS.module.css";
import IconHome from "../../assets/icon-Home.svg";
import IconInflearn from "../../assets/icon-infrean.svg";
import IconYoutube from "../../assets/icon-youtube.svg";
import IconNaver from "../../assets/icon-naver.svg";
import IconInsta from "../../assets/icon-insta.svg";

const ListSNS = () => {
  const SNSList = [
    {
      text: "메인",
      icon: IconHome,
      href: "/",
      target: null,
    },
    {
      text: "인프런",
      icon: IconInflearn,
      href: "https://www.inflearn.com/users/170213/@jejucoding",
      target: "_blank",
    },
    {
      text: "유튜브",
      icon: IconYoutube,
      href: "https://www.youtube.com/@jejucodingcamp",
      target: "_blank",
    },
    {
      text: "네이버 블로그",
      icon: IconNaver,
      href: "https://blog.naver.com/paul-lab",
      target: "_blank",
    },
    {
      text: "인스타그램",
      icon: IconInsta,
      href: "https://www.instagram.com/weniv_official/",
      target: "_blank",
    },
  ];

  return (
    <ul className={styles.snsBtnlist}>
      {SNSList.map((sns, index) => (
        <li key={index}>
          <a className={styles.snsBtn} href={sns.href} target={sns.target}>
            <img src={sns.icon} alt={sns.text} />
            <span className="a11y-hidden">{sns.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListSNS;
