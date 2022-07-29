import ControlsInvite from 'pages/cabinet/parts/cards/ControlsInvite';
import ControlsMyInvite from 'pages/cabinet/parts/cards/ControlsMyInvite';
import InviteInfo from 'pages/cabinet/parts/cards/InviteInfo';
import { Link } from 'react-router-dom';
const CardItemInvite = ({ listing, typeInvite, ownType }) => {


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

          {listing.data.ownInvite && listing.data.ownInvite.map((item) => {
            return (
              <div key={item.numInvite}>
                <h3><Link to={`/catalog/${ownType}/${item.numInvite}`}>{item.cards_name}</Link></h3>
                {typeInvite === 0 ?
                  <ControlsInvite
                    cards={item}
                    listing={listing}

                  />
                  :
                  <ControlsMyInvite item={item} listing={listing} />}
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default CardItemInvite;