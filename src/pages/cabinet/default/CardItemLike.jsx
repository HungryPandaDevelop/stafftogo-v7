import ControlsLike from 'pages/cabinet/parts/cards/ControlsLike';
import LikeInfo from 'pages/cabinet/parts/cards/LikeInfo';

const CardItemLike = ({ listing }) => {


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