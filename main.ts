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

// //submit task
// const submitBtn = document.createElement("button");
// submitBtn.textContent = "submit task";
// submitBtn.id = "submitBtn";
// root.appendChild(submitBtn);

//task list area
const todo = document.createElement("h2")
todo.id = "todoTitle"
todo.textContent = "ToDo"
root.appendChild(todo)
const taskList = document.createElement("div");
taskList.id = "taskList";
root.appendChild(taskList);

// task list complited area
const done = document.createElement("h2")
done.textContent = "Done"
done.id = "doneTitle"
root.appendChild(done)
const taskCompleted = document.createElement("div");
taskCompleted.id = "taskCompleted";
root.appendChild(taskCompleted);

//
function addTask() {
  const value = inputNewTask.value.trim();
  if (value === "") {
    alert("please enter a task");
    return;
  }
  const task = document.createElement("div");
  task.textContent = value;

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
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
  task.appendChild(deleteTaskBtn);
  taskList.appendChild(task);

  inputNewTask.value = "";
}

inputNewTask.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
// submitBtn.addEventListener("click", addTask);
