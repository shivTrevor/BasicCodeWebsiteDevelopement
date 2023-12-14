// ParallaxComponent.js
import React, { useState, useEffect } from 'react';
import './parallexComponent.css';

const ParallaxComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      //remove event listener becuase reference to handleScroll and becuase of it agar remove nahi karenge then memory leaks 
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="parallax-background"
        style={{ transform: `translateY(${scrollPosition * 1}px)` }}
      />
      <div className="parallax-content">
        <h1>Your Parallax Title</h1>
        <ul>
    <li>  1 </li>
    <li>  1 </li>
    <li>  1 </li>
    <li>  1 </li> 
    <li>  1 </li>
    <li>  1 </li>
    <li>  1 </li>
    <li>  1 </li>
    <li>  1 </li> 
    <li>  1 </li>
    <li>  1 </li>
    <li>  1 </li>
    <li>  1 </li>
    <li>  1 </li> 
    <li>  1 </li>
    
  </ul>
      </div>
    </div>
  );
};

export default ParallaxComponent;
