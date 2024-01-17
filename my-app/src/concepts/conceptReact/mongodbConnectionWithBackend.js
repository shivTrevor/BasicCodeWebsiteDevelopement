const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Replace 'your_database_url' with your actual MongoDB Atlas connection string
const atlasConnectionUrl = 'mongodb://localhost:27017';

async function startServer() {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect(atlasConnectionUrl, { useNewUrlParser: true, useUnifiedTopology: true });

    // Get the default connection
    const db = mongoose.connection;

    // Event listener for connection errors
    db.on('error', (error) => {
      console.error('Connection error:', error);
    });

    // Event listener for successful connection (executes only once)
    db.once('open', () => {
      console.log('Connected to the database');

      // Start your Express app or perform other setup here
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    });
  } catch (error) {
    console.error('Connection error:', error);
  }
}

// Call the function to start the server
startServer();

// Define your routes and other Express configurations below
