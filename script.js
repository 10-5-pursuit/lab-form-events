const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById('todo-list');

todoInput.addEventListener('keypress', event => {


    if (event.key === "Enter") {
        event.preventDefault();

        const ele = document.createElement('li');
        ele.innerHTML = event.target.value;
        todoList.append(ele);

        let del = document.createElement("button");
        del.innerHTML = "\u00d7";
        ele.appendChild(del);

        del.addEventListener('click', (event) => {
            todoList.removeChild(ele);
        });

        event.target.value = '';
    }

});

todoList.addEventListener('click', event => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
});





showTask();