import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div>
      <video controls width="640" height="360">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const App = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // Fetch video URL from your server
    const fetchVideoUrl = async () => {
      try {
        // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint serving video URL
        const response = await axios.get('YOUR_SERVER_ENDPOINT');
        setVideoUrl(response.data.videoUrl);
      } catch (error) {
        console.error('Error fetching video URL:', error);
      }
    };

    fetchVideoUrl();
  }, []);

  return (
    <div>
      <h1>Video Streaming App</h1>
      {videoUrl && <VideoPlayer videoUrl={videoUrl} />}
    </div>
  );
};

export default App;
