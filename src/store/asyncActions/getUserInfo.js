import { getDoc, doc, } from 'firebase/firestore';
import { db } from 'firebase.config';

export const getUserInfo = async (id) => {
  const docRef = doc(db, 'users', id);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}