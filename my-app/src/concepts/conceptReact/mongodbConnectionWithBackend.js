//using mongoclient i am connecting with the data base my freind par ab kaise connect karenge data base se bro can you tell me that bro 

const { MongoClient } = require('mongodb');

// Connection URL and database name
const url = 'mongodb://127.0.0.1:27017'; // Replace with your MongoDB connection string
const dbName = 'showBizz'; // Replace with your database name

console.log("running")
// Create a new MongoClient
const client = new MongoClient(url);
console.log("running")
// Connect to the MongoDB server
async function connect() {
  try {
    await client.connect();
    console.log('Connected to the database');
    console.log("running")
    return client.db(dbName);
  } catch (err) {
    console.error('Error connecting to the database', err);
    throw err;
  }
}

// Close the connection
function close() {
  client.close();
  console.log('Connection closed');
}


//here we are connecting the data base with the mongodb client and try to connect it bhaai

// Example usage
async function performDatabaseOperations() {
  const db = await connect();

  try {
    // Your database operations go here
    // For example:
    const collection = db.collection('yourCollectionName');
    const result = await collection.find({}).toArray();
    console.log(result);
  } finally {
    // Close the connection when done
    close();
  }
}

// Call the function to perform database operations
performDatabaseOperations();