import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { app } from "../../fireB";

const Graph = async (props) => {
  await setDoc(doc("mbti-over-immersion-test", "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  });
  return (
    <section>
      <h2>전체 결과 그래프</h2>
    </section>
  );
};

export default Graph;
