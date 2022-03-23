import Content from "./components/Content";
import Header from "./components/Header";
import { ProjectContextProvider } from "./context/ProjectContext";

export default function App() {
  return (
    <ProjectContextProvider>
      <Header />
      <Content />
    </ProjectContextProvider>
  );
}
