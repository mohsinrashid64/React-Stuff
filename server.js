
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable or default to 5000

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
const uri = 'mongodb+srv://massdriver64:4deMi0rcvl2tdSPr@cluster0.8bs3d0v.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Define the Todo schema
const todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

// API routes
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.log(err);
    res.status(500).json('Error fetching todos');
  }
});

app.post('/todos/add', async (req, res) => {
  const newTodo = new Todo({
    text: req.body.text,
    completed: false,
  });

  try {
    await newTodo.save();
    res.json('Todo added!');
  } catch (err) {
    console.log(err);
    res.status(400).json('Error adding todo');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
