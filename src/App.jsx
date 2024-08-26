import Header from "../components/Header";
import Addtodo from "../components/addtodo";
import TodoItems from "../components/TodoItems";
import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (newItem, dueDate) => {
    const newtodoItems = [
      ...todoItems,
      { name: newItem, dueDate: dueDate },
    ];
    setTodoItems(newtodoItems);
  };

  const handleDeleteItem = (itemName) => {
    const newtodoItems = todoItems.filter((item) => item.name != itemName)
    setTodoItems(newtodoItems)
  }
  return (
    <center className="container">
      <Header></Header>
      <Addtodo onNewItem={handleNewItem}></Addtodo>
      {todoItems.length === 0 && <Welcome />}

      <TodoItems todoItems={todoItems} onDeleteItem = {handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
