import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { app, db } from "../../fireB";

const Graph = ({ point, mbti, pointRange }) => {
  const [targetMbtis, setTargetMbtis] = useState([]);
  const [count, setCount] = useState(0); // 전체 게임을 한 사람 수
  const [average, setAverage] = useState(0);
  const [rangeCount, setRangeCount] = useState(0); // 현재 범위에 속한 사람 수
  const [myMbtiCount, setMyMbtiCount] = useState(0);
  // let counting = 0;
  let rangeCounting = 0;
  let myMbtiCounting = 0; // 현재 범위에 속한 사람 중 나와 MBTI가 같은 사람의 수
  let arr = [];
  useEffect(async (e) => {
    const querySnapshot = await getDocs(collection(db, "results"));
    querySnapshot.forEach((res) => {
      // forEach가 하나하나를 다 돌면서 배열을 보여주기 때문에 너무 비효율적.
      // counting++;
      // setCount(counting);
      arr.push(res.data());

      // if (res.data().Range === pointRange) {
      //   rangeCounting++;
      //   setRangeCount(rangeCounting);
      //   if (res.data().mbti === mbti) {
      //     myMbtiCounting++;
      //     setMyMbtiCount(myMbtiCounting);
      //   }
      // }
      console.log(`MBTI 과몰입 테스트를 한 사람들 : ${count}`);

      setAverage((myMbtiCount / rangeCount) * 100);
    });
    console.log(arr);
    console.log(arr.length);
  }, []);

  return (
    <section>
      <h1>Graph</h1>
      <h2>지금까지 {count}명이 테스트를 진행했어요</h2>
      <h4>
        {mbti}유형의 사람들은 이 결과의 {average.toFixed(2)}% 입니다
      </h4>
    </section>
  );
};

export default Graph;
