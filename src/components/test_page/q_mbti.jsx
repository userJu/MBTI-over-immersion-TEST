import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./q_mbti.module.css";

const QMbti = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mbti, setMbti] = useState("");
  const user = location.state.user;
  const point = location.state.point;
  const onClick = () => {
    navigate("/result", { state: { user, point, mbti } });
  };
  const chooseMbti = (e) => {
    console.dir(e.target.innerHTML);
    setMbti(e.target.innerHTML);
  };
  return (
    <section className={styles.QMbti}>
      <h1 className={styles.desc}>what is {user}'s mbti?</h1>
      <div className={styles.mbtiBox}>
        <div className={styles.mbti} onClick={chooseMbti}>
          ISTJ
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          ISFJ
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          INFJ
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          INTJ
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          ISTP
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          ISFP
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          INFP
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          INTP
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          ESTP
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          ESFP
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          ENFP
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          ENTP
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          ESTJ
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          ESFJ
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          ENFJ
        </div>
        <div className={styles.mbti} onClick={chooseMbti}>
          ENTJ
        </div>
      </div>
      <button className={styles.resultBtn} onClick={onClick}>
        결과 보기
      </button>
    </section>
  );
};

export default QMbti;
