
import { addLikeAsync } from 'store/asyncActions/addLikeAsync';
import { connect } from 'react-redux';

import ActionFn from 'store/actions';

const ControlsLike = (props) => {
  const { listing, uid, listingType, changeInvite } = props;

  const idElement = listing.id;

  const removeLike = () => {


    const likeMass = listing.data.idLike.filter(item => item !== uid);
    addLikeAsync(likeMass, idElement, listingType);


    // props.ActionFn('CHANGE_INVITE', !changeInvite);

  }

  return (
    <div className="btn-container">

      <div>
        <div
          className="btn btn--blue btn--smaill ico-in"
          onClick={removeLike}
        >
          <i>
            <span className="back-ico"><img src="images/icons/trash-black.svg" alt="" /></span>
            <span className="front-ico"><img src="images/icons/trash-white.svg" alt="" /></span>
          </i>
          <span>
            Удалить
          </span>
        </div>
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