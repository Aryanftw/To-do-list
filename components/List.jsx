function List({todoName,todoDate , ondeleteItem}){
  return(

    <div class="container text-center">
    <div class="row">
      <div class="col-4 also">
       {todoName}
      </div>
      <div class="col-4 also">{todoDate}</div>
      
      
      
      <div class="col-2">
      <button type="button" class="btn btn-danger" onClick={() => ondeleteItem(todoName)}>Delete</button>
      </div>
    </div>
  </div> 


  )
}


export default List;