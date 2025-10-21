var root = document.getElementById("root");
var title = document.createElement("h1");
title.textContent = "ToDo List";
title.id = "title";
root.appendChild(title);
//input a new task
var inputNewTask = document.createElement("input");
inputNewTask.placeholder = "enter new task";
inputNewTask.id = "inputTask";
root.appendChild(inputNewTask);
// //submit task
// const submitBtn = document.createElement("button");
// submitBtn.textContent = "submit task";
// submitBtn.id = "submitBtn";
// root.appendChild(submitBtn);
//task list area
var todo = document.createElement("h2");
todo.id = "todoTitle";
todo.textContent = "ToDo";
root.appendChild(todo);
var taskList = document.createElement("div");
taskList.id = "taskList";
root.appendChild(taskList);
// task list complited area
var done = document.createElement("h2");
done.textContent = "Done";
done.id = "doneTitle";
root.appendChild(done);
var taskCompleted = document.createElement("div");
taskCompleted.id = "taskCompleted";
root.appendChild(taskCompleted);
//
function addTask() {
    var value = inputNewTask.value.trim();
    if (value === "") {
        alert("please enter a task");
        return;
    }
    var task = document.createElement("div");
    task.textContent = value;
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", function () {
        if (checkBox.checked) {
            taskCompleted.appendChild(task);
        }
        else {
            taskList.appendChild(task);
        }
    });
    var deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.textContent = "x";
    deleteTaskBtn.addEventListener("click", function () {
        task.remove();
    });
    task.appendChild(checkBox);
    task.appendChild(deleteTaskBtn);
    taskList.appendChild(task);
    inputNewTask.value = "";
}
inputNewTask.addEventListener("keydown", function (e) {
    if (e.key === "Enter")
        addTask();
});
// submitBtn.addEventListener("click", addTask);
