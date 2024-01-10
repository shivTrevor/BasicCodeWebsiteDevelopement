// backend.js

const express = require('express');
const app = express();
const port = 3001;

app.get('/api/data', (req, res) => {
  // Handle the request and send back data
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
