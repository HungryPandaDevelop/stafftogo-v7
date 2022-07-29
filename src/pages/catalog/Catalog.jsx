import { useEffect, useState } from 'react';

import Breadcrumbs from 'pages/parts/Breadcrumbs';
import PageTitle from 'pages/parts/PageTitle';

import CardsControls from 'pages/catalog/parts/cardsControls/CardsControls';

import { connect } from 'react-redux';

import { getListing } from 'store/asyncActions/getListing';

import CardsItem from 'pages/catalog/CardsItem';

const Catalog = (props) => {

  const [listings, setListings] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log('start', props.listingType)
    getListing(props.listingType).then(res => {

      setListings(res);
      setLoading(false);
    });

  }, [props.listingType, props.changeInvite]);

  return (
    <div>
      <CardsControls />
      <Breadcrumbs />
      <div className="content">
        <PageTitle title="список" />

        <div className="main-grid">
          <div className="col-10">
            {loading ? 'Loading list' : listings.length > 0 ? (
              <ul className='ln'>
                {listings.map((listing) => (
                  <CardsItem
                    listing={listing}
                    key={listing.id}
                    imgCompany={listing.imgCompany}
                    link={`/catalog/${props.listingType}/${listing.id}`}
                    idCategory={props.listingType}
                    listingType={props.listingType}
                  />
                ))}
              </ul>
            ) : (
              <p>Нет элементов</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    listingType: state.listingTypeReducer,
  }
}



export default connect(mapStateToProps)(Catalog);
