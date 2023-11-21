// ParallaxComponent.js
import React, { useState, useEffect } from 'react';
import './ParallaxComponent.css';

const ParallaxComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="parallax-background"
        style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
      />
      <div className="parallax-content">
        <h1>Your Parallax Title</h1>
        <p>Your parallax content goes here.</p>
      </div>
    </div>
  );
};

export default ParallaxComponent;
