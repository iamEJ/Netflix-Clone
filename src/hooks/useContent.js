import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function UseContent(target) {
  const [content, setContent] = useState([]);
  const { firebaseApp } = useContext(FirebaseContext);

  useEffect(() => {
    firebaseApp
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((item) => ({
          ...item.data(),
          docId: item.id,
        }));
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { [target]: content };
}
