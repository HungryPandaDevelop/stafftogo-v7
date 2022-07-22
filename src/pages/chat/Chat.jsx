import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { sendMessage, createRoom } from 'store/asyncActions/getMessageAsync';

import RenderFormAccount from 'components/forms/RenderFormAccount';
import ChatMessages from 'pages/chat/ChatMessages';
import RoomList from 'pages/chat/RoomList';

import { connect } from 'react-redux';

const Chat = (props) => {
  const { uid } = props;
  const params = useParams();

  const [roomInfo, setRoomInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    let interlocutors = params.roomId.split('-');

    uid && createRoom(setRoomInfo, interlocutors, params.roomId).then(() => setLoading(false));


  }, [uid, params.roomId]);




  const onSubmitIn = () => {

    if (props.formData) {

      const unique_id = uuid();
      console.log('roomInfo', roomInfo);
      sendMessage(roomInfo, props.formData.message, unique_id, setRoomInfo, uid);
      props.formData.message = '';
    }
    else {
      console.log('error')
    }
  }

  return (
    <div>

      <div className="content">


        <div className="main-full">
          <h1>Чат c {roomInfo[1] && roomInfo[1].name}</h1>
        </div>
        <div className="main-grid">
          <div className="col-4">
            {loading ? 'loading' : <RoomList uid={uid} currentRoomId={roomInfo[0]} />}
          </div>
          <div className="col-8">
            {loading ? 'loading' : <ChatMessages chatId={roomInfo[0]} />}
            <RenderFormAccount
              btnSaveText="Отправить"
              objFields={props.fieldsChat}
              orderFields={props.fieldsChat.order}
              onSubmitProps={onSubmitIn}

            />
          </div>
        </div>

      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  const uid = state.accountInfo.uid && state.accountInfo.uid.currentUser.uid;
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  return {
    fieldsChat: state.fieldsChat, // база полей
    formData: formReducer,
    uid: uid

  }
}

export default connect(mapStateToProps)(Chat);