import { 
  getAuth,
} from 'firebase/auth';

import { toast } from 'react-toastify';

import { useNavigate, Link } from 'react-router-dom';

import {

  collection,
  getDocs,
  query,
} from 'firebase/firestore';

import { db } from 'firebase.config';


export const getMessageAsync = async () => {

  const listingsRef = collection(db, 'vacancies');
  
  let q = query(
    listingsRef
  );
  

  const querySnap = await getDocs(q);

  const getData = []

  querySnap.forEach((doc) => {
    console.log(doc)
    return getData.push({

    })
  });

  // return getData;

}





