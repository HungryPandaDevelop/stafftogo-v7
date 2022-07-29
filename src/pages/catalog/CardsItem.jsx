import { Link } from 'react-router-dom';

import { useState } from 'react';

import { connect } from 'react-redux';
import InvitedPopup from 'pages/catalog/parts/InvitedPopup';

import BtnLike from './parts/cardsItem/BtnLike';
import BtnInvite from './parts/cardsItem/BtnInvite';
import BtnOpenInvite from './parts/cardsItem/BtnOpenInvite';


const ListItem = (props) => {
  const {
    listing,
    link,
    listingType,
    typeCabinet,
  } = props;

  const [popupOpen, setPopupOpen] = useState(false);

  const listingData = listing.data;


  const openOwnPopup = () => {
    // console.log('open')
    setPopupOpen(true);
  }
  const closePopup = () => {
    setPopupOpen(false);
  }

  return (
    <div className="resume-header vacancies-item">
      {popupOpen && <InvitedPopup listing={listing} closePopup={closePopup} />}
      <div className="main-grid">
        <div className="col-12 resume-header-roof">
          <div className="resume-update"><span>Резюме обновлено: XXX</span></div>
        </div>
        {listingData.userInfo && (
          <div className="col-2">
            <div className="resume-face-container">
              <div
                className="resume-face img-cover"
                style={{ backgroundImage: `url(${listingData.userInfo.imgsAccount})` }}
              >
                <img src={listingData.userInfo.imgsAccount} alt="" />
              </div>
            </div>
          </div>
        )}

        <div className="col-5">
          <div className="resume-info">
            <h2>
              <Link to={link}>
                {listingData.card_name}
              </Link>
            </h2>
            <div className="vacancies-price">
              {listingData.salary_priceFrom && `Р ${listingData.salary_priceFrom}`}
              {listingData.salary_priceTo && ` - ${listingData.salary_priceTo}`}
            </div>
            <div>
              {listingData.responsibilities}
            </div>
          </div>
        </div>

        <div className="col-5">
          <div className="resume-info resume-info--more">
            <div className="resume-delimentr"></div>
            <h2>{listingData.userInfo && listingData.userInfo.name_company}</h2>
            <ul className="ln">
              {listingData.userInfo && <li><a href="/"><i className="phone-ico--black"></i><span>{listingData.userInfo.phones_main}</span></a></li>}
              {listingData.userInfo && <li><a href="/"><i className="mail-ico--black"></i><span>{listingData.userInfo.email}</span></a></li>}
              <li><a href="/"><i className="marker-ico--black"></i><span>Показать на карте</span></a></li>
            </ul>

            {(listingType != typeCabinet) && <>
              <div className="btn-container">

                <BtnLike
                  listing={listing}
                />
                {/* <BtnInvite listing={listing} /> */}
                {props.ownCards && props.ownCards.length > 1 ? <BtnOpenInvite listing={listing} openOwnPopup={openOwnPopup} /> : ''}
              </div></>
            }



          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    ownCards: state.accountInfo.ownCards,
    typeCabinet: state.accountInfo.typeCabinet,
  }
}


export default connect(mapStateToProps)(ListItem);