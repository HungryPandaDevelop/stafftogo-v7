import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { getListing } from 'store/asyncActions/getListing';



import CardsItem from 'pages/catalog/parts/CardsItem';


const List = (props) => {



  const [listings, setListings] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log('start', props.listingType)
    getListing(props.listingType).then(res => {

      setListings(res);

    });

  }, [props.listingType, props.changeInvite]);

  return (

    <>
      {/* {console.log('render list')} */}

      {listings && listings.length > 0 ? (
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
// export default List;