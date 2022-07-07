import { useState, useEffect } from 'react';
import { addInviteAsync } from 'store/asyncActions/addInviteAsync';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';


const BtnInvite = (props) => {
  const { listing, listingType, numInvite, uid, ownCards } = props;
  const [invited, setInvited] = useState(false);
  const [inviteMass, setInviteMass] = useState(false);

  const idElement = listing.id;

  useEffect(() => {

    // console.log('start', listing.data.idInvite.length)


    if (listing.data.idInvite && listing.data.idInvite.length !== undefined && props.uid) {

      const currentInvite = listing.data.idInvite.filter(item => item.idUser === props.uid);

      //console.log('start', currentInvite[0].numInvite, numInvite)
      // console.log('start in if', currentInvite, listing.data.idInvite)
      if (currentInvite.length > 0) {
        if (currentInvite[0].numInvite === numInvite) {
          setInvited(true);
        }
        else {
          setInvited(false);
        }
      }

      //console.log('currentInvite', listing.data.card_name, currentInvite);

      setInviteMass(listing.data.idInvite);
    }



    // вкл кнопки, если есть id

  }, [ownCards]);


  //setInviteMass([...inviteMass.filter(item => item.idUser !== uid), { idUser: uid, numInvite: numInvite, status: 'view' }]);
  const addInvite = () => {


    props.ActionFn('CHANGE_INVITE', true);
    console.log('inviteMass.length', inviteMass.length)
    if (inviteMass.length === undefined || inviteMass.length === 0) {
      setInviteMass([{ idUser: uid, numInvite: numInvite, status: 'view' }]);
      setInvited(true);
    }
    else {
      // console.log('1');
      inviteMass.map(item => {
        if (item.idUser === uid && item.numInvite === numInvite) {

          setInviteMass(inviteMass.filter(item => item.idUser !== uid));

          setInvited(false)
        } else {

          // console.log('2');
          setInviteMass([...inviteMass.filter(item => item.idUser !== uid), { idUser: uid, numInvite: numInvite, status: 'view' }]);

          setInvited(true);
        }
      });
    } /*else {
      // console.log('3');
      setInviteMass([...inviteMass.filter(item => item.idUser !== uid), { idUser: uid, numInvite: numInvite, status: 'view' }]);

      setInvited(true);
    }*/

    // 3
    setInviteMass((state) => {

      //console.log('state', state)
      addInviteAsync(state, idElement, listingType);
      return state;
    });
  }



  return (
    <div
      className={`btn ${invited ? 'btn--orange' : ''}`}
      onClick={addInvite}>
      {invited ? 'Откликнулись' : 'Откликнуться'}

    </div>
  )
}


const mapStateToProps = (state) => {
  const uid = state.accountInfo.uid && state.accountInfo.uid.currentUser.uid;
  return {
    ownCards: state.accountInfo.ownCards,
    listingType: state.listingTypeReducer,
    numInvite: state.popupReducer.idInvite,
    uid: uid
  }
}


export default connect(mapStateToProps, { ActionFn })(BtnInvite);