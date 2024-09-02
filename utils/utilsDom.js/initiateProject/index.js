import { initPriorityDropdown } from "./initiatePriorityDropdown.js";
import { initShowHideAddTaskForm } from "./initShowHideAddTaskForm.js";
import { initTaskDropdown } from "./initTaskDropdown.js";

export const initiateProject = (container, todoManager) => {
  const addTaskContainer = container.querySelector(".add-task-container");
  initShowHideAddTaskForm(addTaskContainer, todoManager);

  const tasksContainer = container.querySelector(".tasks");
  initTaskDropdown(tasksContainer, todoManager);

  // custom dropdown selector
  const dropdownContainer = addTaskContainer.querySelector(
    ".dropdown-container"
  );
  initPriorityDropdown(dropdownContainer);
};
