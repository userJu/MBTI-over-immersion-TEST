import React, { useEffect } from "react";
import styles from "./share.module.css";
import twitter from "../../images/twitterBtn.png";
import kakao from "../../images/kakaoBtn.jpg";
import link from "../../images/linkBtn.jpg";
import { useNavigate } from "react-router-dom";

const Share = (props) => {
  const kakaoBtnClick = () => {
    window.Kakao.Link.sendCustom({
      templateId: 68225,
    });
  };

  const linkBtnClick = async () => {
    try {
      await navigator.clipboard.writeText(
        "https://userju.github.io/MBTI-over-immersion-TEST/"
      );
      alert("복사되었습니다");
    } catch (error) {
      alert("복사 실패");
    }
  };

  const twitterBtnClick = () => {
    const sendText = "MBTI 과몰입 테스트";
    const sendUrl = "https://userju.github.io/MBTI-over-immersion-TEST/";
    window.open(
      `https://twitter.com/intent/tweet?text=${sendText}&url=${sendUrl}`
    );
  };
  const navigate = useNavigate();
  const returnBtnClick = () => {
    navigate("/");
  };

  return (
    <section className={styles.share}>
      <h1 className={styles.name}>share link!</h1>
      <h3 className={styles.desc}>공유할수록 수치는 정확해집니다</h3>
      <div className={styles.lineIconContainer}>
        <div className={styles.icon_kakao} onClick={kakaoBtnClick}>
          <img src={kakao} />
        </div>
        <div className={styles.icon_link} onClick={linkBtnClick}>
          <img src={link} />
        </div>
        <div className={styles.icon_twitter} onClick={twitterBtnClick}>
          <img src={twitter} />
        </div>
      </div>

      <div
        className={`${styles.btn} ${styles.btn__primary}`}
        onClick={returnBtnClick}
      >
        다시 시작하기
      </div>
    </section>
  );
};

export default Share;
