// Select Elements
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let delB = document.querySelector(".del");
let arrayOfTasks = [];

// Check If There Is Tasks In Local Storage
if (window.localStorage.getItem("tasks")) {
  arrayOfTasks[0] = JSON.parse(window.localStorage.getItem("tasks"));
}

getDataFromLocalStorage();

submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value);
    input.value = "";
  }
};

tasks.addEventListener("click", (e) => {
  // delete button
  if (e.target.classList.contains("del")) {
    // remove Task From Local Storage
    // remove Element from page
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("task")) {
    // toggle completed for the task
    toggleTaskWithId(e.target.getAttribute("data-id"));

    e.target.classList.toggle("done");
  }
});

function addTaskToArray(taskText) {
  // task data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  // push to arrayOfTasks
  arrayOfTasks.push(task);
  // add tasks to page
  addElementsToPageFrom(arrayOfTasks);
  // add task to local storage
  addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  // empty tasks div
  tasks.innerHTML = "";
  // Looping On Array Of tasks
  arrayOfTasks.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    // check if task completed
    if (task.completed === true) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    console.log(div);
    // create delete button
    let span = document.createElement("span");
    span.className = "del";
    div.appendChild(span);
    let myI = document.createElement("i");
  myI.innerHTML='X'
    span.appendChild(myI);
    // append to tasks div
    tasks.appendChild(div);
  });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("task", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("task");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleTaskWithId(taskId) {
  for (let k = 0; k < arrayOfTasks.length; k++) {
    if (arrayOfTasks[k].id == taskId) {
      arrayOfTasks[k].completed == false
        ? arrayOfTasks[k].completed == true
        : arrayOfTasks[k].completed == false;
    }
  }
  addDataToLocalStorageFrom(arrayOfTasks);
}
