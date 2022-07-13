import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { getMyInvited } from 'store/asyncActions/getMyInvited';

import CardItemInvite from 'pages/cabinet/parts/cards/CardItemInvite';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';


const Invited = (props) => {

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState(null);

  const [idMyInvite, setIdMyInvite] = useState(null);

  let masInvite = [];

  useEffect(() => {
    // props.ownCards && console.log(props.ownCards[0].id);
    //console.log('props.ownCards', props.ownCards[0].status);
    props.ownCards && setIdMyInvite(props.ownCards[0].id);
    props.ownCards && props.ownCards.forEach(item => {
      // console.log('item.data.idInvite', item.data.idInvite)
      item.data.idInvite && item.data.idInvite.forEach(el => {
        masInvite.push(el.numInvite);
      });
    });

    const filterInv = masInvite.filter(function (elem, pos) { // убрать повторяющиеся элементы
      return masInvite.indexOf(elem) == pos;
    });


    props.ownType && getMyInvited(props.ownType, props.uid, filterInv).then(res => {

      setListings(res);
      setLoading(false);

    });
  }, [props.changeInvite, props.ownCards]);



  const contentPage = () => {
    return (
      <>

        {!loading && listings.length > 0 && (
          <>
            {
              listings.map((listing) => (
                <div key={listing.id}>
                  <CardItemInvite
                    listing={listing}
                    typeInvite={1}
                    idMyInvite={idMyInvite}
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
    ownCards: state.accountInfo.ownCards,
    uid: uid,

  }
}



export default connect(mapStateToProps)(Invited);
