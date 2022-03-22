import { useState } from "react";
import { useProjectContext } from "../context/ProjectContext";
import AddProjectForm from "./AddProjectForm";

export default function Sidebar() {
  const { projects, setSelectedProject } = useProjectContext();
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);

  function handleClick(project) {
    setSelectedProject(project.id);
  }

  return (
    <aside>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id} onClick={() => handleClick(project)}>
              {project.name}
            </li>
          );
        })}
      </ul>
      {!showAddProjectForm && (
        <button onClick={() => setShowAddProjectForm(true)}>New Project</button>
      )}
      {showAddProjectForm && (
        <AddProjectForm handleClick={() => setShowAddProjectForm(false)} />
      )}
    </aside>
  );
}
