import React, { useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { app, db } from "../../fireB";

const Graph = ({ point, mbti }) => {
  console.log(mbti, point);
  useEffect(async (e) => {
    const docRef = await addDoc(collection(db, "results"), {
      mbti,
      point,
    });
    const querySnapshot = await getDocs(collection(db, "results"));
    querySnapshot.forEach((res) => {
      console.log(res.data().mbti);
      console.log(res.data().point);
    });
  }, []);

  return (
    <section>
      <h1>Graph</h1>
      <h2>동일한 결과를 보인 사람들의 평균</h2>
      {/* css로 원 만들기 */}
    </section>
  );
};

export default Graph;
