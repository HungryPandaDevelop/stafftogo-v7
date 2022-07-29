import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { getListing, onDelete } from 'store/asyncActions/getListing';

import CardItemVacancies from 'pages/cabinet/vacancies/CardItemVacancies';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import { connect } from 'react-redux';

const Vacancies = ({ uid }) => {

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    getListing('vacancies', uid).then(res => {

      setListings(res);
      setLoading(false);

    });
  }, []);

  const deleteItem = (listings, id) => {
    onDelete(listings, id, 'vacancies').then(res => {
      setListings(res);
    });

  }


  const onEdit = async (listingId) => {
    navigate(`/cabinet/vacancies-edit/${listingId}`)
  }


  const rightSibar = () => {
    return (
      <Link className="btn btn--orange" to="/cabinet/vacancies-new">
        Создать вакансию
      </Link>
    )
  }

  return (
    <>
      <TemplateAccount title="Мои вакансии" rightSibar={rightSibar()}>
        {loading ? 'loading' : listings.length > 0 ? (
          <>
            {
              listings.map((listing) => (
                <div key={listing.id}>
                  <CardItemVacancies
                    listing={listing.data}
                    id={listing.id}
                    onEdit={() => onEdit(listing.id)}
                    onDelete={() => deleteItem(listings, listing.id)}
                  />

                </div>
              ))
            }
          </>
        ) : 'Empty'}
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {


  return {
    uid: state.accountInfo.uid,
  }
}

export default connect(mapStateToProps)(Vacancies);