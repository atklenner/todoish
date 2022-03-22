import { useState } from "react";
import useProjects from "../hooks/useProjects";
import AddProjectForm from "./AddProjectForm";

export default function Sidebar() {
  const [projects, setProjects] = useProjects();
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);
  return (
    <aside>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => {
          return <li>{project.name}</li>;
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
