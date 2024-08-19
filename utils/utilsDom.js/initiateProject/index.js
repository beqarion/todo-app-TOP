import { initDropdown } from "./initiateDropdown.js";

export const initiateProject = (parentEl) => {
  const addTaskContainer = parentEl.querySelector(".add-task-container");
  // add task form hide/reveal logic
  const addTaskButton = addTaskContainer.querySelector(".add-task-button");
  const addTaskForm = addTaskContainer.querySelector(".add-task-form");
  const cancelButton = addTaskForm.querySelector(".cancel-button");

  addTaskButton.addEventListener("click", () => {
    console.log("addTask button clicked");
    addTaskButton.style.display = "none";
    addTaskForm.style.display = "grid";
  });
  cancelButton.addEventListener("click", () => {
    console.log("cancel button clicked");
    addTaskForm.style.display = "none";
    addTaskButton.style.display = "block";
  });
  // handle add task
  addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // date picker hide under regular button logic
  const dateInput = addTaskContainer.querySelector('input[name="duedate"');
  const dateButton = addTaskContainer.querySelector("#dateButton");
  dateButton.addEventListener("click", (event) => {
    dateInput.focus();
    dateInput.showPicker();
  });

  // custom dropdown selector
  const dropdownContainer = addTaskContainer.querySelector(
    ".dropdown-container"
  );
  initDropdown(dropdownContainer);
};
