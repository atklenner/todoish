import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

export default function AddTaskForm({ handleClick }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
    addDoc(collection(db, "tasks"), {
      archived: false,
      date: "",
      projectId: 1,
      task: task,
      userId: "1234",
    });
  }

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label for="task">
        Task:
        <input
          type="text"
          name="task"
          value={task}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button>Add Task</button>
    </form>
  );
}
