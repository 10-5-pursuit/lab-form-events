// // document is our webpage

// // get the todo input
// const todoInput = document.getElementById('todo-input');

// const todoListItems = [];

// // add an event listener to the todoInput
// todoInput.addEventListener('keypress', function (e) {

//   // if the keypress is the enter key
//   if (e.key === 'Enter') {
//     // tell the input to NOT do what it would usually do
//     e.preventDefault();

//     //get the text in the input
//     const todo = e.target.value
//     todoListItems.push(todo);
//     console.log('todo List:', todoListItems);

//     //get the ul in the document (our place to put todos)
//     const todoListEle = document.getElementById('todo-list');

//     //create a new li element that is empty
//     const createListEle = document.createElement('li');

//     //put todo text from line 17 inside the li element
//     createListEle.append(todo);

//     //add the list item to the end of the ul
//     todoListEle.append(createListEle);
    
//     // empty the input so we are ready to add a new item
//     e.target.value = ''
//   }
// })

// ----
// document.addEventListener('DOMContentLoaded', function () {
//     // Get the todo input and todo list
//     const todoInput = document.getElementById('todo-input');
//     const todoList = document.getElementById('todo-list');
  
//     // Function to add a new todo item
//     function addTodoItem(text) {
//       // Create a new list item
//       const listItem = document.createElement('li');
//       listItem.textContent = text;
  
//       // Add a class to the list item
//       listItem.classList.add('todo-item');
  
//       // Append the list item to the todo list
//       todoList.appendChild(listItem);
  
//       // Add event listener to delete the todo item when clicked
//       listItem.addEventListener('click', function () {
//         listItem.remove();
//       });
//     }
  
//     // Event listener for adding a new todo item when pressing enter
//     todoInput.addEventListener('keypress', function (e) {
//       if (e.key === 'Enter') {
//         e.preventDefault();
//         const text = todoInput.value.trim();
//         if (text !== '') {
//           addTodoItem(text);
//           todoInput.value = '';
//         }
//       }
//     });
  
//     // Add strike-through functionality for completed tasks
//     todoList.addEventListener('click', function (e) {
//       if (e.target.classList.contains('todo-item')) {
//         e.target.classList.toggle('completed');
//       }
//     });
//   });
  

//   // Add strike-through functionality for completed tasks
// todoList.addEventListener('click', function (e) {
//     // Check if the clicked element is a todo item
//     if (e.target.classList.contains('todo-item')) {
//       // Toggle the 'completed' class on the clicked element
//       e.target.classList.toggle('completed');
//     }
//   });
  
// ----
//Html element variables
const input = document.getElementById('todo-input');
const form = document.querySelector('.todo-form');
const list = document.querySelector('.todo-list');

//Functions
const createListItem = () => {
  const textInput = input.value;
  const listItem = document.createElement('li');
  listItem.textContent = textInput;
  // listItem.classList.add('listItem');
  listItem.setAttribute('class', 'listItem');
  list.appendChild(listItem);

  createDeleteButton(listItem);
  handleStrikeThrough(listItem);
}

const createDeleteButton = (listItem) => {

  const deleteButton = document.createElement('span');
  deleteButton.addEventListener('click', () => {
    listItem.remove();
  })
  deleteButton.textContent = 'x';
  listItem.append(deleteButton);
}

const handleStrikeThrough = (listItem) => {
  listItem.style.cursor = 'pointer';
  listItem.addEventListener('click', () => {
    if (listItem.style.textDecoration === 'line-through') {
      listItem.style.textDecoration = 'none';
    } else {
      listItem.style.textDecoration = 'line-through';
    }

  })
}

const handleSubmit = (event) => {
  event.preventDefault();
  if (input.value.trim() !== '') {
  // console.log(input.value);
createListItem();
  } else {
    const message = document.createElement('p');
    message.setAttribute('class', 'message')
    list.append(message);
    message.textContent = 'Please input valid text';
    message.style.color = 'red';
  }

  input.value = '';
  // console.log(listItem);

  }
 




//Event listeners
form.addEventListener('submit', handleSubmit);

