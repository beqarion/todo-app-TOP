import projectsList from "./projectsList.js";
import { addProject } from "./addProject.js";
import { createProjectHTML } from "../createProject/index.js";

import { initiateProjectsList } from "../../utils/utilsDom.js/initiateProjectsList.js";

export const createMyProjects = (todoManager) => {
  const projects = todoManager.projects;
  const myProjectsContainer = document.createElement("div");
  myProjectsContainer.classList.add("myprojects-container");

  myProjectsContainer.innerHTML = `<div class="sidebar-title-container">
          <h3 class="sidebar-title">My Projects</h3>
          <!-- <span class="sidebar-toggle-btn">&#9776;</span> -->
        </div>`;
  myProjectsContainer.appendChild(projectsList(projects));
  myProjectsContainer.appendChild(addProject());

  initiateProjectsList(
    myProjectsContainer,
    createProjectHTML,
    createMyProjects,
    todoManager
  );

  return myProjectsContainer;
};
