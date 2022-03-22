import CurrentProject from "./CurrentProject";
import Sidebar from "./Sidebar";
import "../styles/Content.module.scss";

export default function Content() {
  return (
    <main>
      <Sidebar />
      <CurrentProject />
    </main>
  );
}
