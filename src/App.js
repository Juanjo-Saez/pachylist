import logo from './logo.png'
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
    <section className="section">
      <header>
        <img src={logo} alt="logo" />
      </header>
      
      <Total total={total} />
      <AddItem list={shoppingList} setList={setShoppingList} />
      <ItemList list={shoppingList} />
    </section>
  );
}

function Total({total}){
  if(total === 0){
    return null
  } 
  return <span>La dolorosa: {total} €</span>
}

export default App;
