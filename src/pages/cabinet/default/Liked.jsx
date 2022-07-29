import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { getListing } from 'store/asyncActions/getListing';

import CardItemLike from 'pages/cabinet/default/CardItemLike';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';


const Liked = ({ typeCabinet, uid, changeList }) => {

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState(null);

  useEffect(() => {
    const typeList = typeCabinet === 'resume' ? 'vacancies' : 'resume';

    getListing(typeList, uid, 'like').then(res => {

      setListings(res);
      setLoading(false);

    });
  }, [changeList]);



  const contentPage = () => {
    return (
      <>
        {loading ? 'Loading' : listings.length > 0 ? (
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
        ) : 'Empty'}
      </>
    )
  }


  return (
    <>
      <TemplateAccount title="Мне понравилось" >
        {contentPage()}
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {
  console.log(state)
  return {
    typeCabinet: state.accountInfo.accountInfo.typeCabinet,
    changeList: state.accountInfo.changeList,
    uid: state.accountInfo.uid,
  }
}



export default connect(mapStateToProps)(Liked);
