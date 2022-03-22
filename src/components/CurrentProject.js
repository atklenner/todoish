import useTasks from "../hooks/useTasks";
import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

export default function CurrentProject() {
  const [tasks] = useTasks();
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  return (
    <div>
      <ul role="list">
        {tasks.map((task) => (
          <li>{task.task}</li>
        ))}
      </ul>
      {!showAddTaskForm && (
        <button onClick={() => setShowAddTaskForm(true)}>Add Task</button>
      )}
      {showAddTaskForm && (
        <AddTaskForm handleClick={() => setShowAddTaskForm(false)} />
      )}
    </div>
  );
}
