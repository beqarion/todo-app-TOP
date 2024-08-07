function projectsList(projects) {
  const projectsListDOM = document.createElement("div");
  projectsListDOM.classList.add("projects-list");

  const ul = document.createElement("ul");
  ul.innerHTML = projects
    .map((project) => {
      return `<li>
                <p
                  class="project-listing"
                  id=${project.id}
                >
                  ${project.name}
                </p>
                <div class="dropdown-container">
                  <span
                    class="dropdown-trigger"
                    aria-expanded="false"
                    >☰</span
                  >
                  <div
                    class="dropdown-menu"
                    aria-hidden="true"
                    style="display: none"
                  >
                    <span>delete</span>
                  </div>
                </div>
              </li>`;
    })
    .join("");

  projectsListDOM.appendChild(ul);

  return projectsListDOM;
}

export default projectsList;
