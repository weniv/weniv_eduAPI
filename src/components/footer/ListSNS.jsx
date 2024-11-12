import React from "react";
import styles from "./ListSNS.module.css";
import IconHome from "../../assets/icon-Home.svg";
import IconInflearn from "../../assets/icon-infrean.svg";
import IconYoutube from "../../assets/icon-youtube.svg";
import IconBlog from "../../assets/icon-blog.svg";
import IconInsta from "../../assets/icon-insta.svg";
import handleAnalyticsClick from "../../utils/handleAnalyticsClick";

const ListSNS = () => {
  const SNSList = [
    {
      text: "위니브 메인 페이지",
      icon: IconHome,
      href: "https://weniv.co.kr/",
      target: "_blank",
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
      icon: IconBlog,
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
          <a
            className={styles.snsBtn}
            href={sns.href}
            target={sns.target}
            onClick={(event) =>
              index === 0
                ? null
                : handleAnalyticsClick(event, `푸터: ${sns.text}`)
            }
          >
            <img src={sns.icon} alt={sns.text} />
            <span className="a11y-hidden">{sns.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListSNS;
