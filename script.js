import { TodoManager } from "./classes.js";

import { initiateDocumentListeners } from "./utils/utilsDom.js/initiateDocumentListeners.js";

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
renderMyProjects(todoManager);
if (projects.length > 0) {
  renderProject(projects[0].id, projects);
}
initiateDocumentListeners();
