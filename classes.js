import { generateUniqueId } from "./utils/utils.js";

export class Project {
  constructor(projectName) {
    this.id = generateUniqueId();
    this.name = projectName;
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
}

export class Task {
  constructor(name, projectId, description) {
    this.id = generateUniqueId();
    this.name = name;
    this.projectId = projectId;
    this.description = description;
  }
}

export class TodoManager {
  constructor() {
    this.projects = TodoManager.loadProjects();
  }

  createProject(projectName) {
    this.projects.push(new Project(projectName));
  }

  getProject(id) {
    let project = this.projects.find((p) => p.id === id);
    return project;
  }
  createTask(taskName, projectId) {
    const task = new Task(taskName, projectId);
    const theProject = this.projects.find((el) => el.id === projectId);
    theProject.addTask(task);
    return task;
  }

  static loadProjects() {
    return JSON.parse(localStorage.getItem("projects")) || [];
  }
}
