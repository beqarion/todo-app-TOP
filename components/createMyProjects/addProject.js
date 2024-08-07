export const addProject = () => {
  const addProjectDOM = document.createElement("div");
  addProjectDOM.classList.add("add-project");

  addProjectDOM.innerHTML = `<div class="add-project">
          <button class="btn add-project-btn">add project</button>
          <form
            action=""
            class="add-project-form"
            autocomplete="off"
            style="display: none"
          >
            <input
              type="text"
              name="name"
              placeholder="Project name"
            />
            <div class="button-group">
              <button
                type="button"
                class="cancel-add-project"
              >
                cancel
              </button>
              <button type="submit">add project</button>
            </div>
          </form>
        </div>`;

  return addProjectDOM;
};
