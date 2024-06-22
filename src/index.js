import {
  addNewProject,
  deleteProject,
  getProjects,
  changeProjectName,
} from "./projects.js";
import {
  createTodo,
  deleteTodo,
  editTodo,
  changeCompletedStatus,
} from "./todos.js";
import "./style.css";
import {
  addNewProjectToSidebar,
  addNewProjectWithAddButton,
  addProfilePictureToSidebar,
  addProjectsToForm,
  displayAllProjects,
  promptUserForNewTask,
} from "./sidebar-interface.js";

addNewProjectWithAddButton();
displayAllProjects();
addProfilePictureToSidebar();
addNewProjectToSidebar();
promptUserForNewTask();
addProjectsToForm();
