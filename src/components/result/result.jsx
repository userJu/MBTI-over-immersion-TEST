import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Graph from "./graph";
import styles from "./result.module.css";

const Result = (props) => {
  const location = useLocation();
  const [paper, setPaper] = useState("");
  const user = location.state.user;
  const point = location.state.point;
  const pointRange = location.state.pointRange;
  const mbti = location.state.mbti;

  const result = [
    {
      res: "과몰입 검사결과 : 물아일체의 경지",
      desc: `"내가 MBTI고 MBTI가 곧 짐이니라"`,
    },
    {
      res: "과몰입 검사결과 : 아침드라마 푹 빠진 어머니 형",
      desc: `"어휴 내가 그럴 줄 알았어 얘, 너 INFP 맞다니까~!"`,
    },
    {
      res: "과몰입 검사결과 : MBTI 알잘딱깔센",
      desc: "경증 과몰입러. 충분히 웃고 즐기고 맛보고 넘기기까지 완벽...",
    },
    {
      res: "과몰입 검사결과 : 신조어 관심 많은 부장님",
      desc: `"아! 알아요 MBTI, 그 뭐더라...INFG였나!?"`,
    },
    {
      res: "과몰입 검사결과 :  MBTI 반대론자",
      desc: `"사람을 16 가지로 나누는 것은 논리의 치명적 모순!"`,
    },
  ];
  useEffect(() => {
    setPaper(result[pointRange * 1 - 1]);
  }, []);

  return (
    <section className={styles.result}>
      <div className={styles.nameBox}>
        <h1 className={styles.name}>Result</h1>
      </div>
      <h3 className={styles.resultIntro}>
        {user}님의 MBTI 과몰입 정도는
        <hr />
      </h3>
      <h2 className={styles.resultRes}>{paper.res}</h2>
      <h3 className={styles.resultDesc}>{paper.desc}</h3>
      <Graph point={point} pointRange={pointRange} mbti={mbti} />
    </section>
  );
};

export default Result;
