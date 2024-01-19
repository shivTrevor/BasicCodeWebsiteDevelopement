//here we are connecting mongodb with the node by using the mongoose here bro 
const mongoose = require('mongoose');

// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Set the port number
const port = 3000;


// Construct the MongoDB connection URI
const uri = `mongodb://127.0.0.1:27017'/${showBizz}`;

// Connect to MongoDB
mongoose.connect(uri);

// Get the default connection
const db = mongoose.connection;

// Event listener for successful connection
db.on('connected', () => {
  console.log(`Connected to MongoDB at ${uri}`);
});

// Event listener for connection errors
db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

// Event listener for disconnection
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Close the MongoDB connection when the Node.js application is terminated
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
