import CardsList from 'pages/catalog/parts/CardsList';
import CardsControls from 'pages/catalog/parts/cardsControls/CardsControls';

import { connect } from 'react-redux';

const Catalog = (props) => {
  return (
    <div>
      <CardsControls />
      <div className="main-full">
        <div className="breadcrumbs"><a href="#">Главная</a><span>/</span>
          <a href="#">Категория</a><span>/</span><span>Резюме список</span></div>
      </div>
      <div className="content">
        <div className="main-full">
          {props.listingType === 'resume' ? (<h1>Резюме список</h1>) : <h1>Вакансии список</h1>}

        </div>
        <div className="main-grid">
          <div className="col-10">
            <CardsList />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    listingType: state.listingTypeReducer,
  }
}



export default connect(mapStateToProps)(Catalog);
