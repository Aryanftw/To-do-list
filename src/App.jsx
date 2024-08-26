import Header from "../components/Header"
import Addtodo from "../components/addtodo";
import TodoItems from "../components/TodoItems";
import React, { useEffect, useState } from "react";

function App(){
   let initialtodoItems = [{
    name : 'Buy Milk',
    dueDate : '4/10/2023'
   },
  {
    name : 'Go to College',
    dueDate : '4/10/2023'
  },
  {name : "Don't go to College",
  dueDate : '6/10/2023'}]
  const [todoItems, setTodoItems] = useState(initialtodoItems);
  const handleNewItem = (newItem , dueDate) => {
         console.log(newItem,dueDate)
  }
  return (
    <center className="container">
      <Header></Header>
      <Addtodo onNewItem = {handleNewItem}></Addtodo>
      <TodoItems todoItems = {todoItems}></TodoItems>
    </center>
  )
  
}

export default App;
