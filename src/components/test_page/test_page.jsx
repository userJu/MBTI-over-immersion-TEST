import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./test_page.module.css";

const TestPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [currentQ, setCurrentQ] = useState(1);
  const [point, setPoint] = useState(0);
  const questionBox = {
    1: {
      q: "처음 만나는 사람의 mbti를 아는 것은",
      T: "관계를 형성하는 데 도움이 될 것 같다",
      F: "딱히 도움이 될 것 같지는 않다",
      // O: 3,
      // X: 0,
    },
    2: {
      q: "세상 사람들이 16가지 유형에 완벽히 들어맞는건...",
      T: "아니지만 MBTI는 과학이다",
      F: "아니고 간단한 심리테스트 같은 종류의 것이다",
      // O: 2,
      // X: 0,
    },
    3: {
      q: "MBTI는 내 성격을",
      T: "잘 설명해주는 것 같다",
      F: "설명해주지 못하는 것 같다",
      // O: 2,
      // X: 0,
    },
    4: {
      q: "MBTI와 관련된 성격 유형 검사들을",
      T: "찾아서 해보는 편이다",
      F: "관심있게 해보지는 않는다",
      // O: 2,
      // X: 0,
    },
    5: {
      q: "타인의 MBTI를 예측해보면",
      T: "일반적으로 잘 맞는 편이다",
      F: "자주 틀리는 편이다",
      // O: 2,
      // X: 0,
    },
    6: {
      q: "각종 mbti가 가진 성격의 특성들을",
      T: "잘 알고 있다",
      F: "잘 모르고 있다",
      // O: 3,
      // X: 0,
    },
    7: {
      q: "특정 MBTI 유형의 사람이 좋아하는/싫어하는 행동이",
      T: "궁금했던 적이 있다",
      F: "궁금했던 적은 없다",
      // O: 3,
      // X: 0,
    },
    8: {
      q: "특정 mbti 사람들이 가진 성격 유형은(에)",
      T: "나랑 잘 맞지 않는 것 같다",
      F: " 대해서생각해본 적 없다",
      // O: 3,
      // X: 0,
    },
    9: {
      q: "mbti별 진로, mbti별 소득 등이",
      T: "궁금하다",
      F: "전혀 궁금하지 않다",
      // O: 2,
      // X: 0,
    },
    10: {
      q: "MBTI 성격 유형에 대해 사람들이 말하는걸 들어보면",
      T: "'헉 완전 나(혹은 걔)다..!' 라고 생각한다",
      F: "'저 유형은 아닌데.. 사람은 다 저러지 않나..?'라고 생각한다",
      // O: 0,
      // X: -1,
    },
    11: {
      q: "주변에서 mbti 이야기를",
      T: "많이 하긴 하지만 재미있다",
      F: "너무 많이 해서 지겹다",
      // O: 0,
      // X: -2,
    },
    12: {
      q: "J인 친구가 즉흥적이고 계획없는 모습을 보이면",
      T: "'야 너 J 아니야' 등등의 말을 장난스레 던진다",
      F: "친구의 MBTI를 모르거나 MBTI J가 무슨 의미인지 잘 모른다",
      // O: 0,
      // X: -3,
    },
    13: {
      q: "mbti와 관련된 영상이나 글을",
      T: "자주 찾아보는 편이다",
      F: "관심있게 보지는 않는다",
      // O: 2,
      // X: -1,
    },
    14: {
      q: "내 MBTI 유형이 가진 성격 특징처럼",
      T: "보이고 싶다",
      F: "보이든 말든 상관없다",
      // O: 1,
      // X: -1,
    },
    15: {
      q: "mbti를 무시하는 사람을 보면",
      T: "특정 MBTI 성향을 가졌을 가능성이 높다고 생각한다",
      F: "그 의견에 대체로 동의하는 편이다",
      // O: 1,
      // X: -1,
    },
  };
  // 이걸 찾느라 고생 조금 했지 useLocation()
  //https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component
  //참고함

  // name을 받아와서 testpage를 끝낸 다음 name을 보여주어야 한다
  const onClick = (e) => {
    setCurrentQ((prev) => prev + 1);
    if (currentQ < 15) {
      if (e.target.value === "O") {
        setPoint((prev) => prev + 1);
      } else {
        setPoint((prev) => prev - 1);
      }
    } else {
      navigate("/mbti", { state: { user, point } });
    }
  };
  console.log(point);
  useEffect(() => {
    setUser(location.state.name);
  }, []);

  return (
    <section className={styles.test}>
      <div className={styles.progress}>ProgressBar {currentQ}/15</div>
      <div className={styles.questionBox}>
        {currentQ <= 15 ? (
          <h3 className={styles.question}>{questionBox[currentQ].q}</h3>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      {/* 문제와 문제의 점수를 객체로 가지고 와서
      buton을 클릭하면 문제에 해당하는 점수가 할당되고 다음 문제로 넘어가게 한다 
      동시에 progressbar가 진행*/}
      <div className={styles.btns}>
        <button className={styles.btn} onClick={onClick} value={"O"}>
          {questionBox[currentQ].T}
        </button>
        <button className={styles.btn} onClick={onClick} value={"X"}>
          {questionBox[currentQ].F}
        </button>
      </div>
      {/* 모든 질문이 끝나면
      1. 바로 결과페이지로 넘어간다 (if이용해서 하면 될듯)O
      2. 결과 확인하기 버튼을 만든다 */}
    </section>
  );
};

export default TestPage;
