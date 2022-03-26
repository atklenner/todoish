import CurrentProject from "./CurrentProject";
import Sidebar from "./Sidebar";
import "../styles/Content.module.scss";
import { useProjectContext } from "../context/ProjectContext";

export default function Content() {
  const { darkMode } = useProjectContext();
  return (
    <main data-theme={darkMode ? "dark" : ""}>
      <Sidebar />
      <CurrentProject />
    </main>
  );
}
