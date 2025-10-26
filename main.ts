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
      task.style.color = "grey";
    } else {
      taskList.appendChild(task);
      task.style = "None";
    }
  });

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.type = "button";
  deleteTaskBtn.className = "deleteBtn";
  deleteTaskBtn.textContent = "delete task";
  deleteTaskBtn.addEventListener("click", () => {
    task.remove();
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.id = "editBtn";
  editBtn.addEventListener("click", () => {
    const orginaltext = output.textContent;
    if (editBtn.textContent === "Edit") {
      output.contentEditable = "true";
      output.focus();
      editBtn.textContent = "save";
      output.addEventListener("keydown", function handleSave(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          output.contentEditable = "false";
          editBtn.textContent = "Edit";
        }
        if (event.key === "Escape") {
          event.preventDefault();
          output.textContent = orginaltext;
          output.contentEditable = "false";
          editBtn.textContent = "Edit";
        }
      });
    } else {
      task.contentEditable = "false";
      editBtn.textContent = "Edit";
    }
  });

  task.appendChild(checkBox);
  task.appendChild(label);
  task.appendChild(deleteTaskBtn);

  if (complited) {
    taskCompleted.appendChild(task);
    task.style.color = "grey";
  } else {
    taskList.appendChild(task);
  }
  taskList.appendChild(task);
}

//
function addTask() {
  const value = inputNewTask.value.trim();
  if (value === "") {
    inputNewTask.setAttribute("aria-invalid", "true");
    inputNewTask.placeholder = "please enter a value";
    return;
  }
  inputNewTask.removeAttribute("aria-invalid");
  inputNewTask.placeholder = "enter new task";

  createTask(value);

  inputNewTask.value = "";
  inputNewTask.focus();
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});
