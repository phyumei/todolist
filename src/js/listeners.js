import {
  addTaskBtnHandler,
  deleteAllHandler,
  doneAllHandler,
  listGroupEnterHandler,
  listGroupHandler,
  taskInputHandler,
} from "./handlers.js";
import {
  addTaskBtn,
  deleteAll,
  doneAll,
  listGroup,
  taskInput,
} from "./selectors.js";

const listener = () => {
  addTaskBtn.addEventListener("click", addTaskBtnHandler);
  listGroup.addEventListener("click", listGroupHandler);
  taskInput.addEventListener("keyup", taskInputHandler);
  listGroup.addEventListener("keyup", listGroupEnterHandler);
  deleteAll.addEventListener("click", deleteAllHandler);
  doneAll.addEventListener("click", doneAllHandler);
};

export default listener;
