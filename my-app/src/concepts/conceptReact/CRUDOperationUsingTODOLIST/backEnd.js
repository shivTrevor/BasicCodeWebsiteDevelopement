// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors())
app.use(bodyParser.json());


//may be isko asynchoronous banana padega ....or promise return karni padegi yahan par 
mongoose.connect('mongodb://localhost:27017/dataFlow', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

const Item = mongoose.model('Item', ItemSchema);

// Create
app.post('/api/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
});

// Read
app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Update
app.put('/api/items/:id', async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedItem);
});

// Delete
app.delete('/api/items/:id', async (req, res) => {
  await Item.findByIdAndRemove(req.params.id);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
