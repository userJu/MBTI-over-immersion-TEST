import React from "react";
import styles from "./share.module.css";

const Share = (props) => {
  return (
    <section className={styles.share}>
      <h1 className={styles.name}>share link!</h1>
      <h3 className={styles.desc}>공유할수록 수치는 정확해집니다</h3>
      <ul className={styles.linkBox}>
        <li>Kakao</li>
        <li>link</li>
        <li>instagram</li>
        <li>twitter</li>
      </ul>
    </section>
  );
};

export default Share;
