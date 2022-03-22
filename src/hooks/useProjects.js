import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function useProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log("getting projects");

    const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
      const allProjects = snapshot.docs.map((project) => ({
        ...project.data(),
      }));
      setProjects(allProjects);
    });
    return () => unsubscribe();
  }, []);

  return [projects];
}
