const root = document.getElementById("root");
if (!root) throw new Error("root not found");

const title = document.createElement("h1");
title.textContent = "ToDo List";
title.id = "title";
root.appendChild(title);

//input a new task + lable
const lable = document.createElement("label");
lable.textContent = "enter new task:";
lable.htmlFor = "inputTask";
root.appendChild(lable);
const inputNewTask = document.createElement("input");
inputNewTask.id = "inputTask";
inputNewTask.placeholder = "type here";
root.appendChild(inputNewTask);

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
  if (value === "") {
    inputNewTask.setAttribute("aria-invalid", "true");
    inputNewTask.placeholder = "please enter a value";
    return;
  }
  inputNewTask.removeAttribute("aria-invalid");
  inputNewTask.placeholder = "type here";

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
  deleteTaskBtn.textContent = "x";
  deleteTaskBtn.addEventListener("click", () => {
    task.remove();
  });

  task.appendChild(checkBox);
  task.appendChild(label);
  task.appendChild(deleteTaskBtn);
  taskList.appendChild(task);

  inputNewTask.value = "";
}

inputNewTask.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Enter") addTask();
});
