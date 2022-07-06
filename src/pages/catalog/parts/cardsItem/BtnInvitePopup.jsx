import { useState, useEffect } from 'react';
import { addInviteAsync } from 'store/asyncActions/addInviteAsync';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';


const BtnInvitePopup = (props) => {
  const { listing, listingType, numInvite, uid } = props;
  const [invited, setInvited] = useState(false);
  const [inviteMass, setInviteMass] = useState(false);

  const idElement = listing.id;

  useEffect(() => {

    if (listing.data.idInvite) {
      setInviteMass(listing.data.idInvite);
    }

    if ((listing.data.idInvite.length > 0) && listing.data.idInvite[0].numInvite === numInvite) {
      setInvited(true);
    }
    else {
      setInvited(false);
    } // вкл кнопки, если есть id

  }, [numInvite]);



  const addInvite = () => {

    if (inviteMass.length > 0) {
      inviteMass.map(item => {
        if (item.numInvite === numInvite) {

          setInviteMass(inviteMass.filter(item => item.idUser !== uid));

          setInvited(false)
        } else {

          setInviteMass([...inviteMass, { idUser: uid, numInvite: numInvite, status: 'view' }]);

          setInvited(true);
        }
      });
    } else {
      setInviteMass([...inviteMass, { idUser: uid, numInvite: numInvite, status: 'view' }]);

      setInvited(true);
    }

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
    listingType: state.listingTypeReducer,
    numInvite: state.popupReducer.idInvite,
    uid: uid
  }
}


export default connect(mapStateToProps, { ActionFn })(BtnInvitePopup);