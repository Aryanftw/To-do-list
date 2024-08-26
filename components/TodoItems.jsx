import List from "./List"

let TodoItems = ({todoItems}) => {
  return(
    <>
    {todoItems.map((item) => (<List todoName = {item.name} todoDate = {item.dueDate}></List>))}
    </>
  )
}

export default TodoItems;