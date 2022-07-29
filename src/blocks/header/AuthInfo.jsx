import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


import { connect } from 'react-redux';

import { getSingleListing } from 'store/asyncActions/getSingleListing';
import { getListing } from 'store/asyncActions/getListing';

import ActionFn from 'store/actions';

const AuthInfo = ({ ActionFn, uid, checkingStatus }) => {

  useEffect(() => {

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log('1');
        ActionFn('SET_UID', auth.currentUser.uid);

        getSingleListing('users', auth.currentUser.uid).then(res => {
          // console.log(res);
          ActionFn('SET_INFO_ACCOUNT', res);

          getListing(res.typeCabinet, auth.currentUser.uid, 'users').then(res => {

            ActionFn('SET_OWN_CARDS', res);

            ActionFn('CHANGE_STATUS_LOGGED', false);
          });
        });
      }
      else {

        ActionFn('SET_UID', false);
      }

      // console.log('2');
      //
    });

  }, []);

  return (
    <div>AuthInfo: {checkingStatus ? 'Loading...' : (uid ? 'Logged: ' + uid : 'No Logged')}</div>
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