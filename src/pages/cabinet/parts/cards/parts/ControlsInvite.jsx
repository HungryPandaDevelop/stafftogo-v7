

import { connect } from 'react-redux';

import { addInviteAsync } from 'store/asyncActions/addInviteAsync';

import { getSingleListing } from 'store/asyncActions/getSingleListing'

import { useState } from 'react';

import ActionFn from 'store/actions';

const ControlsLike = ({ listing, cards, listingType, ownCards, choiseDeleteInvite, ActionFn }) => {

  const [status, setStatus] = useState('');


  const removeInvite = (id) => {

    // console.log(id)
    // ActionFn('DELETE_INVITE_CABINET', id);

    if (ownCards) {

      let invitesForOwnCards = ownCards.filter(item => item.id === listing.id)[0].data.ownInvite;
      invitesForOwnCards = invitesForOwnCards.filter(item => item.numInvite !== cards.numInvite);


      let nameBase;

      if (listingType === 'vacancies') {
        nameBase = 'resume';
      } else {
        nameBase = 'vacancies';
      }
      getSingleListing('resume', cards.numInvite).then((res) => {
        // console.log(res.personInvite, listing.id);
        let invitesForPersonCards = res.personInvite.filter(item => item.numInvite !== listing.id)
        // console.log(invitesForPersonCards);

        addInviteAsync(invitesForOwnCards, listing.id, nameBase, 'ownInvite');
        addInviteAsync(invitesForPersonCards, cards.numInvite, listingType, 'personInvite');

        ActionFn('DELETE_INVITE_CABINET', !choiseDeleteInvite);
      });


    }





  }


  return (
    <div className="btn-container">

      <div>
        <div
          className="btn btn--blue btn--smaill ico-in"
          onClick={() => { removeInvite(cards.numInvite) }}
        >
          <i>
            <span className="back-ico"><img src="images/icons/trash-black.svg" alt="" /></span>
            <span className="front-ico"><img src="images/icons/trash-white.svg" alt="" /></span>
          </i>
          <span>
            Удалить
          </span>
        </div>
        <div
          className={`tag-invite green ${status === 'agree' ? 'active' : ''}`}
        >Согласен</div>
        <div
          className={`tag-invite red ${status === 'refuse' ? 'active' : ''}`}
        >Отказать</div>
        <div
          className={`tag-invite yellow ${status === 'view' ? 'active' : ''}`}
        >Рассматривается</div>
      </div>

      <br />
      <div />
    </div>
  )
}


const mapStateToProps = (state) => {
  const uid = state.accountInfo.uid && state.accountInfo.uid.currentUser.uid;
  return {
    listingType: state.listingTypeReducer,
    uid: uid,
    choiseDeleteInvite: state.popupReducer.choiseDeleteInvite,
    ownCards: state.accountInfo.ownCards,
  }
}



export default connect(mapStateToProps, { ActionFn })(ControlsLike);