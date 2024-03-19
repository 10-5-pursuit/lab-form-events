const todoInput  = document.getElementById("todo-input");
const todoList = document.getElementById('todo-list');

const todoListItems =[];

todoInput.addEventListener('keypress', function (e){
    if(e.key === "Enter"){
        e.preventDefault();
        const todo = e.target.value;
        todoListItems.push(todo);
        console.log('todo list:', todoListItems)
        
        const todoListEle = document.getElementById('todo-list')

        const createListEle = document.createElement('li')

        createListEle.append(todo)

        todoListEle.append(createListEle)

        e.target.value = '';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.type = 'button';
        deleteBtn.classList.add("delete-btn")
        createListEle.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', (e) => {
            todoList.removeChild(createListEle);
        });
    }

    
});

todoList.addEventListener('click', (e) => {
    if(e.target.matches('li')) {
        e.target.classList.toggle("completed")
    }
});

deleteBtn.addEventListener('click', (e) => {
    todoList.removeChild(createListEle);
});