var root = document.getElementById("root");
var title = document.createElement("h1");
title.textContent = "ToDo List";
root.appendChild(title);
//
var taskList = document.createElement("div");
taskList.id = "taskList";
root.appendChild(taskList);
//
var inputNewTask = document.createElement("input");
inputNewTask.placeholder = "enter new task";
inputNewTask.id = "inputTast";
root.appendChild(inputNewTask);
//
var submitBtn = document.createElement("button");
submitBtn.textContent = "submit task";
submitBtn.id = "submitBtn";
root.appendChild(submitBtn);
//
//
function addTask() {
    var value = inputNewTask.value.trim();
    if (value === "") {
        alert("please enter a task");
        return;
    }
    var task = document.createElement("div");
    task.textContent = value;
    var deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.textContent = "x";
    deleteTaskBtn.addEventListener("click", function () {
        task.remove();
    });
    task.appendChild(deleteTaskBtn);
    taskList.appendChild(task);
    inputNewTask.value = "";
}
submitBtn.addEventListener("click", addTask);
