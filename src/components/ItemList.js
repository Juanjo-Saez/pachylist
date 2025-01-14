
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function ItemList({ list }) {
  const htmlList = list.map(row)

  if(list.length === 0) return null

  return (
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <tbody>
        {htmlList}      
      </tbody>
    </table>
  )

}

function row (item){
  return(
    <tr>
      <td>{ capitalize(item.name) }</td>
      <td>{item.price + " €"}</td>
    </tr>
  )
}

export default ItemList
