import { useState } from 'react'
import logo from './logo.png';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import './App.css';

function App() {
  const [list, setList] = useState([])

  let total = 0;

  list.forEach(element => {
    total += parseFloat(element.price) 
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Total total={total} />
        <hr />
        <AddItem list={list} setList={setList} />
        <hr />
        <ItemList list={list} />
      </header>
    </div>
  );
}

function Total({total}){
  if(total === 0){
    return null
  } 
  return <span>La dolorosa: {total} €</span>
}

export default App;
