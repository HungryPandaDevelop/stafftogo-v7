
// import { addInviteAsync } from 'store/asyncActions/addInviteAsync';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import ActionFn from 'store/actions';
import { changeStatusInvite } from 'store/asyncActions/changeStatusInvite';

const ControlsLike = (props) => {

  const [status, setStatus] = useState('');

  const { listing, uid, listingType, changeInvite } = props;

  const idElement = listing.id;
  console.log('idElement', props.idMyInvite)
  const removeInvite = () => {


    const inviteMass = listing.data.idInvite.filter(item => item.idUser !== uid);

    // addInviteAsync(inviteMass, idElement, listingType);

    // props.ActionFn('CHANGE_INVITE', !changeInvite);

  }

  useEffect(() => {
    // console.log('listing.data.idMyInvite', listing.data.idMyInvite)
    if (listing.data.idMyInvite) {
      // setStatus(listing.data.idMyInvite[0].status);
      setStatus(listing.data.idMyInvite.status);

    }
  }, []);

  const changeStatus = (status) => {
    setStatus(status);
    console.log('idElement', idElement, listingType, status)
    changeStatusInvite(idElement, listingType, status);
  }
  return (
    <div className="btn-container">

      <div>
        <div
          className="btn btn--blue btn--smaill ico-in"
          onClick={removeInvite}
        >
          <i>
            <span className="back-ico"><img src="images/icons/trash-black.svg" alt="" /></span>
            <span className="front-ico"><img src="images/icons/trash-white.svg" alt="" /></span>
          </i>
          <span>
            Удалить X
          </span>
        </div>


        <div
          className={`tag-invite green ${status === 'agree' ? 'active' : ''}`}
          onClick={() => changeStatus('agree')}
        >Согласен</div>
        <div
          className={`tag-invite red ${status === 'refuse' ? 'active' : ''}`}
          onClick={() => changeStatus('refuse')}
        >Отказать</div>
        <div
          className={`tag-invite yellow ${status === 'view' ? 'active' : ''}`}
          onClick={() => changeStatus('view')}
        >Рассматривается</div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  const uid = state.accountInfo.uid && state.accountInfo.uid.currentUser.uid;
  return {
    listingType: state.listingTypeReducer,
    uid: uid,
    changeInvite: state.popupReducer.changeInvite
  }
}



export default connect(mapStateToProps, { ActionFn })(ControlsLike);