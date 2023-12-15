import React, { useState } from 'react';

const App = () => {
  const slides = [
    <div key={1}>
      <h2>Slide 1</h2>
      <p>Content for Slide 1</p>
    </div>,
    <div key={2}>
      <h2>Slide 2</h2>
      <p>Content for Slide 2</p>
    </div>,
    <div key={3}>
      <h2>Slide 3</h2>
      <p>Content for Slide 3</p>
    </div>,
    // Add more slides as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <button onClick={goToPrevSlide}>Prev</button>
      <div>
        {slides.map((slide, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
            {slide}
          </div>
        ))}
      </div>
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default App;
