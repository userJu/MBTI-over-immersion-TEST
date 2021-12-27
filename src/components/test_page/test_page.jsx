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
      q: "처음 만나는 사람의 mbti를 알면 관계를 형성하는 데 도움이 될 것 같다",
      // O: 3,
      // X: 0,
    },
    2: {
      q: "세상 사람들이 16가지 유형에 완벽히 들어맞는건 아니지만 mbti는 과학이다",
      // O: 2,
      // X: 0,
    },
    3: {
      q: "MBTI는 내 성격을 완벽하게 설명해준다",
      // O: 2,
      // X: 0,
    },
    4: {
      q: "주변사람들이 나보고 MBTI에 과몰입한다고 한다",
      // O: 2,
      // X: 0,
    },
    5: {
      q: "솔직히 과몰입이긴 하지만 재밌다",
      // O: 2,
      // X: 0,
    },
    6: {
      q: "각종 mbti들의 특징들을 잘 안다",
      // O: 3,
      // X: 0,
    },
    7: {
      q: "특정 MBTI 유형의 사람이 좋아하는/싫어하는 행동을 검색해본 적 있다",
      // O: 3,
      // X: 0,
    },
    8: {
      q: " 특정 mbti 사람들이 가진 특정 성격은 나랑 잘 안맞는 것 같다",
      // O: 3,
      // X: 0,
    },
    9: {
      q: "mbti별 진로, mbti별 소득 등을 찾아본 적 있다",
      // O: 2,
      // X: 0,
    },
    10: {
      q: "mbti 얘기가 지겹다/싫다",
      // O: 0,
      // X: -1,
    },
    11: {
      q: "주변에서 mbti 이야기좀 그만 했으면 좋겠다",
      // O: 0,
      // X: -2,
    },
    12: {
      q: "mbti 이야기하는 사람들 보면 바보같아 보인다",
      // O: 0,
      // X: -3,
    },
    13: {
      q: "재미로 mbti 관련된 유투브 영상들을 찾아본다",
      // O: 2,
      // X: -1,
    },
    14: {
      q: "mbti에 몰입하는 사람들이 이해된다",
      // O: 1,
      // X: -1,
    },
    15: {
      q: "mbti를 무시하는 사람은 대체로 t 인것 같다",
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
      if (e.target.innerHTML === "O") {
        console.log(1);
        setPoint((prev) => prev + 1);
      } else {
        console.log(-1);
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
        <button className={styles.btn} onClick={onClick}>
          O
        </button>
        <button className={styles.btn} onClick={onClick}>
          X
        </button>
      </div>
      {/* 모든 질문이 끝나면
      1. 바로 결과페이지로 넘어간다 (if이용해서 하면 될듯)O
      2. 결과 확인하기 버튼을 만든다 */}
    </section>
  );
};

export default TestPage;
