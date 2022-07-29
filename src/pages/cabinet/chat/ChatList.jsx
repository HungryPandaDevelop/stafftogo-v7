import './style.css';

import { connect } from 'react-redux';


import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';


import { getListing } from 'store/asyncActions/getListing';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

const ChatList = (props) => {
  const { uid } = props;
  const [loading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {


    getListing('users', uid).then(res => {
      setUsersList(res)
      setLoading(false);

    });


  }, []);

  console.log('usersList', usersList);




  return (
    <TemplateAccount title="Чат" >

      {loading ? 'Loading list...' : (
        <div className="chat-list">
          {loading ? 'loading' : (
            usersList.map(user => (
              <div key={user.id} className="user-item-chat">
                <h2>
                  {user.data.name}
                  <Link to={`/cabinet/chat/${uid}-${user.id}`} className="btn btn--orange">
                    Написать
                  </Link>
                </h2>
              </div>
            ))
          )}
        </div>
      )}


    </TemplateAccount>
  )
}


const mapStateToProps = (state) => {

  return {
    listingType: state.listingTypeReducer,
    ownType: state.accountInfo.ownType,
    ownCards: state.accountInfo.ownCards,
    uid: state.accountInfo.uid,
  }
}



export default connect(mapStateToProps)(ChatList);
