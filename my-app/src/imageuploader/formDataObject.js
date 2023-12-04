// Create a new FormData object
var formData = new FormData();

// Append key-value pairs for form fields
formData.append('username', 'john_doe');
formData.append('email', 'john@example.com');
formData.append('profile_picture', fileInput.files[0]);

// Now you can send this FormData object using fetch or XMLHttpRequest
fetch('https://example.com/api/upload', {
  method: 'POST',
  body: formData
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
