
import {
  collection,
  collectionGroup,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

import { db } from 'firebase.config';


export const getInvited = async (nameBase, user) => {


  const listingsRef = collection(db, nameBase);
  
  let q = query(
      listingsRef,
      // where('idInvite.status', 'array-contains-any', ['true']),
      // where('card_name', '==', 'Трубочист'),  // Рабочее
      // where('idInvite', 'array-contains', { // Рабочее
      //   idUser: 'YpguqFwp1YeEFrQlQeJHaRWVKar1',
      //   numInvite: "H2YyxgD0GuhFuDK7k8JJ",
      //   status: "view"
      // }),
      // where('idInvite', 'array-contains-any', ['west_coast']), // Рабочее
      // where("idLike", "array-contains", user),
      // where('idLike', '==', 'Ks8AALPMJ0MkLl888A9jSBr2IaC3'),
      // where('userRef', '==', 'YpguqFwp1YeEFrQlQeJHaRWVKar1'),
      // orderBy('timestamp', 'desc'),
    );

  const querySnap = await getDocs(q);


  let getData = []

  querySnap.forEach((doc) => {
    return getData.push({
      id: doc.id,
      data: doc.data()
    })
  });


  // let filterMas = [];

  // getData.forEach(item=>{
  //   item.data.idInvite && item.data.idInvite.length > 0 && item.data.idInvite.forEach(el=>{
  //     if(el.idUser  === user){
  //       filterMas.push(item);
  //     }
  //   })
  // })


  return getData;

}


