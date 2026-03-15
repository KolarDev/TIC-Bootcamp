const fs = require('fs');
const DB_FILE = './tasks.json';

const readTasks = () => {
  const data = fs.readFileSync(DB_FILE, 'utf8');
  return JSON.parse(data || '[]');
};

const writeTasks = (tasks) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(tasks, null, 2));
};

module.exports = { readTasks, writeTasks };