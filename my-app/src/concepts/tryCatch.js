try {
    // Code that might cause an exception
    let result = 10 / 0;  // Division by zero will throw an exception
    console.log(result);  // This line won't be executed if an exception occurs
  } catch (error) {
    // Code to handle the exception
    console.error("An error occurred:", error.message);
  } finally {
    // Optional 'finally' block for code that should be executed regardless of whether an exception occurred or not
    console.log("This will be executed no matter what.");
  }
  