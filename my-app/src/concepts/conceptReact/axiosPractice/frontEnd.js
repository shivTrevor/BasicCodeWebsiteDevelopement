// testing axios backend 
//its not working bro and i have to make it work bro 

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosFronted() {
    //creating a state variable
  const [data, setData] = useState({});

  useEffect(() => {
    // Axios GET request to the server
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        console.log(response)
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>App with Axios</h1>
      <p>Data from the server: {data.message}</p>
    </div>
  );
}

export default AxiosFronted;
