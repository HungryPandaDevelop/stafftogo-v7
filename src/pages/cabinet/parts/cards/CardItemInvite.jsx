import ControlsInvite from './parts/ControlsInvite';
import ControlsMyInvite from './parts/ControlsMyInvite';
import LikeInfo from './parts/LikeInfo';

import { getInvited } from 'store/asyncActions/getInvited';
import { useState } from 'react';
const CardItemInvite = ({ listing, typeInvite, handleDelete }) => {

  // console.log(listing.data.ownInvite);



  return (
    <div className="resume-header vacancies-item">
      <div className="main-grid">
        <div className="col-5">
          <LikeInfo
            name={listing.data.card_name}
            link={listing.data.userRef}

          />
        </div>

        <div className="col-7">


        </div>
        <div className="col-12">
          {listing.data.ownInvite && listing.data.ownInvite.map((item) => {
            return (
              <div key={item.numInvite}>
                <h3>{item.cards_name}</h3>
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