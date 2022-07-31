import './style.css';

import Moment from 'react-moment';


import { useEffect, useState } from 'react';

import { getMyRoomMessages } from 'store/asyncActions/getMessageAsync';

const ChatMessages = (props) => {

  const { chatId, uid, render } = props;

  const [messages, setMessages] = useState({});

  useEffect(() => {

    // getMyRoomMessages(chatId, setMessages);


    console.log('in ')
    getMyRoomMessages(chatId, setMessages);





  }, []);

  const renderMessages = () => {

    let result;

    if (messages) {
      result = Object.keys(messages).map((key) => messages[key]);

      // result[result.length - 1].timestamp && result.sort(function (a, b) {
      //   var dateA = new Date(a.timestamp.seconds), dateB = new Date(b.timestamp.seconds);
      //   return dateA - dateB
      // });

    }
    return <>
      {result ? result.map((item, index) => (
        <div className={`message-item ${uid === item.uid && 'my-message'}`} key={index} >
          {item.timestamp && <Moment unix>{item.timestamp.seconds}</Moment>}
          <hr />
          {item.text}

        </div>
      )) : 'Empty List'}
    </>;
  }

  return (
    <div className='chat-messages'>

      <h2>Окно чата</h2>
      {renderMessages()}

    </div>
  )
}

export default ChatMessages
