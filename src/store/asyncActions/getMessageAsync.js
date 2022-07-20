import { toast } from 'react-toastify';

import {
  collection,
  query,
  onSnapshot,
  serverTimestamp,
  addDoc,
  updateDoc,
  doc,
  where
} from 'firebase/firestore';

import { db } from 'firebase.config';

const getMessageRef = collection(db, 'message');


const sendMessage = async (roomId, user, text) => {
  const temproomId ='11111111'; //?
  const tempText ='lorem';
  const tempUid = 'zzz';
  try {
      // await updateDoc(doc(db, 'message', temproomId), { обновить 
      await addDoc(collection(db, 'message'), { // создать
          uid: tempUid,
          displayName: tempUid,
          text: tempText,
          timestamp: serverTimestamp(),
      });
      toast.success('Данные обновлены')
  } catch (error) {
      console.error(error);
      toast.error(error)
  }
}


const getMessageAsync = (callback) =>{

  let q = query(
    getMessageRef,
    where("interlocutors", "array-contains", "1a"),
  );

  return onSnapshot(
    q,
    (querySnapshot) => {
  
      const messages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
      }));

      callback(messages);

  });

}

export {getMessageAsync, sendMessage};




