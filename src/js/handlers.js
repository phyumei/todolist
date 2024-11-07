import { addList, deleteList, doneList, editList } from "./list.js";
import { listGroup } from "./selectors.js";

export const listGroupHandler = (event) => {
  const list = event.target.closest(".list");
  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("list-edit-btn")) {
    editList(list.id);
  }

  if (event.target.classList.contains("list-done-check")) {
    doneList(list);
  }
};

export const addTaskBtnHandler = () => {
  if (taskInput.value.trim()) {
    addList(taskInput.value);
  } else {
    alert("Please enter text");
  }
};

export const taskInputHandler = (event) => {
  if (event.key === "Enter") {
    addList(taskInput.value);
  }
};

export const listGroupEnterHandler = (event) => {
  if (event.key === "Enter") {
  }
};

export const deleteAllHandler = () => {
  if (confirm("Are you sure you want to remove all lists?")) {
    const allList = listGroup.querySelectorAll(".list");
    allList.forEach((list) => {
      list.classList.add("animate__animated", "animate__fadeOutRight");
      list.addEventListener("animationend", () => {
        list.remove();
      });
    });
  }
};

export const doneAllHandler = () => {
  const allList = listGroup.querySelectorAll(".list");
  const markAllDone = Array.from(allList).some(
    (list) => !list.querySelector(".list-done-check").checked,
  );

  if (
    confirm(
      `Are you sure you want to ${markAllDone ? "mark" : "unmark"} all lists as done?`,
    )
  ) {
    allList.forEach((list) => {
      list.querySelector(".list-done-check").checked = markAllDone;
      doneList(list);
    });
  }
};
