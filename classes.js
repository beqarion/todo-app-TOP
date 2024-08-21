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
  constructor(taskData) {
    const { taskName, projectId, description } = taskData;
    this.id = generateUniqueId();
    this.taskName = taskName;
    this.projectId = projectId;
    this.description = description;
  }
}

export class TodoManager {
  constructor() {
    this.projects = TodoManager.loadProjects();
  }

  createProject(projectName) {
    const project = new Project(projectName);
    this.projects.push(project);
    return project;
  }

  deleteProject(projectId) {
    const index = this.projects.findIndex(
      (project) => project.id === projectId
    );
    if (index !== -1) {
      this.projects.splice(index, 1);
    } else {
      throw new Error(`project with ${projectId} wasnt found.`);
    }
  }

  getProject(id) {
    let project = this.projects.find((p) => p.id === id);
    return project;
  }
  createTask(taskData) {
    const task = new Task(taskData);
    const theProject = this.getProject(taskData.projectId);
    theProject.addTask(task);
    return task;
  }

  static loadProjects() {
    return JSON.parse(localStorage.getItem("projects")) || [];
  }
}
