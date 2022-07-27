import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { connect } from 'react-redux';

import ActionFn from 'store/actions';

const AuthInfo = ({ ActionFn, uid, checkingStatus }) => {

  useEffect(() => {

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {

        ActionFn('SET_INFO_UID', auth.currentUser.uid);
      }
      else {

        ActionFn('CHANGE_LOGGED', false);
      }

      ActionFn('CHANGE_STATUS_LOGGED', false);
    });

  }, []);

  return (
    <div>AuthInfo: {checkingStatus ? 'Loading...' : (uid ? 'Logged' : 'No Logged')}</div>
  )
}

const mapStateToProps = (state) => {

  return {
    uid: state.accountInfo.uid,
    checkingStatus: state.accountInfo.checkingStatus,
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(AuthInfo);