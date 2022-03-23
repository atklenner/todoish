import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import styles from "../styles/Task.module.scss";
import { GrTrash, GrCheckbox, GrCheckboxSelected } from "react-icons/gr";

export default function Task({ id, task, archived, projectId }) {
  function archiveTask() {
    updateDoc(doc(db, "tasks", id), {
      archived: !archived,
    });
  }

  function deleteTask() {
    deleteDoc(doc(db, "tasks", id));
  }
  return (
    <div className={styles.container}>
      <div onClick={archiveTask} className={styles.taskLogo}>
        {archived ? <GrCheckboxSelected /> : <GrCheckbox />}
      </div>
      <p className={archived ? styles.archived : ""}>{task}</p>
      <div onClick={deleteTask} className={styles.taskLogo}>
        <GrTrash />
      </div>
    </div>
  );
}
