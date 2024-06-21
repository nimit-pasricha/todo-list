import { getProjects } from "./projects";

const projects = getProjects();

function getTodo(projectName, index) {
  return projects[projectName][index];
}

function createTodo(title, description, dueDate, priority, projectName) {
  const todo = { title, description, dueDate, priority, isCompleted: false };
  projects[projectName].push(todo);
}

function deleteTodo(projectName, index) {
  projects[projectName].splice(index, 1);
}

function editTodo(projectName, index, propertyToEdit, newValue) {
  const todoToEdit = getTodo(projectName, index);
  todoToEdit[propertyToEdit] = newValue;
}

function changeCompletedStatus(projectName, index) {
  const todoToEdit = getTodo(projectName, index);
  todoToEdit.isCompleted = !isCompleted;
}

export { createTodo, deleteTodo, editTodo, changeCompletedStatus };
