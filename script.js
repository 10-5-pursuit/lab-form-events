
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const todoText = todoInput.value;
  if (todoText !== "") {
    addTodoItem(todoText);
    todoInput.value = "";
  }
});

function addTodoItem(text) {
  const todoItem = document.createElement("li");
  todoItem.innerText = text;
  todoItem.classList.add("todo-item");

  const deleteButton = document.createElement("span");
  deleteButton.innerText = "X";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function(event) {
    event.stopPropagation();
    todoItem.remove();
  });

  todoItem.appendChild(deleteButton);

  todoItem.addEventListener("click", function() {
    todoItem.classList.toggle("completed");
  });

  todoList.appendChild(todoItem);
}

  