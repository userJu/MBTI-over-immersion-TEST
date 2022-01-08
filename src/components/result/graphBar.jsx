import React from "react";
import styles from "./graphBar.module.css";

const GraphBar = ({ topFiveArr }) => {
  console.log(topFiveArr);
  console.log(topFiveArr[4][1]);
  console.log(topFiveArr[3][1]);
  console.log(topFiveArr[2][1]);
  console.log(topFiveArr[1][1]);
  console.log(topFiveArr[0][1]);
  return (
    <div className={styles.resultBar}>
      <div style={{ width: `${topFiveArr[4][1]}%` }} className={styles.first}>
        {topFiveArr[4][0]}
      </div>
      <div style={{ width: `${topFiveArr[3][1]}%` }} className={styles.second}>
        {topFiveArr[3][0]}
      </div>
      <div style={{ width: `${topFiveArr[2][1]}%` }} className={styles.third}>
        {topFiveArr[2][0]}
      </div>
      <div style={{ width: `${topFiveArr[1][1]}%` }} className={styles.fourth}>
        {topFiveArr[1][0]}
      </div>
      <div style={{ width: `${topFiveArr[0][1]}%` }} className={styles.fifth}>
        {topFiveArr[0][0]}
      </div>
    </div>
  );
};

export default GraphBar;
