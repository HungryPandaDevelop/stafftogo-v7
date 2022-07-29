import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';


import { sendMessage, createRoom } from 'store/asyncActions/getMessageAsync';
import { getMyRoomMessages } from 'store/asyncActions/getMessageAsync';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import RenderFormAccount from 'components/forms/RenderFormAccount';
import ChatMessages from 'pages/cabinet/chat/ChatMessages';
import RoomList from 'pages/cabinet/chat/RoomList';

import { connect } from 'react-redux';

const Chat = ({ uid, formData, fieldsChat }) => {

  const params = useParams();

  const [roomInfo, setRoomInfo] = useState([]);
  const [loading, setLoading] = useState(true);




  useEffect(() => {

    let interlocutors = params.roomId.split('-');

    uid && createRoom(setRoomInfo, interlocutors, params.roomId).then(() => setLoading(false));


  }, []);




  const onSubmitIn = () => {

    if (formData) {

      const unique_id = uuid();


      sendMessage(roomInfo, formData.message, unique_id, setRoomInfo, uid);
      formData.message = '';
    }
    else {
      console.log('error')
    }
  }

  return (

    <TemplateAccount title={`Чат c ${roomInfo[1] && roomInfo[1].name}`} >
      <div className="main-full">
        <h1></h1>
      </div>
      <div className="main-grid">
        <div className="col-4">
          {loading ? 'loading' : <RoomList uid={uid} currentRoomId={roomInfo[0]} />}
        </div>
        <div className="col-8">
          {loading ? 'loading' : <ChatMessages chatId={roomInfo[0]} uid={uid} messages={roomInfo[1].messages} />}
          <RenderFormAccount
            btnSaveText="Отправить"
            objFields={fieldsChat}
            orderFields={fieldsChat.order}
            onSubmitProps={onSubmitIn}

          />
        </div>
      </div>
    </TemplateAccount>

  )
}


const mapStateToProps = (state) => {
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  return {
    fieldsChat: state.fieldsChat, // база полей
    formData: formReducer,
    uid: state.accountInfo.uid,

  }
}

export default connect(mapStateToProps)(Chat);