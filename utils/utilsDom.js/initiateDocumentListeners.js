export const initiateDocumentListeners = () => {
  // hide addtask dropdown on side click
  document.addEventListener("click", function (event) {
    const trigger = document.querySelector(".styled-inputs .dropdown-trigger");
    const menu = document.querySelector(".styled-inputs .dropdown-menu");

    if (
      trigger &&
      !trigger.contains(event.target) &&
      !menu.contains(event.target)
    ) {
      trigger.setAttribute("aria-expanded", "false");
      menu.style.display = "none";
      menu.setAttribute("aria-hidden", "true");
    }
  });
  // hide projects  dropdown menu
  document.addEventListener("click", function (event) {
    const triggers = Array.from(
      document.querySelectorAll(".projects-list .dropdown-trigger")
    );

    let clickedOutside = true;

    triggers.forEach((trigger) => {
      const menu = trigger.nextElementSibling;

      if (trigger.contains(event.target) || menu.contains(event.target)) {
        clickedOutside = false;
        return;
      }
    });
    if (clickedOutside) {
      triggers.forEach((trigger) => {
        const menu = trigger.nextElementSibling;
        trigger.setAttribute("aria-expanded", "false");
        menu.style.display = "none";
        menu.setAttribute("aria-hidden", "true");
      });
    }
  });
};
