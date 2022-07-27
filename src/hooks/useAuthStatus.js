import { useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

export const useAuthStatus = () => {

  const auth = getAuth();

  const [loggedIn, setLoggedIn] = useState(false);

  const [checkingStatus, setCheckingStatus] = useState(true);

  const [userUid, setUserUid] = useState('');

  useEffect(()=>{

      onAuthStateChanged(auth, (user)=>{
        if(user){
          setLoggedIn(true);
          setUserUid(auth.currentUser.uid);
        }
        else{
          setLoggedIn(false);
        }
        setCheckingStatus(false)
      });
  

  }, []);

  return {loggedIn, checkingStatus, userUid, auth};
}