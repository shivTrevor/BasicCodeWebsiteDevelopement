// src/App.js
import React from 'react';
import { useState } from 'react';
import './emailEntering.css';

function Email() {
  // State to store the entered email address
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the email, such as sending it to a server or updating the state.
    console.log('Submitted email:', email);
  };

  // Function to handle changes in the email input
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div >
      <h1>Email Input Form</h1>
      <div>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input className='input-feild'
          type="email"
          name="email"
          placeholder="Enter your email address"
          style={{ width: '100%' }}
          value={email}
          onChange={handleChange}
          autoComplete="off"
          required
          
        />
        <button type="submit">Get OTP </button>
      </form>
      </div>
    </div>
  );
}

export default Email;
