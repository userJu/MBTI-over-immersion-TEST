import React, { useEffect, useState } from "react";
import styles from "./graphBar.module.css";

const GraphBar = ({ topFiveArr }) => {
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (topFiveArr.length >= 5) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, []);
  return (
    <div className={styles.resultBar}>
      {isValid ? (
        <>
          <div
            style={{ width: `${topFiveArr[4][1]}%` }}
            className={styles.first}
          >
            {topFiveArr[4][0]}
          </div>
          <div
            style={{ width: `${topFiveArr[3][1]}%` }}
            className={styles.second}
          >
            {topFiveArr[3][0]}
          </div>
          <div
            style={{ width: `${topFiveArr[2][1]}%` }}
            className={styles.third}
          >
            {topFiveArr[2][0]}
          </div>
          <div
            style={{ width: `${topFiveArr[1][1]}%` }}
            className={styles.fourth}
          >
            {topFiveArr[1][0]}
          </div>
          <div
            style={{ width: `${topFiveArr[0][1]}%` }}
            className={styles.fifth}
          >
            {topFiveArr[0][0]}
          </div>
        </>
      ) : (
        <h3 className={styles.noValid}>
          유효한 수치가 등록되지 않았습니다. 정확한 수치를 위해서 많이
          공유해주세요
        </h3>
      )}
    </div>
  );
};

export default GraphBar;
