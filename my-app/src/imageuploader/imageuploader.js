import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  //when we are entering the file we are updating that shit bro 
  const handleFileChange = (event) => {
    // Update state with the selected file
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      // Create FormData to send the file
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Make a POST request to the server
      const response = await axios.post('YOUR_SERVER_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('File uploaded successfully:', response.data);
      // You can handle the response as needed (e.g., show a success message)
    } catch (error) {
      console.error('Error uploading file:', error.message);
      // Handle the error (e.g., show an error message)
    }
  };

  return (
    <div>
      <h2>Image Upload Form</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
};

export default ImageUploadForm;
