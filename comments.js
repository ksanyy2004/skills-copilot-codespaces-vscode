// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a variable to store comments
const comments = [];

// middleware to parse the request body
app.use(express.json());

// get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});