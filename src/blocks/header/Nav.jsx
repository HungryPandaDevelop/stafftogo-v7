import { connect } from 'react-redux';

import Sigin from 'blocks/header/Sigin';
import NavNoLogged from 'blocks/header/NavNoLogged';

const Nav = ({ uid, checkingStatus }) => {

  return (
    <>
      {checkingStatus ? 'Loading...' : (uid ? <Sigin /> : <NavNoLogged />)}
    </>
  )
}

const mapStateToProps = (state) => {
  console.log('state.accountInfo.uid', state.accountInfo.uid.uid)
  return {
    uid: state.accountInfo.uid,
    checkingStatus: state.accountInfo.checkingStatus,
  }
}

export default connect(mapStateToProps)(Nav);