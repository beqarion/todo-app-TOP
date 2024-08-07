export const initiateProjectsList = (
  myProjectsContainer,
  renderProject,
  renderMyProjects,
  todoManager
) => {
  // initiate projects list with listeners
  const mainDOM = document.querySelector(".main-center");
  const projects = todoManager.projects;
  console.log(projects);

  myProjectsContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("project-listing")) {
      const projectId = event.target.id;
      mainDOM.innerHTML = "";
      mainDOM.appendChild(renderProject(projectId, projects));
    }
  });
  // initiate add project section
  const addProjectBtn = myProjectsContainer.querySelector(".add-project-btn");
  const addProjectForm = myProjectsContainer.querySelector(".add-project-form");
  const cancelAddProject = myProjectsContainer.querySelector(
    ".cancel-add-project"
  );

  addProjectBtn.addEventListener("click", () => {
    addProjectForm.style.display = "block";
    addProjectBtn.style.display = "none";
  });
  cancelAddProject.addEventListener("click", () => {
    addProjectBtn.style.display = "block";
    addProjectForm.style.display = "none";
  });
  addProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // handleAddProject
  addProjectForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(this).entries());
    console.log(formData);
    todoManager.createProject("a newly created project");
    renderMyProjects(todoManager);
  });
};
