const createTodoButton = document.querySelector(".create-todo-button");

createTodoButton.addEventListener("click", passValue);

function passValue() {
    let todoInputName = document.getElementById("full-name").value;
    localStorage.setItem("fullName", todoInputName);
    return false;
}
