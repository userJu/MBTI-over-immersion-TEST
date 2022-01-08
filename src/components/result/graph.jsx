import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { app, db } from "../../fireB";
import styles from "./graph.module.css";
import Share from "../share/share";
import GraphBar from "./graphBar";

const Graph = ({ point, mbti, pointRange, result }) => {
  const [testArray, setTestArray] = useState([]); // 전체 test를 한 사람들의 모든 배열
  const [sameRangeArr, setSameRangeArr] = useState([]);
  const [sameMbtiArr, setSameMbtiArr] = useState([]);
  const [topFiveArr, setTopFiveArr] = useState([]);
  const [openRes, setOpenRes] = useState(false);
  let arr = [];
  useEffect(async (e) => {
    const querySnapshot = await getDocs(collection(db, "results"));
    querySnapshot.forEach((res) => {
      arr.push(res.data());
    });
    setTestArray(arr);
  }, []);

  const onClick = () => {
    const sameRange = testArray.filter((res) => res.Range === pointRange); // 전체 test를 한 사람 중 같은 범위에 있는 사람들의 배열
    setSameRangeArr(sameRange);
    showRank(sameRange);

    const sameMbti = sameRange.filter((res) => res.mbti === mbti); // 현재 범위에 속한 사람 중 나와 MBTI가 같은 사람들의 배열
    setSameMbtiArr(sameMbti);

    setOpenRes(true);

    // console.log(topFiveArr);
    // console.log(topFiveArr[0]); // undefined. 순서문제가 발생하고 있다.
  };

  // 많이 나온 mbti를 5위까지 보여주기 위한 함수
  const showRank = (sameRange) => {
    let result = {};
    sameRange.forEach((rank) => {
      result[rank.mbti] = (result[rank.mbti] || 0) + 1;
    });
    let sortable = [];
    for (let mbti in result) {
      sortable.push([mbti, result[mbti]]);
    }
    sortable.sort((a, b) => {
      return a[1] - b[1];
    });

    // top5개의 mbti를 보여주기 위한 함수
    const rangeLength = sameRange.length;
    const topFive = sortable.slice(sortable.length - 5);
    topFive.map((per) => {
      return (per[1] = ((per[1] / rangeLength) * 100).toFixed(2));
    });

    setTopFiveArr(topFive);
  };

  const per = ((sameMbtiArr.length / sameRangeArr.length) * 100).toFixed(2);
  return (
    <section className={styles.graph}>
      <h2 className={styles.arrow}>⇊</h2>
      <button className={styles.openBtn} onClick={onClick}>
        수치 보기
      </button>
      {openRes && (
        <div className={styles.openedBox}>
          <h2 className={styles.testProgress}>
            지금까지 {testArray.length}명이 테스트를 진행했어요
          </h2>
          <div>
            <h3 className={styles.testPer}>
              [{result}]<p className={styles.topFive}>top5</p>
              <GraphBar topFiveArr={topFiveArr} />
            </h3>
            <h3 className={styles.myMbtiPer}>
              {mbti}유형의 사람들은 {per}%에 해당됩니다
            </h3>
          </div>
          <Share />
        </div>
      )}
    </section>
  );
};

export default Graph;
