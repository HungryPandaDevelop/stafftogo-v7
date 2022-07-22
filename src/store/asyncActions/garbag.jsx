// const getMessageRef = collection(db, 'message');

// const getMessageAsync = (callback) =>{

//   let q = query(
//     getMessageRef,
//     where("interlocutors", "array-contains", "1a"),
//   );

//   return onSnapshot(
//     q,
//     (querySnapshot) => {
  
//       const messages = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//       }));

//       callback(messages);

//   });
// }