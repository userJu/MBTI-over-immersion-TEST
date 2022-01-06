import React from "react";
import styles from "./App.module.css";
import KakaoAd from "./components/ad/kakaoAdFooter";
import KakaoAdMobile from "./components/ad/kakaoAdMobile";
import Home from "./components/home/home";
import AppRouter from "./router";

function App() {
  return (
    <div className={styles.app}>
      <KakaoAd />
      <AppRouter />
      <KakaoAdMobile />
    </div>
  );
}

export default App;
