import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TestPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // 이걸 찾느라 고생 조금 했지 useLocation()
  //https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component
  //참고함

  // name을 받아와서 testpage를 끝낸 다음 name을 보여주어야 한다
  const onClick = () => {
    console.log("마지막 클릭");
    navigate("/mbti");
  };
  console.dir(location.state.name);
  return (
    <section>
      <div>ProgressBar</div>
      <h3>처음 만나는 사람의 mbti가 궁금하다</h3>
      {/* 문제와 문제의 점수를 객체로 가지고 와서
      buton을 클릭하면 문제에 해당하는 점수가 할당되고 다음 문제로 넘어가게 한다 
      동시에 progressbar가 진행*/}
      <div>
        <button onClick={onClick}>O</button>
        <button onClick={onClick}>X</button>
      </div>
      {/* 모든 질문이 끝나면
      1. 바로 결과페이지로 넘어간다 (if이용해서 하면 될듯)O
      2. 결과 확인하기 버튼을 만든다 */}
    </section>
  );
};

export default TestPage;
