import List from "./List"

let TodoItems = ({todoItems , onDeleteItem}) => {
  return(
    <>
    {todoItems.map((item) => (<List todoName = {item.name} todoDate = {item.dueDate} ondeleteItem = {onDeleteItem}></List>))}
    </>
  )
}

export default TodoItems;