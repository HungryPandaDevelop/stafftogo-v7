import ControlsLike from './parts/ControlsLike';
import LikeInfo from './parts/LikeInfo';

const CardItemLike = (props) => {

  const {
    listing,
  } = props;

  return (
    <div className="resume-header vacancies-item">
      <div className="main-grid">
        <div className="col-5">
          <LikeInfo
            name={listing.data.card_name}
            id={listing.id}
          />
        </div>

        <div className="col-5">
          <ControlsLike
            listing={listing}
          />
        </div>
      </div>
    </div>
  )
}

export default CardItemLike;