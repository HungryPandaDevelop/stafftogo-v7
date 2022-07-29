import { 
  getAuth,
  updateProfile,
} from 'firebase/auth';

import { db } from 'firebase.config';

import {
  doc,
  updateDoc,
} from 'firebase/firestore';


import { toast } from 'react-toastify';



export const sendUserInfo = async (dataForm, uid) => {

    const auth = getAuth();

    try {

      await updateProfile(auth.currentUser, {
        displayName: dataForm.name
      });

      const userRef = doc(db, 'users', uid);


      await updateDoc(userRef, dataForm);

      toast.success('Данные обновлены')
    } catch (error) {
      toast.error('Невозможно обновить профиль')
      console.log(error)
    }
  }


// сохранить информацию об аккаунте