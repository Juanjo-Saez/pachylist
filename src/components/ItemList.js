import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function ItemList({ list }) {
  const itemToHtml = item => <Item item={item} key={item.name} />
  const htmlList = list.map(itemToHtml)

  if(list.length === 0) return null

  return (
    <Card>
      <ListGroup variant="flush">
        { htmlList }
      </ListGroup>
    </Card>)
}

function Item({ item }) {
  return (
    <ListGroup.Item>
      <span>{ capitalize(item.name) } </span>
      <span>{item.price}€</span>
    </ListGroup.Item>
  )
}

export default ItemList
