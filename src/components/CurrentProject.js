import useTasks from "../hooks/useTasks";
import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { useProjectContext } from "../context/ProjectContext";
import Task from "./Task";
import styles from "../styles/CurrentProject.module.scss";

export default function CurrentProject() {
  const { selectedProject, projects } = useProjectContext();
  const [tasks] = useTasks();
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  return (
    <div className={styles.container}>
      <h2>
        {selectedProject &&
          projects.find((project) => project.id === selectedProject).name}
      </h2>
      <ul>
        {selectedProject &&
          tasks
            .filter((task) => task.projectId === selectedProject)
            .map((task) => (
              <li key={task.id}>
                <Task {...task} />
              </li>
            ))}
      </ul>
      {selectedProject && !showAddTaskForm && (
        <div>
          <button onClick={() => setShowAddTaskForm(true)} className="button">
            Add Task
          </button>
        </div>
      )}
      {showAddTaskForm && (
        <AddTaskForm handleClick={() => setShowAddTaskForm(false)} />
      )}
    </div>
  );
}
