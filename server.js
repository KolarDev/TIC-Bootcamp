const fs = require('fs');

const express = require('express');

const taskRoutes = require('./src/routes/task.route');

const app = express();

// MIddleware

// app.use(express.json());

// app.use(express.static('public'));

// app.use(express.urlencoded({ extended: true }));

// app.use(()=>{
//   console.log('Middleware is running!');
//   // next();
// })

const port = 3000;

app.use('/tasks', taskRoutes);

// const DB_FILE = './tasks.json';

// // Helper function to read from JSON file
// const readData = () => JSON.parse(fs.readFileSync(DB_FILE));

// // Helper function to write to JSON file
// const writeData = (data) => fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));


// // CRUD
// // C - Create - POST
// // R - Read - GET
// // U - Update - PUT/PATCH
// // D - Delete - DELETE

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // 1. READ: Get all tasks
// app.get('/tasks', async (req, res) => {
//   const tasks = await readData();
//   res.json(tasks);
// });

// // 2. CREATE: Add a new task
// app.post('/tasks', (req, res) => {
//   const tasks = readData();
//   const newTask = { 
//     id: Date.now(), 
//     text: req.body.text, 
//     completed: false 
//   };
  
//   tasks.push(newTask);
//   writeData(tasks);
//   res.status(201).json(newTask);
// });

// // 3. UPDATE: Mark a task as completed
// app.put('/tasks/:id', (req, res) => {
//   let tasks = readData();
//   const id = parseInt(req.params.id);
  
//   tasks = tasks.map(t => t.id === id ? { ...t, completed: true } : t);
  
//   writeData(tasks);
//   res.json({ message: "Task updated!" });
// });

// // 4. DELETE: Remove a task
// app.delete('/tasks/:id', (req, res) => {
//   const tasks = readData();
//   const id = parseInt(req.params.id);
  
//   const filteredTasks = tasks.filter(t => t.id !== id);
  
//   writeData(filteredTasks);
//   res.json({ message: "Task deleted!" });
// });

app.listen(port, () => {
  console.log(`Server is awake! Open http://localhost:${port} in your browser.`);
});