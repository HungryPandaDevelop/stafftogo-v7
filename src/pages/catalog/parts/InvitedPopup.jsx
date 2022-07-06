import { useState } from 'react';
import { connect } from 'react-redux';

import ActionFn from 'store/actions';

import BtnInvitePopup from 'pages/catalog/parts/cardsItem/BtnInvitePopup';

const InvitedPopup = (props) => {

  const closePopup = () => {
    props.ActionFn('OPEN_INVITE_POPUP', { status: 0 });
  }


  const [isActiveIndex, setIsActiveIndex] = useState(0);


  const choiseIdInvite = (id, index) => {


    setIsActiveIndex(index);


    props.ActionFn('CHOISE_INVITE', id);

  }

  return (

    <div className={`popup popup-invite element-show ${props.openInvitePopup.status === 1 ? 'show' : ''}`}>

      <div className="popup-overlay"></div>
      <div className="popup-container">
        <div className="close-btn close-js" onClick={closePopup}></div>
        <div>
          {props.currentItem && (<h2>Отклик на вакансию: {props.currentItem.card_name}</h2>)}
          <div>
            <b>Вакансии для отклика</b>
          </div>
          <ul className="invite-list-container ln">
            {props.ownCards && props.ownCards.map((item, index) => (
              <li
                className={`${isActiveIndex === index ? 'active' : ''} invite-list`}
                key={item.id}
                onClick={() => { choiseIdInvite(item.id, index) }}
              >
                <h3><i></i><span>{item.data.card_name}</span></h3>

              </li>
            ))}
          </ul>
          <div className="btn-container">
            <div className="btn btn--border">
              Отмена
            </div>
            {props.currentItem &&
              (<BtnInvitePopup
                listing={props.currentItem}
              />)
            }


          </div>
        </div>
      </div>

    </div >
  )
}


const mapStateToProps = (state) => {

  return {
    openInvitePopup: state.popupReducer.openInvitePopup,
    ownCards: state.accountInfo.ownCards,
    currentItem: state.popupReducer.openInvitePopup.currentItem,

  }
}


export default connect(mapStateToProps,
  {
    ActionFn
  })(InvitedPopup);