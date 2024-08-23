import { TodoManager } from "./classes.js";

import { initiateDocumentListeners } from "./utils/utilsDom.js/initiateDocumentListeners.js";

import { renderMyProjects, renderProject } from "./dom/renderComponents.js";

const todoManager = new TodoManager();

// manually add dummy data
todoManager.createProject("initial project");
todoManager.createProject("another project");
todoManager.createProject("third project");

const projects = todoManager.projects;

todoManager.createTask({
  taskName: "task of first project",
  projectId: projects[0].id,
  priority: 4,
});
todoManager.createTask({
  taskName: "2nd task of first project",
  projectId: projects[0].id,
  priority: 4,
});
//end of manually adding dummy data

// DOM logic flow
renderMyProjects(todoManager);
if (projects.length > 0) {
  // render first project in the projects list on every projectsList render
  renderProject(projects[0].id, todoManager);
}
initiateDocumentListeners();
