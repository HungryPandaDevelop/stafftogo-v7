
import { db } from 'firebase.config';

import {
  doc,
  updateDoc,
} from 'firebase/firestore';


import { toast } from 'react-toastify';



export const addInviteAsync = async (idInvite, cardsId, name, message, idMyInvite) => {
    
    try {

      const vacanciesRef = doc(db, name, cardsId);
      
      let subname;
      if(name === 'vacancies'){ 
        subname = 'resume';
      }else{
        subname = 'vacancies';
      }
    

      await updateDoc(vacanciesRef, {'idInvite': idInvite});

      if(!message){
        const vacanciesRefS = doc(db, subname, idMyInvite);
        await updateDoc(vacanciesRefS, {'idMyInvite': idInvite[0]});

        toast.success('Данные обновлены')
      }
      
    } catch (error) {
      toast.error('Невозможно обновить вакансию')
      console.log(error)
    }
  }