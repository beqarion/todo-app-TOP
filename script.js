import { TodoManager } from "./classes.js";

import { createMyProjects } from "./components/createMyProjects/index.js";
import { createProjectHTML } from "./components/createProject/index.js";

import { renderMyProjects, renderProject } from "./dom/renderComponents.js";

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
renderMyProjects(createMyProjects(todoManager));
if (projects.length > 0) {
  renderProject(createProjectHTML(projects[0].id, projects));
}
