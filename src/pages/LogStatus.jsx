import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const LogStatus = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const [checkingStatus, setCheckingStatus] = useState(true);

  const auth = getAuth();

  useEffect(() => {

    onAuthStateChanged(auth, (user) => { //Проверка статуса
      if (user) {
        setLoggedIn(true);
      }
      else {
        setLoggedIn(false);
      }
      setCheckingStatus(false)
    });

  }, []);

  // console.log('render status', auth.currentUser);

  return (
    <div>
      LogStatus {checkingStatus ? 'loading' : auth.currentUser.uid}
    </div>
  )
}

export default LogStatus
