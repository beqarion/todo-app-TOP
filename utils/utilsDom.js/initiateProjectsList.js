import { renderProject, renderMyProjects } from "../../dom/renderComponents.js";

export const initiateProjectsList = (myProjectsContainer, todoManager) => {
  // initiate projects list with listeners
  const projects = todoManager.projects;
  console.log(projects);

  myProjectsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("project-listing")) {
      const projectId = event.target.id;
      renderProject(projectId, projects);
    }
  });

  // initiate project dropdown menu button
  const dropDownContainers = myProjectsContainer.querySelectorAll(
    ".dropdown-container"
  );
  console.log(dropDownContainers);
  dropDownContainers.forEach((dropDownContainer) => {
    const dropdownTrigger =
      dropDownContainer.querySelector(".dropdown-trigger");

    dropdownTrigger.addEventListener("click", function (e) {
      const menu = dropDownContainer.querySelector(".dropdown-menu");
      const expanded = this.getAttribute("aria-expanded") === "true";
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
    } else {
      console.log("project name shouldnt be empty string");
    }
  });
};
