import { useEffect } from 'react';

// import { getMessageAsync } from 'store/asyncActions/getMessageAsync';
// import { useAuthState } from 'react-firebase-hooks/auth'; Интересено!?
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
  getAuth,
} from 'firebase/auth';

const Chat = async () => {


  useEffect(() => {
    // console.log('start', props.listingType)
    // getMessageAsync().then(res => {

    //   console.log(res)

    // });

  }, []);



  // const [messages] = useCollectionData(query);


  return (
    <div>
      <div className="content">
        <h1>
          Чат
        </h1>
      </div>
    </div>
  )
}

export default Chat;
