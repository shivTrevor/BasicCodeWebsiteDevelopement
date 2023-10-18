import React, { useState } from 'react';
import './App.css'

// This component provides a form to add new recipes
const RecipeForm = ({ onAddRecipe }) => {
  const [name, setName] = useState(''); //this state variable is used to capture the value in the input feild

  // This function handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault();  //any default is prevented here 
    onAddRecipe(name);  //adding this name to the variable list here bro 
    setName('');        // make the input feild empty again 
  };

  return (
    <div className='form-container'>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit} >
        {/* Controlled input field, value and onChange handler */}
        <input
          type="text"  
          value={name}     
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default RecipeForm;
