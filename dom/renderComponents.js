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
  const myProjectDOM = createProjectHTML(projectId, projects);
  mainDOM.innerHTML = "";
  mainDOM.appendChild(myProjectDOM);
};
