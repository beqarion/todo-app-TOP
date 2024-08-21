import { createMyProjects } from "../views/createMyProjects/index.js";
import { createProjectHTML } from "../views/createProject/index.js";

const sidebarDOM = document.querySelector(".sidebar");
const mainDOM = document.querySelector(".main-center");

export const renderMyProjects = (todoManager) => {
  const myProjectsDOM = createMyProjects(todoManager);
  sidebarDOM.innerHTML = "";
  sidebarDOM.appendChild(myProjectsDOM);
};

export const renderProject = (projectId, todoManager) => {
  mainDOM.innerHTML = "";
  if (projectId) {
    const myProjectDOM = createProjectHTML(projectId, todoManager);
    mainDOM.appendChild(myProjectDOM);
  }
};
