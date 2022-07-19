import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { getMyInvited } from 'store/asyncActions/getMyInvited';

import CardItemMyInvite from 'pages/cabinet/parts/cards/CardItemMyInvite';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';


const Invited = (props) => {
  const { ownCards, ownType } = props;
  console.log(' props.ownCards', ownCards);


  const contentPage = () => {
    return (
      <>
        {ownCards && ownCards.map(item => (
          <CardItemMyInvite
            key={item.id}
            listing={item}
            ownType={ownType}
          />
        ))}

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


  return {

    ownType: state.accountInfo.ownType,
    ownCards: state.accountInfo.ownCards,


  }
}



export default connect(mapStateToProps)(Invited);
