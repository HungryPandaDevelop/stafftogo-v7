import { connect } from 'react-redux';

import UserList from 'blocks/header/sigin/UserList';
import UserHeadInfo from 'blocks/header/sigin/UserHeadInfo';
import UserPopupTop from 'blocks/header/sigin/UserPopupTop';

import LogOut from 'blocks/header/sigin/LogOut';
import ActionFn from 'store/actions';

const HeadProfile = ({ userInfo, listings }) => {

  return (
    <>
      <div className="sigin-body">
        <UserHeadInfo userInfo={userInfo} />
        <div className="sigin-popup" style={{ 'visibility': 'visible', 'opacity': 1 }}>

          <UserPopupTop userInfo={userInfo} />

          <UserList listings={listings} typeCabinet={userInfo.typeCabinet} />
          <LogOut />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.uid,
    userInfo: state.accountInfo.accountInfo,
    listings: state.accountInfo.ownCards,

  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(HeadProfile);