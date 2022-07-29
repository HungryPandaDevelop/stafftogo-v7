import Controls from 'pages/cabinet/parts/cards/Controls';
import UserInfo from 'pages/cabinet/parts/cards/UserInfo';
import UserImg from 'pages/cabinet/parts/cards/UserImg';
import CardsInfo from 'pages/cabinet/parts/cards/CardsInfo';
import CardsUpdate from 'pages/cabinet/parts/cards/CardsUpdate';

const ListItem = (props) => {

  const {
    listing,
    onDelete,
    onEdit,
    id
  } = props;

  return (
    <div className="resume-header vacancies-item">
      <div className="main-grid">
        <div className="col-12 ">
          <CardsUpdate update={listing.timestamp} />
        </div>
        <div className="col-2">
          <UserImg img={listing.userInfo.imgsAccount} />
        </div>

        <div className="col-5">
          <CardsInfo
            name={listing.card_name}
            text={listing.responsibilities}
            priceFrom={listing.salary_priceFrom}
            priceTo={listing.salary_priceTo}
            id={id}
          />

        </div>

        <div className="col-5">
          <UserInfo
            name={listing.userInfo.name_company}
            phone={listing.userInfo.phones_main}
            mail={listing.userInfo.email}
          />
          <Controls
            id={listing.id}
            name={listing.name}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default ListItem;