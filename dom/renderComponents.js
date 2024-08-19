import { createMyProjects } from "../components/createMyProjects/index.js";
import { createProjectHTML } from "../components/createProject/index.js";

const sidebarDOM = document.querySelector(".sidebar");
const mainDOM = document.querySelector(".main-center");

export const renderMyProjects = (todoManager) => {
  const myProjectsDOM = createMyProjects(todoManager);
  sidebarDOM.innerHTML = "";
  sidebarDOM.appendChild(myProjectsDOM);
};

export const renderProject = (projectId, projects) => {
  mainDOM.innerHTML = "";
  if (projectId) {
    const myProjectDOM = createProjectHTML(projectId, projects);
    mainDOM.appendChild(myProjectDOM);
  }
};
