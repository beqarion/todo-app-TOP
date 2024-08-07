const sidebarDOM = document.querySelector(".sidebar");
const mainDOM = document.querySelector(".main-center");

export const renderMyProjects = (myProjects) => {
  sidebarDOM.innerHTML = "";
  sidebarDOM.appendChild(myProjects);
};

export const renderProject = () => {};
