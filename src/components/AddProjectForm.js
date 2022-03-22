import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function AddProjectForm({ handleClick }) {
  const [name, setName] = useState("");
  const currentUser = "1234";

  function handleChange(e) {
    setName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    handleClick();
    addDoc(collection(db, "projects"), {
      name: name,
      projectId: 1,
      userId: currentUser,
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label for="name">
        Project Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}