import styles from "./App.module.css";
import Header from "./core/Header";
import VideoController from "./videos/VideoController";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <VideoController />
    </div>
  );
}

export default App;
