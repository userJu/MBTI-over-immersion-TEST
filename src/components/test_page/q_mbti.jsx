import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { app, db } from "../../fireB";
import styles from "./q_mbti.module.css";
import KakaoAd from "../ad/kakaoAdFooter";
import KakaoAdMobile from "../ad/kakaoAdMobile";

const QMbti = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mbti, setMbti] = useState("");
  const [pointRange, setPointRange] = useState("");
  const user = location.state.user;
  const point = location.state.point;
  useEffect(() => {
    if (point >= 10) {
      setPointRange(1);
    } else if (point > 3) {
      setPointRange(2);
    } else if (point >= -3) {
      setPointRange(3);
    } else if (point > -10) {
      setPointRange(4);
    } else {
      setPointRange(5);
    }
  }, []);

  const chooseMbtiBox = (e) => {
    if (e.target.id !== "mbtiBox") {
      setMbti(e.target.innerHTML);
      e.target.classList.add(`${styles.active}`);
    }
  };

  const onClick = async () => {
    if (mbti === "") {
      alert("MBTI를 선택해주세요");
    } else {
      navigate("/result", {
        state: { user, point, pointRange, mbti },
      });
      await updateDoc(doc(db, "userResults", "resultArr"), {
        resultArr: arrayUnion({
          mbti,
          point,
          Range: pointRange,
          id: Date.now(),
        }),
      });
    }
  };

  return (
    <section className={styles.QMbti}>
      <h1 className={styles.desc}>what is {user}'s mbti?</h1>
      <div className={styles.mbtiBox} onClick={chooseMbtiBox} id="mbtiBox">
        <div className={styles.mbti}>ISTJ</div>
        <div className={styles.mbti}>ISFJ</div>
        <div className={styles.mbti}>INFJ</div>
        <div className={styles.mbti}>INTJ</div>
        <div className={styles.mbti}>ISTP</div>
        <div className={styles.mbti}>ISFP</div>
        <div className={styles.mbti}>INFP</div>
        <div className={styles.mbti}>INTP</div>
        <div className={styles.mbti}>ESTP</div>
        <div className={styles.mbti}>ESFP</div>
        <div className={styles.mbti}>ENFP</div>
        <div className={styles.mbti}>ENTP</div>
        <div className={styles.mbti}>ESTJ</div>
        <div className={styles.mbti}>ESFJ</div>
        <div className={styles.mbti}>ENFJ</div>
        <div className={styles.mbti}>ENTJ</div>
      </div>
      <div className={`${styles.btn} ${styles.btn__primary}`} onClick={onClick}>
        결과 보기
      </div>
    </section>
  );
};

export default QMbti;
