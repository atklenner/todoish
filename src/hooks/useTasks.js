import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("getting tasks");

    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      const allTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));
      setTasks(allTasks);
    });
    return () => unsubscribe();
  }, []);

  return [tasks];
}
