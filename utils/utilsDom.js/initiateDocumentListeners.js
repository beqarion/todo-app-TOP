export const initiateDocumentListeners = () => {
  // hide addtask dropdown on side click
  document.addEventListener("click", function (event) {
    const trigger = document.querySelector(".styled-inputs .dropdown-trigger");
    const menu = trigger.nextElementSibling;

    if (trigger && !trigger.contains(event.target)) {
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
    if (
      triggers &&
      !triggers.some((t) => t.getAttribute("aria-expanded") === "true")
    ) {
      return;
    }
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

  // hide tasks dropdown menu
  document.addEventListener("click", (e) => {
    const triggers = Array.from(
      document.querySelectorAll(".tasks .dropdown-trigger")
    );
    if (
      triggers &&
      !triggers.some((t) => t.getAttribute("aria-expanded") === "true")
    ) {
      return;
    }

    let clickedOutside = true;

    // triggers.forEach((trigger) => {
    //   if (trigger.contains(e.target) || menu.contains(e.target)) {
    //     clickedOutside = false;
    //     return;
    //   }
    // });
    if (
      triggers.some((trigger) => {
        const menu = trigger.nextElementSibling;
        trigger.contains(e.target) || menu.contains(e.target);
      })
    ) {
      clickedOutside = false;
    }
    if (clickedOutside) {
      triggers.forEach((trigger) => {
        const menu = trigger.nextElementSibling;

        trigger.setAttribute("aria-expanded", "false");
        menu.setAttribute("aria-hidden", "true");
        menu.style.display = "none";
      });
    }
  });
};
