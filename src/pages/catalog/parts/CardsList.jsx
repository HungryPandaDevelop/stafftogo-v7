import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getListing } from 'store/asyncActions/getListing';



import CardsItem from 'pages/catalog/parts/CardsItem';

import InvitedPopup from 'pages/catalog/parts/InvitedPopup';

const List = (props) => {



  const [listings, setListings] = useState(null);

  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    console.log('updateList')
    getListing(props.listingType).then(res => {
      setListings(res);
      setLoading(false);
    });

  }, [props.listingType, props.changeInvite]);

  return (

    <>
      <InvitedPopup />

      {loading ? 'loading' : listings && listings.length > 0 ? (

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
        <p>Нет элементов {params.catagoryName}</p>
      )}
    </>
  )
}



const mapStateToProps = (state) => {

  return {
    listingType: state.listingTypeReducer,
    changeInvite: state.popupReducer.changeInvite
  }
}



export default connect(mapStateToProps)(List);