// App.js

import React, { useState } from 'react';
import SearchBar from './searchBar';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const allProducts = [
    // Your list of products goes here
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    // Add more products as needed
  ];

  const handleSearch = (searchTerm) => {
    // Perform search logic (e.g., filter products based on the search term)
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h1>E-commerce Application</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        <h2>Search Results</h2>
        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
