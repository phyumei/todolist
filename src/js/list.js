// import Swal from "./node_modules/sweetalert2/dist/sweetalert2.min.js";
// import { v4 as uuidv4 } from "uuid";

export const tasks = ["Call mom", "Buy groceries", "Buy cat food"];

export const createNewList = (currentTask) => {
  const list = listTemplate.content.cloneNode(true);
  list.querySelector(".list").id = "list" + Date.now();
  list.querySelector(".list-task").innerText = currentTask;
  return list;
};

export const updateTasksTotal = () => {
  const lists = document.querySelectorAll(".list");
  tasksTotal.innerText = lists.length;
};

export const updateDoneTasksTotal = () => {
  const doneLists = document.querySelectorAll(".list input:checked");
  doneTasksTotal.innerText = doneLists.length;
};

export const deleteList = (listId) => {
  const list = document.querySelector(`#${listId}`);
  if (window.confirm("Are you sure to delete ?")) {
    list.classList.add("animate__animated", "animate__fadeOutRight");
    list.addEventListener("animationend", () => {
      list.remove();
    });
  }
  // Swal.fire({
  //   title: "Are you sure you want to delete?",
  //   text: "You won't be able to revert this!",
  //   icon: "warning",
  //   showCancelButton: true,
  //   confirmButtonText: "Yes, delete it!",
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     list.classList.add("animate__animated", "animate__backOutRight");
  //     list.addEventListener("animationend", () => {
  //       list.remove();
  //     });
  //   }
  // });
};

export const editList = (listID) => {
  const list = document.querySelector(`#${listID}`);
  const listTask = list.querySelector(".list-task");
  const listEditBtn = list.querySelector(".list-edit-btn");
  const listDoneCheck = list.querySelector(".list-done-check");

  // disable edit and done buttons
  listEditBtn.setAttribute("disabled", true);
  listDoneCheck.setAttribute("disabled", true);
  const currentTask = listTask.innerText;
  const newTaskInput = document.createElement("input");
  newTaskInput.className = "border border-stone-950 px-2 py-1 w-[180px]";
  newTaskInput.value = currentTask;
  listTask.after(newTaskInput);
  newTaskInput.focus();
  listTask.classList.add("hidden");

  // re-enable disabled buttons
  newTaskInput.addEventListener("blur", () => {
    listEditBtn.removeAttribute("disabled");
    listDoneCheck.removeAttribute("disabled");

    listTask.innerText = newTaskInput.value;
    listTask.classList.remove("hidden");
    newTaskInput.remove();
  });

  newTaskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      listEditBtn.removeAttribute("disabled");
      listDoneCheck.removeAttribute("disabled");

      listTask.innerText = newTaskInput.value;
      listTask.classList.remove("hidden");
      newTaskInput.remove();
    }
  });
};

export const doneList = (list) => {
  const listTask = list.querySelector(".list-task");
  const listEditBtn = list.querySelector(".list-edit-btn");
  const listDoneCheck = list.querySelector(".list-done-check");

  listTask.classList.toggle("line-through");
  list.classList.toggle("opacity-20");
  list.classList.add("duration-200");

  list.classList.toggle("scale-90");
  if (listDoneCheck.checked) {
    listEditBtn.setAttribute("disabled", true);
  } else {
    listEditBtn.removeAttribute("disabled");
  }
};

export const addList = (text) => {
  if (text.trim()) {
    listGroup.prepend(createNewList(text));
    taskInput.value = null;
  }
};
