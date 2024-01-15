import React, { useState } from 'react';
import RecipeList from './recipeList'; // Importing RecipeList component
import RecipeForm from './recipeForm'; // Importing RecipeForm component
import './App.css'

function App() {
  // State to manage the list of recipes
  const [recipes, setRecipes] = useState([]);

  // Function to add a new recipe to the list
  const handleAddRecipe = (name) => {
    setRecipes([...recipes, { name }]); // Updating recipes state with a new recipe
  };

  return (
    <div>
      <h1>Recipe Manager</h1> {/* Header */}
      {/* Rendering RecipeList and RecipeForm components */}
      <RecipeList recipes={recipes} /> {/* Rendering RecipeList with recipes as prop */}
      <RecipeForm onAddRecipe={handleAddRecipe} /> {/* Rendering RecipeForm with onAddRecipe function */}
    </div>
  );
}

export default App; // Exporting the App component as default
