import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppRouter from "../../router";
import TestPage from "../test_page/test_page";
import styles from "./home.module.css";

const Home = (props) => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/test", { state: { name: userName } });
  };
  const onChange = (e) => {
    setUserName(e.currentTarget.value);
  };
  return (
    <section className={styles.home}>
      <h1 className={styles.name}>MBTI 과몰입 테스트</h1>
      <h3 className={styles.desc}>나는 무슨 과몰입 유형일까?</h3>
      <form
        className={styles.form}
        onSubmit={onSubmit}
        action="id를 받고 설문을 시작한다"
      >
        <input
          className={styles.input}
          onChange={onChange}
          type="text"
          placeholder="이름을 적어주세요"
        />
        <button className={styles.button}>START</button>
      </form>
    </section>
  );
};

export default Home;
