import React, { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { app, db } from "../../fireB";

const Graph = ({ point, mbti, pointRange }) => {
  const [targetMbtis, setTargetMbtis] = useState([]);
  const resultArr = [];

  useEffect(async (e) => {
    const docRef = await addDoc(collection(db, "results"), {
      mbti,
      point,
      Range: pointRange,
    });
    const querySnapshot = await getDocs(collection(db, "results"));
    querySnapshot.forEach((res) => {
      if (res.data().Range === pointRange) {
        resultArr.push(res.data());
        console.log(res.data().mbti);
        // const resMbti = res.data().mbti;
        // setTargetMbtis([resMbti]);
      }
    });
  }, []);
  console.log(resultArr);

  return (
    <section>
      <h1>Graph</h1>
      <h2>동일한 결과를 보인 사람들의 평균</h2>
      {/* css로 원 만들기 */}
    </section>
  );
};

export default Graph;
