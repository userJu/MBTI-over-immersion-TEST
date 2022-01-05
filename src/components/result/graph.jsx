import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { app, db } from "../../fireB";
import styles from "./graph.module.css";
import Share from "../share/share";

const Graph = ({ point, mbti, pointRange }) => {
  const [testArray, setTestArray] = useState([]); // 전체 test를 한 사람들의 모든 배열
  const [sameRangeArr, setSameRangeArr] = useState([]);
  const [sameMbtiArr, setSameMbtiArr] = useState([]);
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

    const sameMbti = sameRange.filter((res) => res.mbti === mbti); // 현재 범위에 속한 사람 중 나와 MBTI가 같은 사람들의 배열
    setSameMbtiArr(sameMbti);

    setOpenRes(true);
  };
  const per = (sameMbtiArr.length / sameRangeArr.length) * 100;
  return (
    <section className={styles.graph}>
      <button className={styles.openBtn} onClick={onClick}>
        수치 보기
      </button>
      {openRes && (
        <div className={styles.openedBox}>
          <h2 className={styles.testProgress}>
            지금까지 {testArray.length}명이 테스트를 진행했어요
          </h2>
          <h3 className={styles.testPer}>
            {mbti}유형의 사람들은 이 결과의 {per.toFixed(2)}% 입니다
          </h3>
          <div className={styles.share}>
            <Share />
          </div>
        </div>
      )}
    </section>
  );
};

export default Graph;
