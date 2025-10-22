const root = document.getElementById("root") as HTMLElement;

const title = document.createElement("h1");
title.textContent = "ToDo List";
title.id = "title";
root.appendChild(title);

//input a new task
const inputNewTask = document.createElement("input");
inputNewTask.placeholder = "enter new task";
inputNewTask.id = "inputTask";
root.appendChild(inputNewTask);

//task list area
const todo = document.createElement("h2");
todo.id = "todoTitle";
todo.textContent = "ToDo";
root.appendChild(todo);
const taskList = document.createElement("div");
taskList.id = "taskList";
root.appendChild(taskList);

// task list complited area
const done = document.createElement("h2");
done.textContent = "Done";
done.id = "doneTitle";
root.appendChild(done);
const taskCompleted = document.createElement("div");
taskCompleted.id = "taskCompleted";
root.appendChild(taskCompleted);

// // function to save in local sorage
// function saveTask(){
//     const tasks = Array.from(taskList.children).map(task =>{

//     })
// }

//creat task 
function createTask(value: string, complited = false) {
  const task = document.createElement("div");
  task.id = "task";
  const output: HTMLSpanElement = document.createElement("span");
  output.textContent = value;

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
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
    alert("please enter a task");
    return;
  }
  createTask(value);

  inputNewTask.value = "";
}

inputNewTask.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
// submitBtn.addEventListener("click", addTask);
