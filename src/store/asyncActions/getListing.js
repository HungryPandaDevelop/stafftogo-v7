import {
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  limit,
  startAfter
} from 'firebase/firestore';

import { db } from 'firebase.config';


export const getListing = async (name, uid, type) => {

  console.log('in', name, uid)

  const listingsRef = collection(db, name);
  
  let q;

  if(uid && type==='users'){

    q = query(
      listingsRef,
      where('userRef', '==', uid),
      orderBy('timestamp', 'desc'),
      // limit(2)
    );
  }else if(type==='like'){
    q = query(
      listingsRef,
      where("idLike", "array-contains", uid),
      //where('idLike', '==', 'Ks8AALPMJ0MkLl888A9jSBr2IaC3'),
      // where('userRef', '==', 'YpguqFwp1YeEFrQlQeJHaRWVKar1'),
      // orderBy('timestamp', 'desc'),
      // limit(2)
    );
  }
  else{
    q = query(
      listingsRef,
      orderBy('timestamp', 'desc'),
      // limit(2)
    );
  }
  

  const querySnap = await getDocs(q);

  const getData = []

  querySnap.forEach((doc) => {
    return getData.push({
      id: doc.id,
      data: doc.data()
    });
  });

  return getData;

}


export const onDelete = async (listings, listingId, name) => {
  if (window.confirm('Delete ?')) {
    await deleteDoc(doc(db, name, listingId))

    return  listings.filter((listing) => listing.id !== listingId)

  }
}




// export const onEdit = async (listingId) => {
//   const navigate = useNavigate();

//   navigate(`/cabinet/vacancies-edit/${listingId}`)
// }


