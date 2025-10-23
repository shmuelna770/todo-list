const root = document.getElementById("root");
if (!root) throw new Error("root not found");

const title = document.createElement("h1");
title.textContent = "ToDo List";
title.id = "title";
root.appendChild(title);

//input a new task
const label = document.createElement("label");
label.textContent = "enter new task:";
label.htmlFor = "inputTask";
root.appendChild(label);
const inputNewTask = document.createElement("input");
inputNewTask.id = "inputTask";
inputNewTask.placeholder = "enter new task";
root.appendChild(inputNewTask);

//task list area
const todo = document.createElement("h2");
todo.id = "todoTitle";
todo.textContent = "ToDo";
root.appendChild(todo);
const taskList = document.createElement("ul");
taskList.id = "task-area";
root.appendChild(taskList);

// task list complited area
const done = document.createElement("h2");
done.textContent = "Done";
done.id = "doneTitle";
root.appendChild(done);
const taskCompleted = document.createElement("ul");
taskCompleted.id = "task-area";
root.appendChild(taskCompleted);

// // function to save in local sorage
// function saveTask(){
//     const tasks = Array.from(taskList.children).map(task =>{

//     })
// }
let taskCounter = 0;
//creat task
function createTask(value: string, complited = false) {
  const task = document.createElement("li");
  task.id = "task";
  const output: HTMLSpanElement = document.createElement("span");
  output.textContent = value;

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
  deleteTaskBtn.textContent = "x";
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
  task.appendChild(output);
  task.appendChild(editBtn);
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
}

inputNewTask.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Enter") addTask();
});
