import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Graph from "./graph";
import styles from "./result.module.css";

const Result = (props) => {
  const location = useLocation();
  const [paper, setPaper] = useState("");
  const user = location.state.user;
  const point = location.state.point;
  const pointRange = location.state.pointRange;
  const mbti = location.state.mbti;

  const result = [
    {
      res: "물아일체의 경지",
      desc: `"오늘부로 MBTI에 대한 지지를 철회한다. 이 시간부로 지지관계에서 벗어나 MBTI와 나는 한몸으로 일체가 된다. MBTI에 대한 공격은 나에 대한 공격으로 간주한다"`,
      description: `다른 성격유형 검사는 몰라도 자신과 주변 사람들을 볼 때 MBTI는 정말 정확하다고 생각한다.
다른 사람들을 만날 때 MBTI만 보고 판단하지는 않지만 자신도 모르게 MBTI와 상대방의 행동을 긴밀히 연결지어 생각하기도 한다.
연애인이나 캐릭터를 보고 MBTI를 유추하기도 한다.

인간관계에 MBTI가 미치는 영향이 다른 유형들보다 크다.

좋아하는 MBTI유형과 싫어하는 MBTI 유형도 확고하다. 당연하다 이들은 MBTI와 한 몸이다. 

단톡에서 여러가지 심리테스트나 MBTI 검사 링크들을 어디에선가 가져와서 뿌리고 친구들의 결과까지 꼼꼼하게 읽어본다.
친구로 지내면 성격 분석을 당할 수 있다.(하지만 거의 정확하다.)

MBTI에 비판적인 사람들이 봤을 때는 심한 과몰입으로 보일 수도 있다.      
그러나 경지에 다다른 이들은 MBTI 성격유형과 주변 사례, 인터넷에서 발견한 많은 사례들을 접목시켜 깊이있는 해석을 하기도 한다.
`,
    },
    {
      res: "아침드라마 푹 빠진 어머니 형",
      desc: `"어휴 내가 그럴 줄 알았어 얘, 너 INFP 맞다니까~!"`,
      description: `MBTI 검사를 100% 신뢰하지는 않지만 검사 결과는 다른 테스트들에 비해 비교적 정확하다고 생각한다.
주변인들과 MBTI 이야기를 하는 것을 매우 좋아한다. MBTI에 대한 이해를 바탕으로 타인의 MBTI를 잘 알아맞춘다.

친해지고 싶은 사람의 MBTI가 궁금했던 귀여운 경험이 있다.
MBTI에 따라서 인간관계를 유지하거나 끊지는 않지만 상대방의 행동을 MBTI를 기준으로 두고 해석한 후 확대해석할 위험성이 있다.

심리테스트나 MBTI 검사들을 즐겨 하는 편.
재미있는 검사는 절대 빠지지 않고 한다.

MBTI에 비판적인 사람들이 봤을 때는 심한 과몰입으로 보일 수도 있다.
그러나 이들은 MBTI에 대한 이해를 바탕으로 성격 유형에 우열이 있는 것이 아님을 잘 알기에 비교적 건전하고 재미있는 몰입을 한다.
      `,
    },
    {
      res: "MBTI 알잘딱깔센",
      desc: "경증 과몰입러. 충분히 웃고 즐기고 맛보고 넘기기까지 완벽...",
      description: `본인의 MBTI가 맞다고 생각하고 타인들도 잘 들어맞는다고 생각한다. 
필을 받으면 MBTI에 관련된 글이나 영상들을 열심히 찾아보지만 빠르게 식는다. 
하지만 친구들이 보내준 심리테스트나 MBTI 테스트는 거의 해보는 편.

MBTI에 큰 관심은 없지만 좋아하는 사람 / 싫어하는 사람의 MBTI가 가끔씩 궁금해진다.
MBTI 테스트를 즐기고 다른 사람들의 MBTI를 궁금해하기는 하지만 
E/I의 차이는 알아도 N/S의 차이를 잘 모르는 경우가 많은 이 유형은 다른 MBTI 과몰입러들에 비해 MBTI에 대한 지식이 비교적 얕다.

그러나 MBTI에 대한 지식이 깊지 않아 상대적으로 담백한 면이 있어 MBTI를 적당히 즐기고 넘길 수 있다는 장점이 있다.
      `,
    },
    {
      res: "신조어 관심 많은 부장님",
      desc: `"아! 알아요 MBTI, 그 뭐더라...INFG였나!?"`,
      description: `MBTI에 관심은 있지만 아주 단편적이다.
주변에서 한번 MBTI 검사를 해보라고 해서 알게 된 편.
MBTI가 무엇인지는 대충 알지만 관심이 없다.
MBTI에 사람들이 왜 이렇게 열광하는지 가슴으로 이해할 수는 없지만 머리로는 대충 이해하고 있다.

타인의 MBTI에 별 관심이 없고 본인의 MBTI에도 별 관심이 없다. 가끔 주변에서 MBTI를 물어보면 '어... 뭐더라?' 가 먼저 나온다.
그래도 누군가가 질문하면 다시 검사를 해보기도 한다. 
친구들이 보내주는 심리테스트나 MBTI 테스트도 하라면 하지만 웬만해서는 이따가 해야지 생각해놓고 잘 하지 않는다.

MBTI가 유행하는 현상이 약간은 신기하게 느껴진다. 그러나 거부감을 느끼지는 않는다.
      `,
    },
    {
      res: "MBTI 반대론자",
      desc: `"사람을 16 가지 유형으로 나누는 것은 불가능!"`,
      description: `MBTI에 관심이 없을 뿐더러 MBTI가 유행하는게 썩 마음에 들진 않는다.
MBTI에 사람들이 왜 이렇게 열광하는지도 모르겠고 도리어 싫어할 수도 있다.

타인의 MBTI와 본인의 MBTI에 관심을 가지지 않으며 대화의 흐름이 MBTI로 흘러가는 것을 즐기지 않는 편이다.
과몰입하는 유형들을 신기하게 생각한다.

MBTI는 조금 더 정확한 혈액형 성격검사라고 생각하는 경우도 있다. 
      `,
    },
  ];
  useEffect(() => {
    setPaper(result[pointRange * 1 - 1]);
  }, []);

  return (
    <section className={styles.result}>
      <div className={styles.nameBox}>
        <h1 className={styles.name}>Result</h1>
      </div>
      <h3 className={styles.resultIntro}>
        {user}님의 MBTI 과몰입 정도는
        <hr />
      </h3>
      <h2 className={styles.resultRes}>과몰입 검사결과 : {paper.res}</h2>
      <h3 className={styles.resultDesc}>{paper.desc}</h3>
      <h3 className={styles.resultDescription}>{paper.description}</h3>

      <Graph
        point={point}
        pointRange={pointRange}
        mbti={mbti}
        result={paper.res}
      />
    </section>
  );
};

export default Result;
