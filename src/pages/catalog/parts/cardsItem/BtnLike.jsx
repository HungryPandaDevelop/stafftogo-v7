import { useState, useEffect } from 'react';
import { addLikeAsync } from 'store/asyncActions/addLikeAsync';
import { connect } from 'react-redux';

const BtnLike = ({ listing, uid, listingType }) => {

  const [liked, setLiked] = useState(false);
  const [likeMass, setLikeMass] = useState(false);
  const idElement = listing.id;

  useEffect(() => {

    if (listing.data.idLike) {
      setLikeMass(listing.data.idLike);
    }
    else {
      setLikeMass(['0']);
    }

    if (listing.data.idLike && listing.data.idLike.includes(uid)) {
      setLiked(true);
    }

  }, [uid]);


  const addLike = () => {
    likeMass && setLikeMass(likeMass.filter(item => item !== uid));

    if (likeMass.includes(uid)) {
      setLiked(false);
    } else {
      setLikeMass([...likeMass, uid]);
      setLiked(true);
    }

    setLikeMass((state) => {

      addLikeAsync(state, idElement, listingType);
      return state;
    });

  }


  return (
    <div className={`btn ${liked ? 'btn--orange' : ''}`} onClick={addLike}>Лайк</div>
  )

}


const mapStateToProps = (state) => {
  return {
    listingType: state.listingTypeReducer,
    uid: state.accountInfo.uid,
  }
}



export default connect(mapStateToProps)(BtnLike);