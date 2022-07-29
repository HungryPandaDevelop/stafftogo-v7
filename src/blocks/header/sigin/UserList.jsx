import { Link } from 'react-router-dom';
const UserList = ({ listings, typeCabinet }) => {
  return (
    <div className="sigin-lists">

      <ul className="ln">
        {listings.length > 0 ? (
          <>
            {
              listings.map((listing) => (
                <div key={listing.id}>
                  <li><Link to={`/catalog/${typeCabinet}/${listing.id}`}>{listing.data.card_name}</Link></li>
                </div>
              ))
            }
          </>
        ) : 'List Empty'}
      </ul>
    </div>
  )
}

export default UserList;
