import { createMyProjects } from "../components/createMyProjects/index.js";
import { createProjectHTML } from "../components/createProject/index.js";

const sidebarDOM = document.querySelector(".sidebar");
const mainDOM = document.querySelector(".main-center");

export const renderMyProjects = (myProjectsDOM) => {
  sidebarDOM.innerHTML = "";
  sidebarDOM.appendChild(myProjectsDOM);
};

export const renderProject = (myProjectDOM) => {
  mainDOM.innerHTML = "";
  mainDOM.appendChild(myProjectDOM);
};
