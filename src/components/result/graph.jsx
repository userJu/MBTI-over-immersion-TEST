import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../fireB";
import styles from "./graph.module.css";
import Share from "../share/share";

const Graph = ({ mbti, pointRange }) => {
  const [testArray, setTestArray] = useState([]);
  const [openRes, setOpenRes] = useState(false);

  const getResultArrFromFireBase = async () => {
    await onSnapshot(doc(db, "userResults", "resultArr"), (doc) => {
      setTestArray((prev) => [...doc.data().resultArr]);
    });
  };
  const sameRange = testArray.filter((res) => res.Range === pointRange);
  const sameMbti = sameRange.filter((res) => res.mbti === mbti);
  const per = ((sameMbti.length / sameRange.length) * 100).toFixed(2);

  useEffect(() => {
    getResultArrFromFireBase();
  }, []);

  return (
    <section className={styles.dataContainer}>
      <h2 className={styles.testProgress}>
        지금까지 {testArray.length}명이 테스트를 진행했어요
      </h2>
      <h3 className={styles.myMbtiPer}>
        {mbti}유형의 사람의 {per}%가 같은 결과를 얻었습니다
      </h3>
      <Share />
    </section>
  );
};

export default Graph;
