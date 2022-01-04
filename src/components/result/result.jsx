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
      res: "MBTI 검사결과: MBTI",
      desc: "MBTI는 이제 나와 한 몸으로 간주되며 MBTI를 모욕하는 것은 나를 모욕하는 것이다",
    },
    {
      res: "MBTI 검사결과: Wln",
      desc: "중증 과몰입러. 처음 만나면 일단 MBTI를 물어보고 시작하며 본인과 주변사람들을 봤을 때 MBTI는 거의 맞다고 생각한다",
    },
    {
      res: "MBTI 검사결과: MILD",
      desc: "경증 과몰입러. 적당히 재미있게 즐길 거리로 MBTI를 이용한다",
    },
    {
      res: "MBTI 검사결과: SOSO",
      desc: "MBTI이야기는 가끔 하면 재미있고 안해도 무방. 타인의 MBTI가 궁금하지도 않다",
    },
    {
      res: "MBTI 검사결과: 정상",
      desc: `"응~ 결과 정상이라고 나왔어~" MBTI에 관심도 없고 가끔씩은 MBTI에 빠져있는 사람들이 한심해 보인다`,
    },
  ];
  useEffect(() => {
    setPaper(result[pointRange * 1 - 1]);
  }, []);

  return (
    <section className={styles.result}>
      <h1 className={styles.name}>Result</h1>
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
