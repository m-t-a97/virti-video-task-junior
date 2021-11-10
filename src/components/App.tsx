import styles from "./App.module.css";
import VideoController from "./videos/VideoController";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Virti Video</h2>
      </div>

      <div className={styles.contentContainer}>
        <VideoController />
      </div>
    </div>
  );
}

export default App;
