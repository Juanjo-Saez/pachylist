import React, {useState} from 'react'
import logo from './logo.png'
import { useLocalStorage } from "@uidotdev/usehooks"

function WarehousePage() {
    const [warehouse, setWarehouse] = useLocalStorage("warehouse", [])
    const [filteredList, setFilteredList] = useState(warehouse)

    function printWarehouseItem(item) {
      const prettyPrice = (item.price === 0) ? "?" : item.price  + " €" 
      return (
        <div className="cell has-background-warning-dark box is-capitalized" key={item.name}>
          {item.name}<br />{prettyPrice}
        </div>
      )
    }

    function addItemtoWarehouse() {
        const el = document.querySelector('#addItemInput')
        const name = el.value.trim().toLowerCase()
        const item = {name, price:0}
        const duplicates = warehouse.find(item => item.name === name)

        if (duplicates){
          el.classList.add("is-danger")
          return
        }
        setWarehouse([...warehouse, item])
    }

    function handleKeyDown(e) {
      if(e.key === 'Enter' || e.keyCode === 13){
        addItemtoWarehouse()
        return
      }
      const el = document.querySelector('#addItemInput')
      el.classList.remove("is-danger")
    }

    function handleKeyUp(e) {
      const el = document.querySelector('#addItemInput')

      if(el.value === "") {
        setFilteredList(warehouse)
        return 
      }
      
      const warehousefiltered = warehouse.filter(item => {
        const search = el.value
        return item.name.includes(search) ? item : undefined 
      })
      setFilteredList(warehousefiltered)
    }

    return (
      <>
      <section className="section">
        <header>
          <img src={logo} alt="logo" />
        </header>
        
        <div className="columns">
          <div className="column is-four-fifths">        
            <input 
                id="addItemInput"
                className="input is-warning"
                type="text"
                placeholder="Item"
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
            />
          </div>

          <div className="column">
            <button className="button"  onClick={ addItemtoWarehouse }>+</button>
          </div>
        </div>
      </section>
      <section className="section has-background-black-ter">
        <div className="grid">
          {filteredList.map(printWarehouseItem)}
        </div>
      </section>
      </>
    )
}

export default WarehousePage