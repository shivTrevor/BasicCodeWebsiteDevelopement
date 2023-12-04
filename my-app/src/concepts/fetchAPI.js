// simple React program that uses the Fetch API to fetch data from a JSON placeholder API 
// and display it in a React component.

import React, { useState, useEffect } from 'react';

const FetchExample = () => {
    //here 
  const [data, setData] = useState([]);
  //setLoading is used for you know telling that whether its fetching the data or not
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //getting the response from the api 
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');//making an api request can also cause the re render here bro 
        //when we get the response we get its json 
        const jsonData = await response.json();
        setData(jsonData);// Updating state triggers a re-render
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that useEffect runs once after the initial render

  return (
    <div>
      <h1>Fetch API Example</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchExample;
