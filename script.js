import { TodoManager } from "./classes.js";

import { createMyProjects } from "./components/createMyProjects/index.js";
import { createProjectHTML } from "./components/createProject/index.js";

const todoManager = new TodoManager();

// manually add dummy data
todoManager.createProject("initial project");
todoManager.createProject("another project");
todoManager.createProject("third project");

console.log(todoManager.projects);

const projects = todoManager.projects;

todoManager.createTask("task of first project", projects[0].id);
todoManager.createTask("2nd task of first project", projects[0].id);
// manually add dummy data

// DOM logic flow
const sidebarDOM = document.querySelector(".sidebar");
const mainDOM = document.querySelector(".main-center");

sidebarDOM.innerHTML = "";
sidebarDOM.appendChild(createMyProjects(todoManager));
if (projects.length > 0) {
  mainDOM.innerHTML = "";
  mainDOM.appendChild(createProjectHTML(projects[0].id, projects));
}
