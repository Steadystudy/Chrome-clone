const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "toDos";
let toDos = [];

const deleteToDo = (event) => {
  const li = event.target.parentNode;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  savedToDo();
};

const savedToDo = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const paintToDo = (newToDo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.id = newToDo.id;
  span.innerText = newToDo.text;
  button.innerText = "❌";
  button.classList.add("deleteBtn");
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const handleToDo = (event) => {
  event.preventDefault();
  const toDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: toDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  savedToDo();
};

const localStorageToDo = localStorage.getItem(TODOS_KEY);

if (localStorageToDo) {
  const parsedToDo = JSON.parse(localStorageToDo);
  toDos = parsedToDo;
  parsedToDo.forEach((el) => paintToDo(el));
}

toDoForm.addEventListener("submit", handleToDo);
