function Addtodo(){
  return(
    <div class="container text-center">
  <div class="row">
    <div class="col-4 also">
      <input type="text" placeholder = "Enter Todo Here" />
    </div>
    <div class="col-4 also"><input type="date" /></div>
    <div class="col-2">
    <button type="button" class="btn btn-success">Add</button>
    </div>
  </div>
</div>
  )
}

export default Addtodo;