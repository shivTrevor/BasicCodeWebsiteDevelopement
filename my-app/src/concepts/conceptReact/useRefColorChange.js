import React, { useRef } from 'react';

function ColorChangingComponent() {
  // Create a ref to hold the reference to the div element
  const colorDivRef = useRef();

  // Function to change the color of the div
  const changeColor = () => {
    // Access the current property of the ref to get the DOM element
    const divElement = colorDivRef.current;

    // Change the style or properties of the element
    if (divElement) {
      divElement.style.color = getRandomColor(); // Replace with your logic to get a color
    }
  };

  // Function to get a random color (for demonstration purposes)
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div>
      {/* Attach the ref to the div element */}
      <div id="color" ref={colorDivRef}>
        Click the button to change color
      </div>
      {/* Button to trigger the color change */}
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default ColorChangingComponent;
