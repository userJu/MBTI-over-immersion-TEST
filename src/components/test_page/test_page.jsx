import React from "react";
import { useLocation } from "react-router-dom";

const TestPage = () => {
  const location = useLocation();
  // 이걸 찾느라 고생 조금 했지 useLocation()
  //https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component
  //참고함

  console.dir(location.state.name);
  return (
    <section>
      <div>ProgressBar</div>
      <h3>친구가 화났을 때 ****화풀어주는법이 궁금하다</h3>
      <div>
        <button>그렇다</button>
        <button>아니다</button>
      </div>
      <div>
        <h3>Prev</h3>
        <h3>Next</h3>
      </div>
    </section>
  );
};

export default TestPage;
