let form = document.getElementById("todo-form")
let ul = document.getElementById("todo-list");
let input = document.getElementById("todo-input");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let li = document.createElement("li");
    li.append(document.createElement("div"));
    li.firstChild.className = "todo-text";
    li.firstChild.innerText = input.value;
    input.value = "";

    li.firstChild.addEventListener("click", () => {
        if (li.firstChild.style.color === "black"){
            li.firstChild.style.color = "grey";
            li.firstChild.style.textDecoration = "line-through";
            li.firstChild.style.textDecorationColor = "grey";
            li.firstChild.style.textDecorationThickness = "3px";
        }
        else {
            li.firstChild.style.color = "black";
            li.firstChild.style.textDecoration = "none";
        }
    });

    let deleteBtn = document.createElement('div');
    deleteBtn.className = "delete-button";
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", () => {
        deleteBtn.parentElement.remove();
    });

    li.append(deleteBtn);
    ul.append(li);
})

for (const li of ul.children) {
    li.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    });
}