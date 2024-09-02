function createTaskDOM(task) {
  const priority = task.priority;

  return `<!-- start of task -->
            <article class="task">
              <div>
                <div class="task-title">
                  <button class="task-complete-button${
                    priority ? " priority-" + priority : ""
                  }" data-project-id=${task.projectId} data-task-id=${task.id}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      />
                    </svg>
                  </button>
                  <div class="task-name">${task.taskName}</div>
                </div>
                <div class="task-details">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    class="notes_icon"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="nonzero"
                        d="M9.5 1A1.5 1.5 0 0 1 11 2.5v5A1.5 1.5 0 0 1 9.5 9H7.249L5.28 10.97A.75.75 0 0 1 4 10.44V9H2.5A1.5 1.5 0 0 1 1 7.5v-5A1.5 1.5 0 0 1 2.5 1h7zm0 1h-7a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H5v1.836L6.835 8H9.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z"
                      ></path>
                    </g>
                  </svg>
                  <span class="comment-number">1</span>
                </div>
              </div>
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
                    <div class="menu-list">
                      <span class="delete">delete</span>
                      <span class="edit">edit</span>  
                    </div>
                  </div>
                </div>
            </article>
            <!-- end of task -->`;
}

export default createTaskDOM;
