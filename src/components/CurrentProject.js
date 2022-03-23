import useTasks from "../hooks/useTasks";
import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { useProjectContext } from "../context/ProjectContext";
import Task from "./Task";

export default function CurrentProject() {
  const { selectedProject, projects } = useProjectContext();
  const [tasks] = useTasks();
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  // function deleteCompletedTasks() {

  // }

  return (
    <div>
      <h2>
        {selectedProject &&
          projects.find((project) => project.id === selectedProject).name}
      </h2>
      {selectedProject &&
        tasks
          .filter((task) => task.projectId === selectedProject)
          .map((task) => <Task key={task.id} {...task} />)}
      {selectedProject && !showAddTaskForm && (
        <div>
          <button onClick={() => setShowAddTaskForm(true)}>Add Task</button>
          {/* <button onClick={deleteCompletedTasks}>Remove Completed Tasks</button> */}
        </div>
      )}
      {showAddTaskForm && (
        <AddTaskForm handleClick={() => setShowAddTaskForm(false)} />
      )}
    </div>
  );
}
