import { useEffect, useState } from 'react';

// import { getMessageAsync } from 'store/asyncActions/getMessageAsync';
import { getMessageAsync, sendMessage } from 'store/asyncActions/getMessageAsync';
// import { useAuthState } from 'react-firebase-hooks/auth'; Интересено!?

import RenderFormAccount from 'components/forms/RenderFormAccount';

import { connect } from 'react-redux';

const Chat = (props) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessageAsync(setMessages);

    // sendMessage(roomId, user, value);

  }, []);



  const onSubmitIn = () => {

    if (props.formData) {
      // registrationAccount(props.formData);
      console.log('props.formData', props.formData);

      sendMessage('t1', 't2', 't3');
    }
    else {
      console.log('error')
    }
  }

  return (
    <div>
      {console.log(messages)}
      <div className="content">


        <div className="main-full">
          <h1>Чат</h1>

          <RenderFormAccount
            btnSaveText="Отправить"
            objFields={props.fieldsChat}
            orderFields={props.fieldsChat.order}
            onSubmitProps={onSubmitIn}

          />
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  return {
    fieldsChat: state.fieldsChat, // база полей
    formData: formReducer,
  }
}

export default connect(mapStateToProps)(Chat);