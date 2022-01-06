import styles from "./App.module.css";
import KakaoAd from "./components/ad/kakaoAdFooter";
import Home from "./components/home/home";
import AppRouter from "./router";

function App() {
  return (
    <div className={styles.app}>
      <KakaoAd />
      <AppRouter />
      <KakaoAd />
    </div>
  );
}

export default App;
