import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <h2 className={styles.headerTitle}>Virti Video</h2>
    </div>
  );
}

export default Header;
