import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestPage from "../test_page/test_page";

const Home = (props) => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/test", { state: { name: userName, id: 1 } });
  };
  const onChange = (e) => {
    setUserName(e.currentTarget.value);
  };
  return (
    <section>
      <h1>MBTI 과몰입 테스트</h1>
      <h2>나는 무슨 과몰입 유형일까?</h2>
      <form onSubmit={onSubmit} action="id를 받고 설문을 시작한다">
        <input onChange={onChange} type="text" />
        <button>START</button>
      </form>
    </section>
  );
};

export default Home;
