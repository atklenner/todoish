import useTasks from "../hooks/useTasks";
import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { useProjectContext } from "../context/ProjectContext";

export default function CurrentProject() {
  const { selectedProject, projects } = useProjectContext();
  const [tasks] = useTasks();
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  return (
    <div>
      <h2>{projects.find((project) => project.id === selectedProject).name}</h2>
      {/* the ul will need to change completely */}
      <ul role="list">
        {selectedProject &&
          tasks
            .filter((task) => task.projectId === selectedProject)
            .map((task) => <li key={task.id}>{task.task}</li>)}
      </ul>
      {selectedProject && !showAddTaskForm && (
        <div>
          <button onClick={() => setShowAddTaskForm(true)}>Add Task</button>
          <button>Remove Completed Tasks</button>
        </div>
      )}
      {showAddTaskForm && (
        <AddTaskForm handleClick={() => setShowAddTaskForm(false)} />
      )}
    </div>
  );
}
