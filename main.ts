const root = document.getElementById("root");
if (!root) throw new Error("root not found");
const rootTS = root as HTMLElement;

const title = document.createElement("h1");
title.textContent = "ToDo List";
title.id = "title";
root.appendChild(title);

// input a new task + label
const inputLabel = document.createElement("label");
inputLabel.textContent = "enter new task:";
inputLabel.id = "inputLabel";
inputLabel.htmlFor = "inputTask";

const inputNewTask = document.createElement("input");
inputNewTask.type = "text";
inputNewTask.id = "inputTask";
inputNewTask.placeholder = "type here";

// form for task
const taskForm = document.createElement("form");
taskForm.className = "formTask";
taskForm.appendChild(inputLabel);
taskForm.appendChild(inputNewTask);
rootTS.appendChild(taskForm);

// task list area
const todo = document.createElement("h2");
todo.className = "section-title";
todo.textContent = "ToDo";
root.appendChild(todo);

const taskList = document.createElement("ul");
taskList.className = "task-area";
root.appendChild(taskList);

// task list completed area
const done = document.createElement("h2");
done.textContent = "Done";
done.className = "section-title";
root.appendChild(done);

const taskCompleted = document.createElement("ul");
taskCompleted.className = "task-area";
root.appendChild(taskCompleted);

// counter for unique id
let taskCounter = 0;

// create a single task
function createTask(value: string) {
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
      task.style.color = "";
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
  editBtn.addEventListener("click", () => {
    const originalText = label.textContent || "";
    if (editBtn.textContent === "Edit") {
      label.contentEditable = "true";
      label.focus();
      editBtn.textContent = "Save";

      const handleKey = (event: KeyboardEvent) => {
        if (event.key === "Enter") {
          event.preventDefault();
          label.contentEditable = "false";
          editBtn.textContent = "Edit";
          label.removeEventListener("keydown", handleKey);
        }
        if (event.key === "Escape") {
          event.preventDefault();
          label.textContent = originalText;
          label.contentEditable = "false";
          editBtn.textContent = "Edit";
          label.removeEventListener("keydown", handleKey);
        }
      };
      label.addEventListener("keydown", handleKey);
    } else {
      label.contentEditable = "false";
      editBtn.textContent = "Edit";
      if (label.textContent?.trim() === "") label.textContent = originalText;
    }
  });

  task.appendChild(checkBox);
  task.appendChild(label);
  task.appendChild(editBtn);
  task.appendChild(deleteTaskBtn);

  taskList.appendChild(task);
}

// add task
function addTask() {
  const value = inputNewTask.value.trim();

  // remove old error if exists
  const existingError = taskForm.querySelector("span");
  if (existingError) existingError.remove();

  const errorMsg = document.createElement("span");
  errorMsg.style.color = "red";
  errorMsg.setAttribute("aria-live", "polite");
  taskForm.appendChild(errorMsg);

  if (value === "") {
    inputNewTask.setAttribute("aria-invalid", "true");
    errorMsg.textContent = "please enter a value";
    inputNewTask.focus();
    return;
  }

  inputNewTask.removeAttribute("aria-invalid");
  errorMsg.textContent = "";

  createTask(value);

  inputNewTask.value = "";
  inputNewTask.focus();
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});
