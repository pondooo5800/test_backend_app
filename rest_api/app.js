const express = require("express");
const bodyParser = require("body-parser");
const tasks = require("./tasks");

const app = express();
const port = 3000;

app.use(bodyParser.json());

function formatDate(date) {
  const d = new Date(date);
  let year = d.getFullYear();
  let month = (d.getMonth() + 1).toString().padStart(2, "0");
  let day = d.getDate().toString().padStart(2, "0");

  return `${day}-${month}-${year}`;
}

app.get("/find-all", (req, res) => {
  res.json(tasks.getTasks());
});

app.get("/find/:id", (req, res) => {
  const task = tasks.getTask(req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

app.post("/create", (req, res) => {
  const newTask = {
    title: req.body.title,
    completed: req.body.completed || false,
    date: formatDate(Date.now()),
  };
  tasks.addTask(newTask);
  res.status(201).json(newTask);
});

app.put("/update/:id", (req, res) => {
  const updatedTask = tasks.updateTask(req.params.id, req.body);
  if (updatedTask) {
    res.json(updatedTask);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

app.delete("/del/:id", (req, res) => {
  const deletedTask = tasks.deleteTask(req.params.id);
  if (deletedTask) {
    res.json(deletedTask);
  } else {
    res.status(404).json({ error: "Task not found" });
  }
});

app.listen(port, () => {
  console.log(`To-Do List app listening at http://localhost:${port}`);
});
