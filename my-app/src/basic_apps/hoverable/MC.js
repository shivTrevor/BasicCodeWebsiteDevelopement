// MainComponent is a React component that renders a list of HoverableDiv components based on data provided in the divData array.

import React from 'react';
import HoverableDiv from './HoverableDiv.js';

const MainComponent = () => {
  //so this div data which i am showing there in the 
  const divData = [
    { id: 1, content: 'Div 1 Content' },
    { id: 2, content: 'Div 2 Content' },
    { id: 3, content: 'Div 3 Content' },
    { id: 4, content: 'Div 4 Content' },
    { id: 5, content: 'Div 5 Content' },
    { id: 6, content: 'Div 6 Content' },
    // Add more div data as needed
  ];

  return (
    <div>
      {divData.map((item) => (
        //Id is better than index and key is for reconsilition and virtual dom updation
        
        <HoverableDiv key={item.id} id={item.id} content={item.content} />
      ))}
    </div>
  );
};

export default MainComponent;
