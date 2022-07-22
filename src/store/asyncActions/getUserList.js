import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter
} from 'firebase/firestore';

import { db } from 'firebase.config';


const getList = async (callback) => {


  const listRef = collection(db, 'users');
  
  const q = query(
    listRef,
    orderBy('timestamp', 'desc'),
  );
  
  const querySnap = await getDocs(q);

  console.log(querySnap);
  const setList = querySnap.docs.map((doc)=>({
    id: doc.id,
    ...doc.data()
  }));

  callback(setList);

}

export {getList};

