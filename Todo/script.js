const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const filters = document.querySelector(".filters");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";
renderTodos();

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    const text = todoInput.value.trim();
    if (text === "") {
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(todo);

    saveTodos();

    todoInput.value = "";
    renderTodos();
}

function saveTodos() {

    localStorage.setItem("todos", JSON.stringify(todos));

}

function renderTodos() {
    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {

        filteredTodos = todos.filter(function(todo) {
            return !todo.completed;
        });
    }

    if (currentFilter === "completed") {

        filteredTodos = todos.filter(function(todo) {
            return todo.completed;
        });

    }

    filteredTodos.forEach(function(todo) {

        const li = document.createElement("li");

        li.classList.add("todo-item");

        if (todo.completed) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            <input
                type="checkbox"
                data-action="complete"
                data-id="${todo.id}"
                ${todo.completed ? "checked" : ""}
            >

            <span class="todo-text">
                ${todo.text}
            </span>

            <button
                class="delete-btn"
                data-action="delete"
                data-id="${todo.id}"
            >
                Delete
            </button>
        `;


        todoList.appendChild(li);

    });

}

todoList.addEventListener("click", function(event) {

    const target = event.target;
    const action = target.dataset.action;
    const id = Number(target.dataset.id);

    if (!action) {
        return;
    }

    if (action === "complete") {

        const todo = todos.find(function(todo) {
            return todo.id === id;
        });


        if (!todo) {
            return;
        }

        todo.completed = target.checked;

        saveTodos();
        renderTodos();
        return;
    }

    if (action === "delete") {

        todos = todos.filter(function(todo) {
            return todo.id !== id;
        });

        saveTodos();
        renderTodos();

    }

});

filters.addEventListener("click", function(event) {
    const filter = event.target.dataset.filter;

    if (!filter) {
        return;
    }

    currentFilter = filter;

    const buttons = filters.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    event.target.classList.add("active");
    renderTodos();

});