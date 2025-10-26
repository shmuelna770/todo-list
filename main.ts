const root = document.getElementById("root");
if (!root) throw new Error("root not found");
const rootTS = root as HTMLElement;

const title = document.createElement("h1");
title.textContent = "ToDo List";
title.id = "title";
root.appendChild(title);

//input a new task + lable
const inputLable = document.createElement("label");
inputLable.textContent = "enter new task:";
inputLable.id = "inputLabel";
inputLable.htmlFor = "inputTask";

const inputNewTask = document.createElement("input");
inputNewTask.type = "text";
inputNewTask.id = "inputTask";
inputNewTask.placeholder = "type here";

const taskForm = document.createElement("form");
taskForm.className = "formTask";
taskForm.appendChild(inputLable);
taskForm.appendChild(inputNewTask);
rootTS.appendChild(taskForm);

//task list area
const todo = document.createElement("h2");
todo.className = "section-title";
todo.textContent = "ToDo";
root.appendChild(todo);
const taskList = document.createElement("ul");
taskList.className = "task-area";
root.appendChild(taskList);

// task list complited area
const done = document.createElement("h2");
done.textContent = "Done";
done.className = "section-title";
root.appendChild(done);
const taskCompleted = document.createElement("ul");
taskCompleted.className = "task-area";
root.appendChild(taskCompleted);

// counter for task unique id
let taskCounter = 0;
//
function addTask() {
  const value = inputNewTask.value.trim();

  const existingError = taskForm.querySelector("span");
  if (existingError) existingError.remove();

  const errorMsg = document.createElement("span");
  errorMsg.style.color = "red";
  errorMsg.setAttribute("aria-live", "polite");
  taskForm.appendChild(errorMsg);
  if (value.trim() === "") {
    inputNewTask.setAttribute("aria-invalid", "true");
    errorMsg.textContent = "please enter a value";
    inputNewTask.focus();
    return;
  }
  inputNewTask.removeAttribute("aria-invalid");
  errorMsg.textContent = "";

  const task = document.createElement("li");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = `taskCheckbox-${taskCounter++}`;

  const label = document.createElement("label");
  label.htmlFor = checkBox.id;
  label.textContent = value;
  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      taskCompleted.appendChild(task);
    } else {
      taskList.appendChild(task);
    }
  });

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.type = "button";
  deleteTaskBtn.className = "deleteBtn";
  deleteTaskBtn.textContent = "delete task";
  deleteTaskBtn.addEventListener("click", () => {
    task.remove();
  });

  task.appendChild(checkBox);
  task.appendChild(label);
  task.appendChild(deleteTaskBtn);
  taskList.appendChild(task);

  inputNewTask.value = "";
  inputNewTask.focus();
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});
