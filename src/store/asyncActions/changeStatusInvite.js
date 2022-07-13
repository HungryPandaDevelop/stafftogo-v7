
import { db } from 'firebase.config';

import {
  doc,
  updateDoc,
} from 'firebase/firestore';


import { toast } from 'react-toastify';



export const changeStatusInvite = async (id, nameBase, status) => {
    
    try {

     
      
      let subname;
      if(nameBase === 'vacancies'){ 
        subname = 'resume';
      }else{
        subname = 'vacancies';
      }
    
      const vacanciesRef = doc(db, subname, id);

      await updateDoc(vacanciesRef, {'idMyInvite': {'status' : status} });

      toast.success('Данные обновлены')
      
    } catch (error) {
      toast.error('Невозможно обновить вакансию')
      console.log(error)
    }
  }