let tasks = [];
let currentId = 1;
function getTasks() {
  return tasks;
}

function getTask(id) {
  return tasks.find((task) => task.id === id);
}

function addTask(task) {
  task.id = currentId.toString();
  tasks.push(task);
  currentId++;
  return task;
}

function updateTask(id, updatedTask) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...updatedTask };
    return tasks[index];
  }
  return null;
}

function deleteTask(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    return tasks.splice(index, 1)[0];
  }
  return null;
}

module.exports = {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
};
