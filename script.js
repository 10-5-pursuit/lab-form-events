let form = document.getElementById("todo-form")
let ul = document.getElementById("todo-list");
let input = document.getElementById("todo-input");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    li.append(document.createElement("div"));
    li.firstChild.className = "todo-text";
    li.firstChild.innerText = input.value;
    let li = document.createElement("li");
    let deleteX = document.createElement('div');
    input.value = "";

    li.addEventListener("click", () => {
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

    deleteX.className = "delete-X";
    deleteX.innerText = "X";
    deleteX.addEventListener("click", () => {
        deleteX.parentElement.remove();
    });
    li.append(deleteX);
    ul.append(li);
})
for (const li of ul.children) {
    li.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    });
}