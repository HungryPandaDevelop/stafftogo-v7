import ControlsMyInvite from './parts/ControlsMyInvite';
import InviteInfo from './parts/InviteInfo';

import { Link } from 'react-router-dom';

const CardItemMyInvite = ({ listing, ownType }) => {


  return (
    <div className="resume-header vacancies-item">
      <div className="main-grid">
        <div className="col-5">
          <InviteInfo
            name={listing.data.card_name}
            id={listing.id}

          />
        </div>

        <div className="col-7">


        </div>
        <div className="col-12">
          {listing.data.personInvite && listing.data.personInvite.map((item) => {
            return (
              <div key={item.numInvite}>
                <h3><Link to={`/catalog/${ownType}/${item.numInvite}`}>{item.cards_name}</Link></h3>
                <ControlsMyInvite item={item} listing={listing} />
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default CardItemMyInvite;