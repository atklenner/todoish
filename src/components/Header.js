import styles from "../styles/Header.module.scss";
import { GrAdd, GrMoon, GrSun } from "react-icons/gr";
import { useProjectContext } from "../context/ProjectContext";

export default function Header() {
  const { darkMode, setDarkMode } = useProjectContext();

  return (
    <header>
      <nav>
        <h1>Todoish</h1>

        <ul role="list">
          <li>
            <button className={styles.headerButton}>
              <GrAdd />
            </button>
          </li>
          <li>
            <button
              className={styles.headerButton}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <GrSun /> : <GrMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
