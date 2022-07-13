import { connect } from 'react-redux';
import ActionFn from 'store/actions';

// import { useState, useEffect } from 'react';
// import { addInvitePersonAsync } from 'store/asyncActions/addInvitePersonAsync';

const BtnOpenInvite = (props) => {

  const { listing, numInvite, uid, openOwnPopup } = props;




  const openInvitePopup = () => {
    openOwnPopup();
    //props.ActionFn('OPEN_INVITE_POPUP', { status: 1, currentItem: listing });

  }

  return (
    <>
      <div
        // className={`btn ${invited ? 'btn--green' : ''}`}
        className={`btn`}
        onClick={openInvitePopup}>
        {/* {invited ? 'Откликнулись' : 'Откликнуться'} */}
        Откликнуться
      </div>
    </>
  )
}



const mapStateToProps = (state) => {
  // const uid = state.accountInfo.uid && state.accountInfo.uid.currentUser.uid;
  return {
    // ownCards: state.accountInfo.ownCards,
    // listingType: state.listingTypeReducer,
    // numInvite: state.popupReducer.idInvite,
    // uid: uid,
  }
}

export default connect(mapStateToProps, { ActionFn })(BtnOpenInvite);