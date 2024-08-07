function createAddTaskBtn(projectId) {
  const addTaskContainer = document.createElement("div");
  addTaskContainer.classList.add("add-task-container");
  addTaskContainer.innerHTML = `
          <button
            class="btn add-task-button"
            data-project-id="lyoy53wgcg017cn"
          >
            add task
          </button>
          <form
            action=""
            class="add-task-form"
            autocomplete="off"
          >
            <input
              type="text"
              name="task-name"
              placeholder="Task name"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
            />
            <div class="styled-inputs">
              <div class="styled-button">
                <input
                  type="date"
                  name="duedate"
                />
                <button
                  type="button"
                  id="dateButton"
                >
                  <span  class="icon">📅</span>
                  <span class="label">Due date</span>
                </button>
              </div>
              <!-- dropdown -->
              <div class="dropdown-container">
                <button
                  type="button"
                  class="dropdown-trigger"
                  aria-expanded="false"
                >
                  <span class="icon">🔽</span>
                  <span class="label">Priority</span>
                </button>
                <div
                  id="dropdown-menu"
                  class="dropdown-menu"
                  aria-hidden="true"
                >
                  <div tabindex="0">Priority 1</div>
                  <div tabindex="0">Priority 2</div>
                  <div tabindex="0">Priority 3</div>
                  <div tabindex="0">Priority 4</div>
                </div>
              </div>
            </div>
            <div class="task-form-buttons">
              <button type="button" class="cancel-button">cancel</button>
              <button type="submit">add task</button>
            </div>
          </form>
        `;

  return addTaskContainer;
}

export default createAddTaskBtn;
