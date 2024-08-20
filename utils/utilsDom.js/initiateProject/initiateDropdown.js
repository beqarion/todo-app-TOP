export const initDropdown = (container) => {
  const dropdownTrigger = container.querySelector(".dropdown-trigger");
  const menu = container.querySelector(".dropdown-menu");

  dropdownTrigger.addEventListener("click", function (e) {
    const expanded = this.getAttribute("aria-expanded") === "true";

    this.setAttribute("aria-expanded", !expanded);
    menu.setAttribute("aria-hidden", false);
    menu.style.display = expanded ? "none" : "block";
  });

  const priorityInput = container.querySelector("select[name='priority']");
  const dropdownOptions = Array.from(
    container.querySelectorAll(".dropdown-option")
  );

  console.log(priorityInput[0]);

  dropdownOptions.forEach((dropdownOption) => {
    dropdownOption.addEventListener("click", function (e) {
      const dropdownValue = this.dataset.priority;
      if (dropdownValue === priorityInput.value) {
        console.log(this);
      }
    });
  });
};
