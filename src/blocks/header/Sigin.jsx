import avatar from 'front-end/images/icons/avatar-white.svg';
import carret from 'front-end/images/controls/carret-down-white.svg';

import { connect } from 'react-redux';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getSingleListing } from 'store/asyncActions/getSingleListing';
import { getListing } from 'store/asyncActions/getListing';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import ActionFn from 'store/actions';

const HeadProfile = (props) => {

  const auth = getAuth();

  const { accountInfo } = props;

  const onLogout = (e) => {
    e.preventDefault();
    auth.signOut();
  }

  const [loggedIn, setLoggedIn] = useState(false);

  const [checkingStatus, setCheckingStatus] = useState(true);

  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [listings, setListings] = useState(null);

  const [typeList, setTypeList] = useState('');
  const [typeName, setTypeName] = useState('');

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);

        getSingleListing('users', auth.currentUser.uid).then(res => {
          console.log(res);
        });
      }
      else {
        setLoggedIn(false);
      }
      setCheckingStatus(false)
    });


  }, []);


  // useEffect(() => {

  //   getUserInfo().then(res => {
  //     setUserInfo(res.data);

  //     props.ActionFn('SET_INFO_ACCOUNT', res.data);
  //     props.ActionFn('SET_INFO_UID', auth);

  //     if (res.data.typeCabinet === 'employers') {
  //       setTypeList('vacancies');
  //       setTypeName('Вакансии');
  //       props.ActionFn('SET_OWN_TYPE', 'resume');
  //       props.ActionFn('SET_OWN_TYPE_TRUE', 'vacancies');

  //     } else {
  //       setTypeList('resume');
  //       setTypeName('Резюме');
  //       props.ActionFn('SET_OWN_TYPE', 'vacancies');
  //       props.ActionFn('SET_OWN_TYPE_TRUE', 'resume');
  //     }



  //     setTypeList((state) => {
  //       getListing(state, 'user').then(res => {
  //         props.ActionFn('CHOISE_INVITE', res[0].id);
  //         props.ActionFn('SET_OWN_CARDS', res);

  //         // console.log('set own cards', res)

  //         setListings(res);

  //         setLoading(false);
  //       });
  //       return state;
  //     });
  //   });
  //   // console.log('changeInvite')
  // }, [props.choiseDeleteInvite]);


  return (
    <>
      <a className="btn-search-head ico-in" href="#">
        <span>Поиск</span>
      </a>
      <Link className="btn-map-head" to="/catalog"></Link>

      <div className="sigin-body">
        <div>
          {/* <em>{accountInfo.name}</em> */}
          <i className="img-cover img-avatar"
          // style={{ backgroundImage: `url(${accountInfo.imgsAccount ? accountInfo.imgsAccount : avatar})` }}
          >
            <img src={avatar} alt="" />
          </i>
          <i className="carret">
            <img src={carret} alt="" />
          </i>
        </div>
        <div className="sigin-popup">
          <div className="sigin-title">
            {userInfo.name}
          </div>
          <div className="sigin-lists">
            <div className="sigin-top">
              <h3> <Link to="/cabinet/">Мои Кабинет</Link></h3>
              <h3> <Link to={`/cabinet/${typeList}/`}>Мои {typeName}</Link></h3>
            </div>
            <ul className="ln">
              {!loading && listings.length > 0 && (
                <>
                  {
                    listings.map((listing) => (
                      <div key={listing.id}>
                        <li><Link to={`/catalog/${typeList}/${listing.id}`}>{listing.data.card_name}</Link></li>
                      </div>
                    ))
                  }
                </>
              )}
            </ul>
          </div>
          <div className="sigin-bottom">
            <a href="#" onClick={onLogout}><div className="logout-ico"></div><span>Выйти</span></a>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  console.log(state.accountInfo.accountInfo)
  return {
    accountInfo: state.accountInfo.accountInfo,
    choiseDeleteInvite: state.popupReducer.choiseDeleteInvite,
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(HeadProfile);