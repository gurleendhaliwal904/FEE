// // const { createElement } = require("react");
// // TODO APP
// (function(){

//       // DATA
//     const todos=JSON.parse(localStorage.getItem("todos"))||[];
//      // UI ELEMENTS

//     const todoconatiner=document.getElementById("todo");

//     const todoinput=document.createElement("input");
//     todoinput.placeholder="enter task.....";
//     todoinput.type="text";

//     const addbtn=document.createElement("button");
//     addbtn.textContent="ADD";

//     const todolist=document.createElement("div");
//     todoconatiner.append(todoinput,addbtn,todolist);
//     // LOCAL STORAGE
//     function saveTodos(){
//     localStorage.setItem("todos", JSON.stringify(todos));
// }
    
// // RENDER EXISTING TODOS
//     todos.forEach(function(task){
//     rendertask(task);
// });
//   // RENDER A SINGLE TODO
//     function rendertask(task){
//            // Create Todo Card
//         const todoitem=document.createElement("div");
//         todoitem.style.border="2px solid blue";
//         todoitem.style.margin="20px";

//           // Task Text
//         const p=document.createElement("p");
//         p.textContent=task;

//           // Delete Button
//         const deletebtn=document.createElement("button");
//         deletebtn.textContent="delete";

//         deletebtn.addEventListener("click",function(){
//             const index=todos.indexOf(task);
//             todos.splice(index,1);
//             saveTodos();     
//             todoitem.remove();
//         })

//          // Edit Button
//         const editbtn=document.createElement("button");
//         editbtn.textContent="EDIT";

//         editbtn.addEventListener("click",function(){
//             const editinput=document.createElement("input");
//             editinput.value=task;

//             const savebtn=document.createElement("button");
//             savebtn.textContent="SAVE";

//             todoitem.prepend(editinput,savebtn);
//             editinput.focus();

//             // const completionbtn=document.createElement("button");
//             // cbtn.textContent="Complete";
//             // cbtn.addEventListener("click",function(){
//             //     cbtn.style.backgroundColor="palegreen";
//             //     cbtn.remove();

//             // })
//              // Save Edited Todo
//             savebtn.addEventListener("click",function(){
//                 const updatedtask=editinput.value;
//                 if(!updatedtask){
//                     return;
//                 }
//                 p.textContent=updatedtask;
//                 const index=todos.indexOf(task);
//                 todos[index]=updatedtask;
//                 saveTodos();   

//                editbtn.remove();
//                savebtn.remove();
                                              
//             })
//         })
//             // Add Elements to Todo Card
//         todoitem.prepend(p,deletebtn,editbtn);
//         todolist.prepend(todoitem);

//     }
//      // ADD NEW TODO
//     function addtodo(){
//         const task = todoinput.value;
//         //  if(!task){return;}
//         todos.unshift(task);
//         saveTodos();
//         console.log(todos);
        
//         rendertask(task);
//         todoinput.value="";
//         todoinput.focus();
//     }
//     // EVENT LISTENERS
//     addbtn.addEventListener("click",addtodo);
//     todoinput.addEventListener("keydown",function(e){
//         console.log(e);
//          if(e.key==="Enter"){
//             addtodo();
//         }
//     });

// })();
// // add edit functionality 

const todoContainer = document.getElementById("todo");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const remainingCount = document.getElementById("remainingCount");
const completedCount = document.getElementById("completedCount");

let tasks = JSON.parse(localStorage.getItem("todoTasks") || "[]");
let currentSearch = "";

function saveTasks() {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}

function updateStats() {
  const completed = tasks.filter((task) => task.completed).length;
  const remaining = tasks.length - completed;
  remainingCount.textContent = `${remaining} task${remaining === 1 ? "" : "s"} remaining`;
  completedCount.textContent = `${completed} completed`;
}

function renderTasks() {
  const filtered = tasks.filter((task) =>
    task.text.toLowerCase().includes(currentSearch.toLowerCase())
  );

  todoContainer.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "no-tasks";
    empty.textContent = currentSearch
      ? "No tasks match your search."
      : "No tasks yet. Add something to get started.";
    todoContainer.appendChild(empty);
    updateStats();
    return;
  }

  filtered.forEach((task) => {
    const card = document.createElement("div");
    card.className = "task-card";
    card.dataset.id = task.id;

    const info = document.createElement("div");
    info.className = "task-info";

    const check = document.createElement("button");
    check.className = `task-check${task.completed ? " completed" : ""}`;
    check.type = "button";
    check.setAttribute("aria-label", "Toggle complete");
    check.innerHTML = task.completed ? "✓" : "";
    info.appendChild(check);

    const text = document.createElement("span");
    text.className = `task-text${task.completed ? " completed" : ""}`;
    text.textContent = task.text;
    info.appendChild(text);

    const actions = document.createElement("div");
    actions.className = "action-buttons";

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "action-btn toggle";
    toggleBtn.type = "button";
    toggleBtn.dataset.action = "toggle";
    toggleBtn.textContent = task.completed ? "Undo" : "Complete";
    actions.appendChild(toggleBtn);

    const editBtn = document.createElement("button");
    editBtn.className = "action-btn edit";
    editBtn.type = "button";
    editBtn.dataset.action = "edit";
    editBtn.textContent = "✎";
    editBtn.title = "Edit task";
    actions.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "action-btn delete";
    deleteBtn.type = "button";
    deleteBtn.dataset.action = "delete";
    deleteBtn.textContent = "🗑";
    deleteBtn.title = "Delete task";
    actions.appendChild(deleteBtn);

    card.appendChild(info);
    card.appendChild(actions);
    todoContainer.appendChild(card);

    check.addEventListener("click", () => toggleComplete(task.id));
  });

  updateStats();
}

function addTask(text) {
  tasks.unshift({
    id: Date.now().toString(),
    text: text.trim(),
    completed: false,
  });
  saveTasks();
  renderTasks();
}

function editTask(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return;
  const updated = prompt("Edit task", task.text);
  if (updated === null) return;
  const trimmed = updated.trim();
  if (!trimmed) return;
  task.text = trimmed;
  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((item) => item.id !== id);
  saveTasks();
  renderTasks();
}

function toggleComplete(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return;
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = taskInput.value.trim();
  if (!value) return;
  addTask(value);
  taskInput.value = "";
});

searchInput.addEventListener("input", () => {
  currentSearch = searchInput.value;
  renderTasks();
});

clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  currentSearch = "";
  renderTasks();
  taskInput.focus();
});

todoContainer.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const card = button.closest(".task-card");
  const id = card?.dataset.id;
  const action = button.dataset.action;
  if (!id || !action) return;

  if (action === "edit") editTask(id);
  if (action === "delete") deleteTask(id);
  if (action === "toggle") toggleComplete(id);
});

renderTasks();