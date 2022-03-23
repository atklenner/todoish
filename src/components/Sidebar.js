import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useProjectContext } from "../context/ProjectContext";
import { db } from "../firebase";
import AddProjectForm from "./AddProjectForm";
import { GrTrash } from "react-icons/gr";
import styles from "../styles/Sidebar.module.scss";

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
      <ul className={styles.ul}>
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              className={project.id === selectedProject ? "selected" : ""}
            >
              <span onClick={() => handleClick(project)}>{project.name}</span>
              <GrTrash onClick={() => deleteProject(project.id)} />
            </li>
          );
        })}
      </ul>
      {!showAddProjectForm && (
        <button onClick={() => setShowAddProjectForm(true)} className="button">
          New Project
        </button>
      )}
      {showAddProjectForm && (
        <AddProjectForm handleClick={() => setShowAddProjectForm(false)} />
      )}
    </aside>
  );
}
