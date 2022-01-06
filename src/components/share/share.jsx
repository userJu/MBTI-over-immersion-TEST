import React, { useEffect } from "react";
import styles from "./share.module.css";

const Share = (props) => {
  console.dir(window.Kakao);
  console.log(window.Kakao.isInitialized());
  // 여기서부터는 그냥 Kakao가 아니라 window.Kakao가 되어야 한다

  // useEffect(() => {
  //   kakaoBtnClick();
  // }, []);

  // container: "#kakaoLinkBtn", // id를 가지고 온다 #로
  // objectType: "feed",
  // content: {
  //   title: "MBTI 과몰입 테스트",
  //   description: "#MBTI #Mbti과몰입 #과몰입테스트 #mbti테스트",
  //   imageUrl: "imageurl",
  //   link: {
  //     mobileWebUrl: "https://userju.github.io/MBTI-over-immersion-TEST/",
  //     webUrl: "https://userju.github.io/MBTI-over-immersion-TEST/",
  //   },
  // },
  console.dir(window.location.href);
  const kakaoBtnClick = () => {
    window.Kakao.Link.sendCustom({
      templateId: 68225,
    });
  };
  console.dir(window.Kakao.Link.sendCustom);

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
  return (
    <section className={styles.share}>
      <h1 className={styles.name}>share link!</h1>
      <h3 className={styles.desc}>공유할수록 수치는 정확해집니다</h3>
      <ul className={styles.linkBox}>
        <button onClick={kakaoBtnClick}>
          <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
        </button>
        <button onClick={linkBtnClick}>link</button>
        <button onClick={twitterBtnClick}>twitter</button>
      </ul>
    </section>
  );
};

export default Share;
