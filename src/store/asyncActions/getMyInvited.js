
import {
  collection,
  collectionGroup,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

import { db } from 'firebase.config';


export const getMyInvited = async (nameBase, user, masInvite) => {


  const listingsRef = collection(db, nameBase);
  
  let q = query(
      listingsRef,
    );

  const querySnap = await getDocs(q);


  let getData = []

  querySnap.forEach((doc) => {
    masInvite.forEach(el => {
      if(doc.id === el){
        return getData.push({
          id: doc.id,
          data: doc.data()
        });
      }
    })

  });



  return  getData;

}


