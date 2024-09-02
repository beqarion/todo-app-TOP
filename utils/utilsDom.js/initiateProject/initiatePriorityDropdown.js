export const initPriorityDropdown = (container) => {
  const DEFAULTPRIORITY = 4;
  const label = container.querySelector(".label");
  label.textContent = `Priority ${DEFAULTPRIORITY}`;

  const dropdownTrigger = container.querySelector(".dropdown-trigger");
  const menu = container.querySelector(".dropdown-menu");

  dropdownTrigger.addEventListener("click", function (e) {
    const expanded = this.getAttribute("aria-expanded") === "true";

    this.setAttribute("aria-expanded", !expanded);
    menu.setAttribute("aria-hidden", false);
    menu.style.display = expanded ? "none" : "block";
  });

  const priorityInput = container.querySelector("select[name='priority']");
  priorityInput.value = DEFAULTPRIORITY;
  const dropdownOptions = Array.from(
    container.querySelectorAll(".dropdown-option")
  );
  // makes 'selected' class of the priority option dependent of the DEFAULTPRIORITY constant.
  dropdownOptions[DEFAULTPRIORITY - 1].classList.add("selected");

  menu.addEventListener("click", function (event) {
    const dropdownOption = event.target.closest(".dropdown-option");
    if (dropdownOption) {
      const dropdownValue = dropdownOption.dataset.priority;

      priorityInput.value = dropdownValue;
      priorityInput.dispatchEvent(new Event("change"));

      label.textContent = `Priority ${dropdownValue}`;

      dropdownOptions.forEach((option) => {
        option.classList.remove("selected");
      });
      dropdownOption.classList.add("selected");
    }
  });
};
