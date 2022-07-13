import { useEffect, useState } from 'react';

import { addInviteAsync } from 'store/asyncActions/addInviteAsync';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';
import setInvitedFn from './setInvitedFn'


const BtnInvite = (props) => {
  const { listing, listingType, numInvite, ownCards, uid, changeInvite } = props;

  const [inviteActive, setInviteActive] = useState(false);

  // console.log(listing) // не меняется



  useEffect(() => {
    const massInviteInServer = listing.data.personInvite && listing.data.personInvite.map(item => item.numInvite)
    console.log('m', massInviteInServer)
    if (massInviteInServer.includes(numInvite)) {
      setInviteActive(true);
    }
    else {
      setInviteActive(false);
    }
    console.log('change state btn', listing.data.personInvite);


  }, [listing])


  const addInvite = () => {

    let invitesForOwnCards = [];
    let invitesForPersonCards = [];

    if (ownCards) {
      const ownCardsTemp = ownCards.filter(item => item.id === numInvite)[0].data.ownInvite;
      const currentIdTemp = listing.id;
      const cardName = listing.data.card_name;

      invitesForOwnCards = setInvitedFn(ownCardsTemp, currentIdTemp, uid, cardName); // собаственный id? 
    }


    if (listing.data) {

      const ownCardsTemp = listing.data.personInvite;
      const currentIdTemp = numInvite;
      const cardName = ownCards.filter(item => item.id === numInvite)[0].data.card_name;

      invitesForPersonCards = setInvitedFn(ownCardsTemp, currentIdTemp, uid, cardName);
    }




    let nameBase;

    if (listingType === 'vacancies') {
      nameBase = 'resume';
    } else {
      nameBase = 'vacancies';
    }

    console.log(listing.id, numInvite)
    addInviteAsync(invitesForPersonCards, listing.id, listingType, 'personInvite');
    addInviteAsync(invitesForOwnCards, numInvite, nameBase, 'ownInvite');
    console.log(changeInvite)
    props.ActionFn('CHANGE_INVITE', !changeInvite);


    // setTimeout(() => {
    // props.ActionFn('OPEN_INVITE_POPUP', { status: 0 });
    // props.ActionFn('CHANGE_INVITE', !changeInvite);
    // }, 1000);
  }



  return (
    <div
      className="btn"
      onClick={addInvite}>

      {inviteActive ? 'xxx' : 'Откликнуться'}
    </div>
  )
}


const mapStateToProps = (state) => {
  // console.log('state', state.popupReducer.changeInvite)
  const uid = state.accountInfo.uid && state.accountInfo.uid.currentUser.uid;
  return {
    ownCards: state.accountInfo.ownCards,
    listingType: state.listingTypeReducer,
    changeInvite: state.popupReducer.changeInvite,
    uid: uid
  }
}


export default connect(mapStateToProps, { ActionFn })(BtnInvite);