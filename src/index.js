import { getProjects } from "./projects.js";

import "./style.css";
import {
  addNewProjectToSidebar,
  addNewProjectWithAddButton,
  addNewTaskToProject,
  addProfilePictureToSidebar,
  addProjectsToForm,
  displayAllProjects,
  promptUserForNewTask,
  restartFormOnExit,
} from "./sidebar-ui.js";
import { displayProjectInformation } from "./main-content-ui.js";

getProjects();
addNewProjectWithAddButton();
displayAllProjects();
addProfilePictureToSidebar();
addNewProjectToSidebar();
promptUserForNewTask();
addProjectsToForm();
addNewTaskToProject();
restartFormOnExit();
displayProjectInformation();
