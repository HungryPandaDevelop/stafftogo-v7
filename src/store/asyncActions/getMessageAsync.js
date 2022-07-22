import { toast } from 'react-toastify';

import {
  collection,
  query,
  onSnapshot,
  serverTimestamp,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  doc,
  where,
  setDoc,
  orderBy
} from 'firebase/firestore';

import { db } from 'firebase.config';


const sendMessage = async (roomInfo, text, randomId, callback, uid) => {
  // console.log(roomInfo)
  try {
    let setData = { 
      ...roomInfo[1],
        messages:{
          ...roomInfo[1].messages,
          [randomId]:{
            text: text,
            uid: uid,
            timestamp: serverTimestamp(),
          }
        }
    };

    await setDoc(doc(db, 'message', roomInfo[0],), setData);
      callback([roomInfo[0], setData]);
      toast.success('Данные обновлены')
      
  } catch (error) {
      console.error(error);
      toast.error(error)
  }
}


const createRoom = async (callback, interlocutors, link) => {


  const listRef = collection(db, 'message');

  const q = query(
    listRef,
    where("interlocutors", "==", interlocutors),
  );
  
  const querySnap = await getDocs(q);

  const docUser = doc(db, 'users', interlocutors[1]);
  const docSnap = await getDoc(docUser);

  if(querySnap.docs.length === 0){
    try {


      

      const sendData = {
        interlocutors: interlocutors,
        timestamp: serverTimestamp(),
        link: link,
        name: docSnap.data().name
      }
      const docRef = await addDoc(collection(db, 'message'), sendData);
    
      callback([docRef.id, sendData]);
      toast.success('Данные обновлены')
    } catch (error) {
        console.error(error);
        toast.error(error)
    }
  
  }else{
   
    callback([querySnap.docs[0].id, querySnap.docs[0].data()])
  }

}

const getMyRoomMessages = (chatId, callback) => {

  const docRef = doc(db, 'message', chatId);

  return onSnapshot(
    query(docRef),
    (onSnapshot)=>{
      // console.log('get message', onSnapshot.data())
      callback(onSnapshot.data());
    }
  );
}


const getMyRooms = async (uid, callback) =>{
  const listRef = collection(db, 'message'); 

  const q = query(
    listRef,
    where("interlocutors", "array-contains", uid),
  );

  const querySnap = await getDocs(q);

  const list = querySnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
  }));

  callback(list);
}


export {getMyRoomMessages, sendMessage, createRoom, getMyRooms};




