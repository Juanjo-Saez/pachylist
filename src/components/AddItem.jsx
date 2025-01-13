import React, {useState} from 'react'


function AddItem({ list, setList }) {
  const [showDropdown, setShowDropdown] = useState(false)
  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '2px',
  }

  const createItem = () => {
    const nameEl = document.querySelector('#addItemNameInput')
    const priceEl = document.querySelector('#addItemPriceInput')
    const name = nameEl.value
    const price = priceEl.value.replace(",",".");
    const badParams = !name || !price || isNaN(price)

    if (badParams) return;

    const newItem = { name, price }

    setList([...list, newItem])

    clearInputs([ nameEl, priceEl ])
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.keyCode === 13)
      createItem();
  }

  function handleKeyUp(e) {
    setShowDropdown(e.target.value)
  }

  function clearInputs(inputs) {
    inputs.forEach(input => input.value = "")
  }
  let dropDownClassName = 'column is-three-fifths dropdown'
  if (showDropdown)
    dropDownClassName += ' is-active'
  return (
    <div className="columns" style={wrapperStyle}>
      <div className={dropDownClassName}>
        <div className="dropdown-trigger">
          <input 
            id="addItemNameInput"
            className="input is-warning"
            type="text"
            placeholder="Item"
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
          />
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item"> Dropdown item </a>
            <a className="dropdown-item"> Other dropdown item </a>
            <a href="#" className="dropdown-item is-active"> Active dropdown item </a>
            <a href="#" className="dropdown-item"> Other dropdown item </a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item"> With a divider </a>
          </div>
        </div>
      </div>
      <div className="column">
        <input 
          id="addItemPriceInput"
          className="input is-warning"
          type="text"
          placeholder="€"
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="column has-text-left">
        <button className="button" onClick={ createItem }>
          +
        </button>
      </div>
    </div>
  )
}

export default AddItem
