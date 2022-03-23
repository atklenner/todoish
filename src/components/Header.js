import styles from "../styles/Header.module.scss";
import { GrMoon, GrSun } from "react-icons/gr";
import { useProjectContext } from "../context/ProjectContext";

export default function Header() {
  const { darkMode, setDarkMode } = useProjectContext();

  return (
    <div className={styles.container}>
      <header>
        <h1>Todoish</h1>
        <button
          className={styles.headerButton}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <GrSun /> : <GrMoon />}
        </button>
      </header>
    </div>
  );
}
