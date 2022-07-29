

import { connect } from 'react-redux';


import { getSingleListing } from 'store/asyncActions/getSingleListing'

import { changeStatusMyInvite } from 'store/asyncActions/changeStatusMyInvite';

import { useState, useEffect } from 'react';



const ControlsLike = ({ item, listing, listingType, }) => {

  const [status, setStatus] = useState('');

  useEffect(() => {

    setStatus(item.status);

  }, []);



  const changeStatus = (status) => {
    setStatus(status);

    let numCurrentCards
    listing.data.personInvite.forEach((el, index) => {

      if (el.numInvite === item.numInvite) {
        numCurrentCards = index;
      };
    });


    listing.data.personInvite[numCurrentCards].status = status;
    changeStatusMyInvite(listingType, listing.id, listing.data.personInvite, 'personInvite');

    let nameBase;
    if (listingType === 'vacancies') {
      nameBase = 'resume';
    } else {
      nameBase = 'vacancies';
    }
    getSingleListing(nameBase, item.numInvite).then((res) => { // проверить



      let invitesForOwnCardsNum;
      let getObj = res.ownInvite;
      console.log('getObj', getObj)
      getObj.forEach((el, index) => {
        if (el.numInvite == listing.id) {
          invitesForOwnCardsNum = index;
        }
      }
      );
      getObj[invitesForOwnCardsNum].status = status;

      changeStatusMyInvite(nameBase, item.numInvite, getObj, 'ownInvite');

    });


  }



  return (
    <div className="btn-container">

      <div>

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

      <br />
      <div />
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    listingType: state.listingTypeReducer,
  }
}



export default connect(mapStateToProps)(ControlsLike);