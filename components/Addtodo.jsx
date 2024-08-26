import React, { useEffect, useState } from "react";

function Addtodo({onNewItem}){

  const [todoName,settodoName] = useState();
  const [todoDate,settodoDate] = useState();

  const handleNamechange = (event) => {settodoName(event.target.value)}
  const handleDatechange = (event) => {settodoDate(event.target.value)}
  const handleAdd = () => {
    onNewItem(todoName,todoDate)
    settodoDate("")
    settodoName("")
  }
  return(
    <div class="container text-center">
  <div class="row">
    <div class="col-4 also">
      <input type="text" placeholder = "Enter Todo Here" value = {todoName}onChange={handleNamechange} />
    </div>
    <div class="col-4 also"><input type="date" onChange={handleDatechange} value = {todoDate} /></div>
    <div class="col-2">
    <button type="button" class="btn btn-success" onClick = {handleAdd}>Add</button>
    </div>
  </div>
</div>
  )
}

export default Addtodo;