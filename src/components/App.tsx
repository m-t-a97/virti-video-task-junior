import styles from "./App.module.css";
import VideoController from "./videos/VideoController";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Virti Video</h2>
      </div>

      <VideoController />
    </div>
  );
}

export default App;
