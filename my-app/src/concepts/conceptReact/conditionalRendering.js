import React, { useState } from 'react';

const UserGreeting = () => {
  // Assume isLoggedIn is a state variable that represents the user's login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to toggle the login status
  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Welcome, {isLoggedIn ? 'User' : 'Guest'}!</h1>
      {isLoggedIn ? (
        <button onClick={toggleLoginStatus}>Logout</button>
      ) : (
        <button onClick={toggleLoginStatus}>Login</button>
      )}
    </div>
  );
};

//Another example of conditional rendering 
//if there is data show it in a paragraph tag inside it bro 
<div>
{data && <p>{data}</p>}
{error && <p>{error}</p>}
</div>


export default UserGreeting;


//
