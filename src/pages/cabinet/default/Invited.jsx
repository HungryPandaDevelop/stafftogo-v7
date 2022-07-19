
import { connect } from 'react-redux';

import CardItemInvite from 'pages/cabinet/parts/cards/CardItemInvite';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';



const Invited = (props) => {
  const { ownCards, ownType } = props;

  // console.log('choiseDeleteInvite', choiseDeleteInvite)
  const contentPage = () => {
    return (
      <>

        {ownCards && ownCards.length > 0 && (
          <>
            {
              ownCards.map((listing) => (
                <div key={listing.id}>
                  <CardItemInvite
                    listing={listing}
                    typeInvite={0}
                    ownType={ownType}
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
    ownType: state.accountInfo.ownType,
    ownCards: state.accountInfo.ownCards,
    uid: uid
  }
}



export default connect(mapStateToProps)(Invited);
