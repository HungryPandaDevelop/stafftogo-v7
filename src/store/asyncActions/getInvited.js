
import {
  collection,
  collectionGroup,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

import { db } from 'firebase.config';


// SG9nl2Xt8TYhhJ99llu7

export const getInvited = async () => {


  
  const listingsRef = collection(db, 'resume');


  const q = query(
    listingsRef,
    where('__name__', '==', 'SG9nl2Xt8TYhhJ99llu7'),
  );

  const querySnap = await getDocs(q);

  let getInfoInvite;

  querySnap.forEach((doc) => {
    return getInfoInvite = { data: doc.data() }
  });

  return getInfoInvite;
}