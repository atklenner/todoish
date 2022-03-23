import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useProjectContext } from "../context/ProjectContext";
import { db } from "../firebase";
import AddProjectForm from "./AddProjectForm";
import { GrTrash } from "react-icons/gr";

export default function Sidebar() {
  const { projects, setSelectedProject, selectedProject } = useProjectContext();
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);

  function handleClick(project) {
    setSelectedProject(project.id);
  }

  function deleteProject(id) {
    if (id === selectedProject) {
      setSelectedProject("");
    }
    deleteDoc(doc(db, "projects", id));
  }

  return (
    <aside>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <span onClick={() => handleClick(project)}>{project.name}</span>
              {/* <span >trash</span> */}
              <GrTrash onClick={() => deleteProject(project.id)} />
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
