async function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Data fetched");
        resolve();
      }, 1000);
    });
  }
  
  async function process1() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Processed 1");
        resolve();
      }, 1000);
    });
  }
  
  async function process2() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Processed 2");
        resolve();
      }, 1000);
    });
  }
  
  // Using async/await
  async function fetchDataAsync() {
    try {
      await fetchData();
      await process1();
      await process2();
      console.log("Finished");
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Call the async function
  fetchDataAsync();
  