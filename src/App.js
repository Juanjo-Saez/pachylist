import { useState } from 'react'
import logo from './logo.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ItemList from './components/ItemList';

import './App.css';

const priority = {
  low: "low",
  mid: "mid",
  high: "high",
}

function App() {
  const [list, setList] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddItemForm list={list} setList={setList} />
        <hr />
        <ItemList list={list} />
      </header>
    </div>
  );
}

function AddItemForm({ list, setList }) {
  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '2px',
  }

  const createItem = () => {
    const nameEl = document.querySelector('#addItemNameInput')
    const priceEl = document.querySelector('#addItemPriceInput')
    const name = nameEl.value
    const price = priceEl.value
    const defaultPriority = priority.mid

    const badParams = !name || !price || isNaN(price)

    if (badParams) return;

    const newItem = { name, price, priority: defaultPriority }
    setList([...list, newItem])

    clearInputs([ nameEl, priceEl ])
  }

  function clearInputs(inputs) {
    inputs.forEach(input => input.value = "")
  }

  return (
    <div style={wrapperStyle}>
      <Form.Control style={{ margin: '0 10px', padding: '5px 0' }} id="addItemNameInput" />
      <Form.Control style={{ margin: '0 10px', padding: '5px 0', width: '86px' }} id="addItemPriceInput" />
      <Button onClick={ createItem }>+</Button>
    </div>
  )
}

export default App;
