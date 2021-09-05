const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.querySelector("#todoList");

todoForm.addEventListener("submit", actAddTodo);

function actAddTodo(e) {
  e.preventDefault();
  const newTodoObj = {
    text: todoInput.value,
    s,
  };
  todoInput.value = "";
  toDos.push(newTodoObj);
  makeLine(newTodoObj);
  saveTodo();
}

let toDos = [];
const TODO_KEY = "todoskey";

function makeLine(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const closeBtn = document.createElement("button");
  closeBtn.innerText = "X";
  closeBtn.addEventListener("click", actDelete);

  li.appendChild(span);
  li.appendChild(closeBtn);
  todoList.appendChild(li);
}

function actDelete(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  console.log(toDos, li.id);
  saveTodo();
}

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

const getSaved = localStorage.getItem(TODO_KEY);

if (getSaved !== null) {
  const parsetdToDos = JSON.parse(getSaved);
  toDos = parsetdToDos;
  parsetdToDos.forEach(makeLine);
}
