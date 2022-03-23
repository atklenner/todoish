import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function AddProjectForm({ handleClick }) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    handleClick();
    if (name) {
      addDoc(collection(db, "projects"), {
        name: name,
      });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Project Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button className="button">Submit</button>
    </form>
  );
}
