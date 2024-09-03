export const initTaskDropdown = (tasksContainer, todoManager) => {
  tasksContainer.addEventListener("click", function (e) {
    const trigger = e.target.closest(".dropdown-trigger");
    console.log(trigger);

    if (trigger) {
      const menu = trigger.nextElementSibling;
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      closeAllMenus()
      trigger.setAttribute("aria-expanded", !expanded);
      menu.style.display = expanded ? "none" : "block";
      absoluteRemainInView(menu);
    }
  });

  // helper function
  function closeAllMenus() {
    const dropDownTriggers =
      tasksContainer.querySelectorAll(".dropdown-trigger");

    dropDownTriggers.forEach((trigger) => {
      const menu = trigger.nextElementSibling;
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

    console.log({ rect });
    console.log(viewportWidth);

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
