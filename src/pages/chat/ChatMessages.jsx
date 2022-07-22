import './style.css';

import Moment from 'react-moment';


import { useEffect, useState } from 'react';

import { getMyRoomMessages } from 'store/asyncActions/getMessageAsync';

const ChatMessages = (props) => {

  const { chatId } = props;

  const [messages, setMessages] = useState([]);



  useEffect(() => {

    getMyRoomMessages(chatId, setMessages);

  }, [chatId]);



  return (
    <div className='chat-messages'>

      <h2>Окно чата</h2>
      {messages.messages && Object.keys(messages.messages).map((key, index) => (
        <div className='message-item' key={index}>
          {messages.messages[key].timestamp && <Moment unix>{messages.messages[key].timestamp.seconds}</Moment>}
          <hr />
          {messages.messages[key].text}

        </div>
      ))}
    </div>
  )
}

export default ChatMessages
