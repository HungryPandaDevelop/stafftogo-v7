
import { db } from 'firebase.config';

import {
  doc,
  updateDoc,
} from 'firebase/firestore';


import { toast } from 'react-toastify';



export const addInviteAsync = async (idInvite, cardsId, nameBase, typeInvite) => {
    
    try {

      const vacanciesRef = doc(db, nameBase, cardsId);

      await updateDoc(vacanciesRef, {[typeInvite]: idInvite});

      toast.success('Данные обновлены')
      
    } catch (error) {
      toast.error('Невозможно обновить вакансию')
      console.log(error)
    }
  }