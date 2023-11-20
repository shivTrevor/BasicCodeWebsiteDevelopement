// HoverableDiv is a React component that renders a div with hover effects, displaying content and showing an ID tooltip when hovered.
import React, { useState } from 'react';
import './HoverableDiv.css';

const HoverableDiv = ({ id, content }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div

      className={`hoverable-div ${isHovered ? 'hovered' : ''}`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <p>{content}</p>
      {isHovered && <div className="tooltip">ID: {id}</div>}
    </div>
  );
};

export default HoverableDiv;
