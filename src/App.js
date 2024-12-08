import { useState } from 'react'
import logo from './logo.png';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import './App.css';

function App() {
  const [list, setList] = useState([])

  let total = 0;

  list.forEach(element => {
    total += parseInt(element.price) 
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>La dolorosa: {total} €</span>
        <hr />
        <AddItem list={list} setList={setList} />
        <hr />
        <ItemList list={list} />
      </header>
    </div>
  );
}

export default App;
