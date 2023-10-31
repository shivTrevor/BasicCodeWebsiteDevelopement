//here we are importing the express and connection bro 
import express, { json } from 'express';
import { connect, connection } from 'mongoose';

// creating an instance of express app
const app = express();

// Sets the 'PORT' constant to the value provided by the environment variable 'process.env.PORT', or defaults to 3000.
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
// Ensures request body (JSON payload) is accessible in req.body for route handling
// If not use we can't able to access the data came from PUT and POST request from client 
app.use(json());

// Connect to your MongoDB database
connect('mongodb://localhost:27017/myDatabase',
 { useNewUrlParser: true, useUnifiedTopology: true }); //these are for future discovering and monitoring

 //creating an object (or reference) named db that points to a database connection
const db = connection; 

//handling error 
//sets up the event listener for errors in our db object if any
db.on('error', (error) => {
  console.error(error);
});


// Ensure server starts only after database connection is established
db.once('open', () => {
  console.log('Connected to database');

  // This code starts the serverin a cspecified port.
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
