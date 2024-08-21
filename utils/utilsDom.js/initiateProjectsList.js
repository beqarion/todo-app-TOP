import { renderProject, renderMyProjects } from "../../dom/renderComponents.js";

export const initiateProjectsList = (myProjectsContainer, todoManager) => {
  // initiate projects list with listeners
  const projects = todoManager.projects;

  myProjectsContainer.addEventListener("click", (event) => {
    const closestProjctsListing = event.target.closest(".project-listing");
    if (closestProjctsListing) {
      const projectId = closestProjctsListing.id;
      renderProject(projectId, todoManager);
    }
  });

  // initiate project dropdown menu button

  const dropDownTriggers =
    myProjectsContainer.querySelectorAll(".dropdown-trigger");

  function closeAllMenus() {
    dropDownTriggers.forEach((trigger) => {
      const menu = trigger.nextElementSibling;
      trigger.setAttribute("aria-expanded", "false");
      menu.style.display = "none";
      menu.setAttribute("aria-hidden", "true");
    });
  }

  dropDownTriggers.forEach((dropdownTrigger) => {
    dropdownTrigger.addEventListener("click", function (e) {
      e.stopPropagation();
      const menu = dropdownTrigger.nextElementSibling;
      const expanded = this.getAttribute("aria-expanded") === "true";
      closeAllMenus();
      this.setAttribute("aria-expanded", !expanded);
      menu.style.display = expanded ? "none" : "block";
    });
  });

  // initiate add project section
  const addProjectBtn = myProjectsContainer.querySelector(".add-project-btn");
  const addProjectForm = myProjectsContainer.querySelector(".add-project-form");
  const cancelAddProject = myProjectsContainer.querySelector(
    ".cancel-add-project"
  );

  addProjectBtn.addEventListener("click", () => {
    addProjectForm.style.display = "grid";
    addProjectBtn.style.display = "none";

    addProjectForm.querySelector("input").focus();
  });
  cancelAddProject.addEventListener("click", () => {
    addProjectBtn.style.display = "block";
    addProjectForm.style.display = "none";
  });

  // handleAddProject
  addProjectForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(this).entries());
    console.log(formData);
    if (formData.name.length > 0) {
      const newProject = todoManager.createProject(formData.name);
      renderMyProjects(todoManager);
      renderProject(newProject.id, todoManager);
    } else {
      console.log("project name shouldnt be empty string");
    }
  });

  // handleDeleteProject
  const deleteProjectButtons =
    myProjectsContainer.querySelectorAll(".delete-project");

  deleteProjectButtons.forEach((deleteProjectButton) => {
    deleteProjectButton.addEventListener("click", (e) => {
      e.stopPropagation();
      const closestProjctsListing = e.target.closest(".project-listing");
      if (closestProjctsListing) {
        const projectId = closestProjctsListing.id;
        todoManager.deleteProject(projectId);
        renderMyProjects(todoManager);
        renderProject(projects.length > 0 ? projects[0].id : null, todoManager);
      }
    });
  });
};
