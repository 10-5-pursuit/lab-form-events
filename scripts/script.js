const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

/**
 * Add an event Listener to the todoInput
 */
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const todo = createTodoItem(e.target.value);
    todoList.appendChild(todo);
    e.target.value = "";
  }
});

function createTodoItem(todo) {
  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-list__item");

  const text = document.createElement("p");
  text.classList.add("todo-list__item-text");
  text.innerText = todo;
  text.addEventListener("click", () => {
    if (text.style.textDecoration == "") {
      text.style.textDecoration = "line-through";
    } else {
      text.style.textDecoration = "";
    }
  });

  const close = document.createElement("span");
  close.classList.add("todo-list__item-delete");
  close.addEventListener("click", () => {
    close.parentElement.remove();
  });
  close.innerText = "X";

  todoItem.appendChild(text);
  todoItem.appendChild(close);

  return todoItem;
}
