const content = document.getElementById('writingpad');
const savebtn = document.getElementById('save');

savebtn.addEventListener('click', () => {
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const taskContent = content.innerHTML.replace(/&nbsp;/g, ' ').trim();

    if (taskContent !== "") {
        blogs.push({ content: taskContent });
        localStorage.setItem("blogs", JSON.stringify(blogs));
        content.innerHTML = '';
        location.reload(); // Refresh to re-render
    }
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    content.innerHTML = '';
});

function loadFromLocalStorage() {
    let storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const todoList = document.querySelector(".todo-list");

    storedBlogs.forEach((task, index) => {
        const div = document.createElement('div');
        div.classList.add('todo-item');
       

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
      checkbox.setAttribute("id", "task");
        checkbox.className = "task";
        checkbox.setAttribute("id", `task-${index}`);

        const label = document.createElement('label');
        label.setAttribute("for", `task-${index}`);
        label.innerHTML = task.content;

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "delete");
        deleteButton.innerHTML = "delete";

        deleteButton.addEventListener("click", () => {
            storedBlogs.splice(index, 1);
            localStorage.setItem("blogs", JSON.stringify(storedBlogs));
            location.reload();
        });

        div.appendChild(checkbox);
        div.appendChild(label);
        div.appendChild(deleteButton);
        todoList.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);

// Rich text formatting buttons
document.getElementById('boldButton').addEventListener('click', () => formatText('bold'));
document.getElementById('italicButton').addEventListener('click', () => formatText('italic'));
document.getElementById('underlineButton').addEventListener('click', () => formatText('underline'));

function formatText(command) {
    document.execCommand(command, false, null);
}
