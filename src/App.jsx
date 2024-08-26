import Header from "../components/Header"
import Addtodo from "../components/addtodo";
import TodoItems from "../components/TodoItems";

function App(){
   let todoItems = [{
    name : 'Buy Milk',
    dueDate : '4/10/2023'
   },
  {
    name : 'Go to College',
    dueDate : '4/10/2023'
  },
  {name : "Don't go to College",
  dueDate : '6/10/2023'}]
  return (
    <center className="container">
      <Header></Header>
      <Addtodo></Addtodo>
      <TodoItems todoItems = {todoItems}></TodoItems>
    </center>
  )
  
}

export default App;
