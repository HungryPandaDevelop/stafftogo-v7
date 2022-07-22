import './style.css';

import { connect } from 'react-redux';


import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { getList } from 'store/asyncActions/getUserList';

const ChatList = (props) => {
  const { uid } = props;
  const [loading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getList(setUsersList).then(() => {
      setLoading(false);
    });

    // sendMessage(roomId, user, value);

  }, []);

  console.log('usersList', usersList);

  const rednderListUser = () => (
    usersList.map(user => (
      <div key={user.id} className="user-item-chat">
        <h2>
          {user.name}
          <Link to={`/chat/${uid}-${user.id}`} className="btn btn--orange">
            Написать
          </Link>
        </h2>
      </div>
    ))
  );

  return (
    <div className="content">
      <div className="main-full">
        <h1>Список пользователей</h1>
        <div className="chat-list">
          {loading ? 'loading' : rednderListUser()}
        </div>
      </div>

    </div>
  )
}


const mapStateToProps = (state) => {

  const uid = state.accountInfo.uid && state.accountInfo.uid.currentUser.uid;
  return {
    listingType: state.listingTypeReducer,
    ownType: state.accountInfo.ownType,
    ownCards: state.accountInfo.ownCards,
    uid: uid
  }
}



export default connect(mapStateToProps)(ChatList);
