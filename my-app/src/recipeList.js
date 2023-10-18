import React from 'react';
import './App.css'

// This component displays a list of recipes
const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-card">
      <h2 className="recipe-title">Recipe List</h2>
      <ul>
        {/* Mapping over the recipes to display them as a list */}
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
