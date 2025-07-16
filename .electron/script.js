
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("tasklist-container");
const checkbox = li.querySelector("input");
const deleteBttn = li.querySelector(".delete-btn");
const completedCount = document.getElementById("completed-counter");
const totalCount = document.getElementById("uncompleted-counter");

function addTask() {
    const task = inputBox.value.trim();
    if(!task) {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <label>
            <input type="checkbox">
            <span>${task}</span>
        </label>
        <span class="delete-btn">X</span>
    `;

    listContainer.appendChild(li);
    inputBox.value = "";
}

checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
    updateCounter();
});

function updateCounter() {
    const completedTasks = document.querySelectorAll(".completed").length;
    const totalTasks = document.querySelectorAll("li:not(.completed").length + document.querySelectorAll(".completed").length;

    completedCount.textContent = completedTasks;
    totalCount.textCount = totalTasks;
}

deleteBttn.addEventListener("click", function() {
    li.remove();
    updateCounter();
});