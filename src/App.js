import logo from './logo.png';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import './App.css';
import { useLocalStorage } from '@uidotdev/usehooks';

function App() {
  const [shoppingList, setShoppingList] = useLocalStorage("shoppingList", [])

  let total = 0;

  shoppingList.forEach(element => {
    total += parseFloat(element.price) 
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Total total={total} />
        <hr />
        <AddItem list={shoppingList} setList={setShoppingList} />
        <hr />
        <ItemList list={shoppingList} />
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
