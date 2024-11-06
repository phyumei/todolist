import { updateDoneTasksTotal, updateTasksTotal } from "./list.js";
import { listGroup } from "./selectors.js";

const observer = () => {
  const job = () => {
    updateTasksTotal();
    updateDoneTasksTotal();
  };
  const observerOptions = {
    attributes: true,
    childList: true,
    subtree: true,
  };
  const listGroupObserver = new MutationObserver(job);
  listGroupObserver.observe(listGroup, observerOptions);
};

export default observer;
