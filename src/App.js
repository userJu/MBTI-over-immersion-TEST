import styles from "./App.module.css";
import Home from "./components/home/home";
import AppRouter from "./router";

function App() {
  return (
    <div className={styles.app}>
      <AppRouter />
    </div>
  );
}

export default App;
