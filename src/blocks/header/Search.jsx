import React from 'react'
import Switch from 'pages/catalog/parts/cardsControls/parts/Switch'; //  почему тут ?

const Search = () => {
  return (
    <div className="col-4 vertical-align">
      <div className="search-container">
        <Switch />
        <div className="search-header">
          <input className="input-decorate" type="text" placeholder="Профессия, должность или компания" />
        </div>
      </div>

    </div>
  )
}

export default Search