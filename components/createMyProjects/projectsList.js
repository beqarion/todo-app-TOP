function projectsList(projects) {
  const projectsListDOM = document.createElement("div");
  projectsListDOM.classList.add("projects-list");

  const ul = document.createElement("ul");
  ul.innerHTML = projects
    .map((project) => {
      return `<li><p class="project-listing" id=${project.id}>${project.name}</li>`;
    })
    .join("");

  projectsListDOM.appendChild(ul);

  return projectsListDOM;
}

export default projectsList;
