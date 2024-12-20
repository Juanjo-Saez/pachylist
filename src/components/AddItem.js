import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddItem({ list, setList }) {
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

  function handleKey(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      createItem();
    }
  }

  function clearInputs(inputs) {
    inputs.forEach(input => input.value = "")
  }

  return (
    <div style={wrapperStyle}>
      <Form.Control style={{ margin: '0 10px', padding: '5px 0' }} id="addItemNameInput" onKeyDown={handleKey}></Form.Control>
      <Form.Control style={{ margin: '0 10px', padding: '5px 0', width: '86px' }} id="addItemPriceInput" onKeyDown={handleKey} />
      <Button onClick={ createItem }>
        +
      </Button>
    </div>
  )
}

export default AddItem
