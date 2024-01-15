import React, { useState, useEffect } from 'react';

function FrontEnd() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch('http://localhost:3001/api/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Hi from the backend bro ", data);
      })
      .catch(error => {
        console.error('Error fetching data from the backend:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    // Add a new item to the backend
    fetch('http://localhost:3001/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setItems([...items, data]);
        setNewItem({ name: '', description: '' });
      });
  };

  const handleUpdateItem = (id) => {
    // Update an existing item in the backend
    fetch(`http://localhost:3001/api/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setItems(items.map((item) => (item._id === id ? data : item)));
        setNewItem({ name: '', description: '' });
      });
  };

  const handleDeleteItem = (id) => {
    // Delete an item from the backend
    fetch(`http://localhost:3001/api/items/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      })
      .then(() => {
        setItems(items.filter((item) => item._id !== id));
      });
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name} - {item.description}
            <button onClick={() => handleUpdateItem(item._id)}>Update</button>
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={newItem.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={newItem.description}
        onChange={handleInputChange}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default FrontEnd;
