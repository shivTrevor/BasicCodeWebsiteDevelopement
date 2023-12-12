//call back hell example 
function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched");
      callback();
    }, 1000);
  }
  
  function process1(callback) {
    setTimeout(() => {
      console.log("Processed 1");
      callback();
    }, 1000);
  }
  
  function process2(callback) {
    setTimeout(() => {
      console.log("Processed 2");
      callback();
    }, 1000);
  }
  
  // Callback hell
  fetchData(() => {
    process1(() => {
      process2(() => {
        console.log("Finished");
      });
    });
  });

  //Using promise we can solve the 