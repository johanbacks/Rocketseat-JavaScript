var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var btnElement = document.querySelector("#app button");

var todos = [
  "Lista 1 ",
  "Lista 2 ",
  "Lista 3" , 
];
function rederTodos() {
  listElement.innerHTML = "";

  for(todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
  }
}
rederTodos();

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = "" ;
  rederTodos();
}
btnElement.onclick = addTodo;