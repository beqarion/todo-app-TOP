import createTaskDOM from "./createTask.js";
import createAddTaskBtn from "./createAddTaskBtn.js";

// initiates (adding events etc) addTask button
import { initiateProject } from "../../utils/utilsDom.js/initiateProject.js";

export { createTaskDOM, createAddTaskBtn };

export function createProjectHTML(projectId, projects) {
  const project = projects.find((p) => p.id === projectId);

  const tasks = project.tasks;

  console.log(project);
  const projectDOM = document.createElement("div");
  projectDOM.classList.add("project");

  const projectHTML = `<!-- project -->
        <div>
          <h3 class="project-name">${project.name}</h3>
          <!-- tasks -->
          <div class="tasks">
            ${
              tasks.length > 0
                ? tasks.map((t) => createTaskDOM(t)).join("")
                : ""
            }
          </div>
        </div>`;
  projectDOM.innerHTML = projectHTML;
  projectDOM.appendChild(createAddTaskBtn(project.id));
  initiateProject(projectDOM);
  return projectDOM;
}
