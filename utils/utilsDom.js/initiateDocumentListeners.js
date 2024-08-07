export const initiateDocumentListeners = () => {
  // hide addtask dropdown on side click
  document.addEventListener("click", function (event) {
    console.log("document clicked from its 'click' event listener");
    const trigger = document.querySelector(".styled-inputs .dropdown-trigger");
    const menu = document.querySelector(".styled-inputs .dropdown-menu");

    if (!trigger.contains(event.target) && !menu.contains(event.target)) {
      trigger.setAttribute("aria-expanded", "false");
      menu.style.display = "none";
      menu.setAttribute("aria-hidden", "true");
    }
  });
  // hide projects  dropdown menu
  document.addEventListener("click", function (event) {
    const triggers = document.querySelectorAll(
      ".projects-list .dropdown-trigger"
    );
    const menus = document.querySelectorAll(".projects-list .dropdown-menu");

    // if (!trigger.contains(event.target) && !menu.contains(event.target)) {
    //   trigger.setAttribute("aria-expanded", "false");
    //   menu.style.display = "none";
    //   menu.setAttribute("aria-hidden", "true");
    // }
  });
};
