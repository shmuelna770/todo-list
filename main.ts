const root = document.getElementById("root") as HTMLElement;

const title = document.createElement("h1");
title.textContent = "ToDo List";
root.appendChild(title);

//
const taskList = document.createElement("div");
taskList.id = "taskList";
root.appendChild(taskList);

//
const inputNewTask = document.createElement("input");
inputNewTask.placeholder = "enter new task";
inputNewTask.id = "inputTast";
root.appendChild(inputNewTask);

//
const submitBtn = document.createElement("button");
submitBtn.textContent = "submit task";
submitBtn.id = "submitBtn";
root.appendChild(submitBtn);

//

//
function addTask() {
  const value = inputNewTask.value.trim();
  if (value === "") {
    alert("please enter a task");
    return;
  }
  const task = document.createElement("div");
  task.textContent = value;

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.textContent = "x";
  deleteTaskBtn.addEventListener("click", () => {
    task.remove();
  });

  task.appendChild(deleteTaskBtn);
  taskList.appendChild(task);

  inputNewTask.value = "";
}


submitBtn.addEventListener("click", addTask);
