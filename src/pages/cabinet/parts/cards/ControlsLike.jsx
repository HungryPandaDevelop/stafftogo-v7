
import { addLikeAsync } from 'store/asyncActions/addLikeAsync';
import { connect } from 'react-redux';

import ActionFn from 'store/actions';

const ControlsLike = (props) => {
  const { listing, uid, listingType, ActionFn, changeList } = props;

  const idElement = listing.id;

  const removeLike = () => {


    const likeMass = listing.data.idLike.filter(item => item !== uid);
    addLikeAsync(likeMass, idElement, listingType);


    ActionFn('CHANGE_LIST', !changeList);

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

  return {
    listingType: state.listingTypeReducer,
    uid: state.accountInfo.uid,
    changeList: state.accountInfo.changeList,
  }
}



export default connect(mapStateToProps, { ActionFn })(ControlsLike);