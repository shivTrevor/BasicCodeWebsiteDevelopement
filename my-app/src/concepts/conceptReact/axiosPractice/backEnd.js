//testing the axios 
//Its not working and i have to make it work 

const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors')

app.use(cors())

app.get('/api/data', ( res) => {
    // Simulating data from the server
    const data = { message: 'Hello from the server!' };
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

