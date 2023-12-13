import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      // Creating a promise for fetching data
      const fetchDataPromise = new Promise((resolve, reject) => {
        // Simulating an asynchronous API call
        setTimeout(() => {
          const success = true; // Simulate success or failure
          if (success) {
            resolve('Data fetched successfully');
          } else {
            reject('Error fetching data');
          }
        }, 1000); // Simulating a delay of 1 second
      });

      // Using the promise
      fetchDataPromise
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          setError(error);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && <p>{data}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default MyComponent;

// Using promise and actually calling the api there bro 
// Function that returns a promise to fetch data from the API
const fetchDataFromApi = () => {
  return new Promise((resolve, reject) => {
    // Replace 'https://api.example.com/data' with the actual API endpoint
    fetch('https://api.example.com/data')
      .then(response => {
        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON data from the response
        return response.json();
      })
      .then(data => {
        // Resolve the promise with the fetched data
        resolve(data);
      })
      .catch(error => {
        // Reject the promise with the error message
        reject(`Error fetching data: ${error.message}`);
      });
  });
};

// Example of using the fetchDataFromApi function
fetchDataFromApi()
  .then(data => {
    console.log('Data fetched successfully:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

