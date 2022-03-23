import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useProjectContext } from "../context/ProjectContext";
import { db } from "../firebase";

export default function AddTaskForm({ handleClick }) {
  const { selectedProject } = useProjectContext();
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
    if (task) {
      addDoc(collection(db, "tasks"), {
        archived: false,
        projectId: selectedProject,
        task: task,
      });
    }
  }

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Task:
        <input
          type="text"
          name="task"
          value={task}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button className="button">Submit</button>
    </form>
  );
}
