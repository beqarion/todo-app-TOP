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
  const dropdownTrigger = dropdownContainer.querySelector(".dropdown-trigger");

  dropdownTrigger.addEventListener("click", function (e) {
    const menu = dropdownContainer.querySelector(".dropdown-menu");
    const expanded = this.getAttribute("aria-expanded") === "true";

    this.setAttribute("aria-expanded", !expanded);
    menu.style.display = expanded ? "none" : "block";
  });

  // hide addtask dropdown on side click
  document.addEventListener("click", function (event) {
    const trigger = document.querySelector(".dropdown-trigger");
    const menu = document.getElementById("dropdown-menu");

    if (!trigger.contains(event.target) && !menu.contains(event.target)) {
      trigger.setAttribute("aria-expanded", "false");
      menu.style.display = "none";
      menu.setAttribute("aria-hidden", "true");
    }
  });
};
