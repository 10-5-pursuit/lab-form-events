///ACESS OUR FORM AND OUR INPUT BOX THAT WE ARE GOING TO MANIPULATE

const inputBox = document.getElementById('todo-input');
const form = document.querySelector('.todo-form');
const list = document.querySelector('.todo-list');

/// function
function createListItem () {
// create textinput and assign whatever is put inside the input box's value
  const textInput = inputBox.value;
  // create list element 
  const listItem = document.createElement('li');
  //add text content to the list and assign it to textInput
  listItem.textContent = textInput;
  // create a id for our list item
  listItem.setAttribute('id', 'todo-list__listItem')
  //add listItems to our overall list 
  list.appendChild(listItem);
  
  
  createDeleteButton(listItem);
  handleStrikeThrough(listItem);
}
 
/// create delete button X

function createDeleteButton(listItem) {
  const deleteButton = document.createElement('span');
  deleteButton.textContent = 'x';
  listItem.appendChild(deleteButton);
  
  deleteButton.addEventListener('click', function () {
    listItem.remove();
  })
}

function handleStrikeThrough(listItem){
  listItem.style.cursor = 'pointer';fi
  listItem.addEventListener('click', function () {
     if(listItem.style.textDecoration === 'line-through'){
      listItem.style.textDecoration = 'none'
     }
     else {
      listItem.style.textDecoration = 'line-through'
     }
  })
}


  
function handleSubmit(event) {
  event.preventDefault();
  if(inputBox.value.trim() != ''){
      createListItem();
  }


 
  inputBox.value = '';
}


// Event listener
form.addEventListener('submit', handleSubmit)

