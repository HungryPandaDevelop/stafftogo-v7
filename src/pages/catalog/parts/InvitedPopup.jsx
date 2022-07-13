import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import ActionFn from 'store/actions';

import BtnInvite from 'pages/catalog/parts/cardsItem/BtnInvite';

const InvitedPopup = (props) => {

  const [isActiveIndex, setIsActiveIndex] = useState(false);

  useEffect(() => {

    if (props.listing && props.listing.data.idInvite && props.listing.data.idInvite.length) {

      const allInvite = props.listing.data.idInvite;

      const currentInvite = allInvite.filter(item => item.idUser === props.uid);

      if (currentInvite.length) {
        setIsActiveIndex(currentInvite[0].numInvite);
        props.ActionFn('CHOISE_INVITE', currentInvite[0].numInvite);
      } else {
        setIsActiveIndex(false);
      }

    }



  }, [props.listing, props.openInvitePopup])

  const closePopup = () => {
    props.ActionFn('OPEN_INVITE_POPUP', { status: 0 });
    // props.ActionFn('CHANGE_INVITE', !props.changeInvite);
  }




  // const choiseIdInvite = (id, index) => {


  //   setIsActiveIndex(id);
  //   props.ActionFn('CHOISE_INVITE', id); // !!!!!!

  //   // props.ActionFn('OPEN_INVITE_POPUP', { status: 0 });
  // }

  return (
    <>
      {/* {props.openInvitePopup.status === 1 && ( */}
      <div className="popup popup-invite element-show show">
        <div className="popup-overlay"></div>
        <div className="popup-container">
          <div className="close-btn close-js" onClick={closePopup}></div>
          <div>
            <h2>Отклик на вакансию: {props.listing.data.card_name}</h2>
            <div>
              <b>Вакансии для отклика</b>
            </div>
            <ul className="invite-list-container ln">
              {props.ownCards && props.ownCards.map((item, index) => (
                <li
                  className={`${isActiveIndex === item.id ? 'active' : ''} invite-list`}
                  key={item.id}
                // onClick={() => { choiseIdInvite(item.id, index) }}
                >
                  <h3><i></i><span>{item.data.card_name}</span></h3>

                  {/* {console.log('BtnInvite')} */}
                  <BtnInvite
                    listing={props.listing}
                    numInvite={item.id}
                  />
                </li>
              ))}
            </ul>
            <div className="btn-container">
              <div className="btn btn--border">
                Отмена
              </div>



            </div>
          </div>
        </div>

      </div >
      {/* )} */}
    </>
  )
}


const mapStateToProps = (state) => {
  const uid = state.accountInfo.uid && state.accountInfo.uid.currentUser.uid;
  return {
    openInvitePopup: state.popupReducer.openInvitePopup,
    ownCards: state.accountInfo.ownCards,
    uid: uid,
    changeInvite: state.popupReducer.changeInvite,
  }
}


export default connect(mapStateToProps,
  {
    ActionFn
  })(InvitedPopup);