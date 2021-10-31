import "./initialize";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore();

export const saveDocument = async (collectionName, document) =>
  addDoc(collection(db, collectionName), document);

export const getDocuments = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push({ id: doc.id, ...doc.data() });
  });
  return docs;
};
