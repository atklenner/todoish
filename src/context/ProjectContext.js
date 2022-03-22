import { useContext, createContext, useState } from "react";
import useProjects from "../hooks/useProjects";

const ProjectContext = createContext();

export const useProjectContext = () => useContext(ProjectContext);

export function ProjectContextProvider({ children }) {
  const [projects] = useProjects();
  const [selectedProject, setSelectedProject] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ProjectContext.Provider
      value={{
        projects,
        selectedProject,
        setSelectedProject,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
