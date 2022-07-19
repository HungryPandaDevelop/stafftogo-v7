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



export const changeStatusMyInvite = async (nameBase, idCards, obj, typeInvite) => {




    try {

      const cardsRef = doc(db, nameBase, idCards);


      await updateDoc(cardsRef, {[typeInvite]: obj });


      toast.success('Данные обновлены')
    } catch (error) {
      toast.error('Невозможно обновить профиль')
      console.log(error)
    }
  }


// сохранить информацию об аккаунте