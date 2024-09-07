export const initTaskDropdown = (tasksContainer, todoManager) => {
  tasksContainer.addEventListener("click", function (e) {
    e.stopPropagation();
    const trigger = e.target.closest(".dropdown-trigger");

    if (trigger) {
      const menu = trigger.nextElementSibling;
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      closeAllMenus();
      trigger.setAttribute("aria-expanded", !expanded);

      menu.style.display = expanded ? "none" : "block";
      menu.setAttribute("aria-hidden", "false");
      absoluteRemainInView(menu);
    }
  });

  // helper function
  function closeAllMenus() {
    const dropdownTriggers =
      tasksContainer.querySelectorAll(".dropdown-trigger");
    dropdownTriggers.forEach((trigger) => {
      const menu = trigger.nextElementSibling;
      absoluteRemainInView(menu);
      trigger.setAttribute("aria-expanded", "false");
      menu.style.display = "none";
      menu.setAttribute("aria-hidden", "true");
    });
  }
  // make trigger stay inside of viewport whenever clicked
  function absoluteRemainInView(absolutePosElement) {
    absolutePosElement.closest("body").style.overflowX = "hidden";

    const rect = absolutePosElement.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    if (rect.right > viewportWidth) {
      absolutePosElement.style.right = "0";
      absolutePosElement.style.left = "auto";
    } else {
      absolutePosElement.style.left = "0";
      absolutePosElement.style.right = "auto";
    }

    absolutePosElement.closest("body").style.overflowX = "auto";
  }
};
