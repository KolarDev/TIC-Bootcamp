const taskService = require('../services/task.service');

const getAllTasks = (req, res) => {
  const tasks = taskService.readTasks();
  res.json(tasks);
};

const createTask = (req, res) => {
  const tasks = taskService.readTasks();
  if (!req.body.text) return res.status(400).json({ error: "Text is required" });

  const newTask = { id: Date.now(), text: req.body.text, completed: false };
  tasks.push(newTask);
  taskService.writeTasks(tasks);
  res.status(201).json(newTask);
};

// Add Update and Delete logic here...
module.exports = { getAllTasks, createTask };