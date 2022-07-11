import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { getInvited } from 'store/asyncActions/getInvited';

import CardItemLike from 'pages/cabinet/parts/cards/CardItemLike';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';


const Invited = (props) => {

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState(null);

  useEffect(() => {
    console.log('props.ownType', props.ownType)
    console.log('ownType', props.ownType)
    props.ownType && getInvited(props.ownType, props.uid).then(res => {

      setListings(res);
      setLoading(false);

    });
  }, [props.changeInvite, props.ownType]);



  const contentPage = () => {
    return (
      <>
        {!loading && listings.length > 0 && (
          <>
            {
              listings.map((listing) => (
                <div key={listing.id}>
                  <CardItemLike
                    listing={listing}

                  />
                </div>
              ))
            }
          </>
        )}
      </>
    )
  }


  return (
    <>
      <TemplateAccount title="Мои отклики" >
        {contentPage()}
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {
  const uid = state.accountInfo.uid && state.accountInfo.uid.currentUser.uid;
  return {
    listingType: state.listingTypeReducer,
    changeInvite: state.popupReducer.changeInvite,
    ownType: state.accountInfo.ownType,
    uid: uid
  }
}



export default connect(mapStateToProps)(Invited);
