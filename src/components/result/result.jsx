import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./result.module.css";

const Result = (props) => {
  const location = useLocation();
  const user = location.state.user;
  const point = location.state.point;
  const mbti = location.state.mbti;
  return (
    <section className={styles.result}>
      <h1 className={styles.name}>Result</h1>
      <h3 className={styles.resultIntro}>
        {user}님의 MBTI 과몰입 정도는
        <br />
        별다섯
      </h3>
      <h2 className={styles.resultStage}>
        찐 과몰입러. MBTI는 이제 나와 한 몸으로 간주되며 MBTI를 모욕하는 것은
        나를 모욕하는 것이다
      </h2>
      <h3 className={styles.resultPoint}>{point}</h3>
    </section>
  );
};

export default Result;

// 단계별로
// 1. 찐 과몰입러. MBTI없었으면 어떻게 살았으려구요...
// 2. 약간 과몰입러. MBTI는 재미있지만
// 3. 아~그런게 있지. 해보라는 테스트 해보는 편. 재미있진 하지만 한번 해보고 잊는 편
// 4. MBTI
