import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { app, db } from "../../fireB";
import styles from "./q_mbti.module.css";

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
  const onClick = async () => {
    if (mbti === "") {
      alert("MBTI를 선택해주세요");
    } else {
      navigate("/result", { state: { user, point, pointRange, mbti } });
      const docRef = await addDoc(collection(db, "results"), {
        mbti,
        point,
        Range: pointRange,
      });
    }
  };
  const chooseMbti = (e) => {
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
