import React, { useState } from 'react';
import './rough.css'

const OtpContainer = () => {
  const [otpValues, setOtpValues] = useState(['', '', '', '']);

  const handleInputChange = (index, value ) => {
    setOtpValues(prevOtpValues => {
      const newOtpValues = [...prevOtpValues];
      newOtpValues[index] = value;
  
        // this is for the shifting of focus...
    if (value && index < 3) {
      const nextInput = document.getElementById(`digit${index+1}`);
      
      // Check if the next input element exists before focusing
      if (nextInput) {
        nextInput.focus();

        // Prevent the default behavior of clearing the input value
        nextInput.addEventListener('focus', (e) => e.preventDefault());
      }
    }

      // show the current value in the console log
      console.log(newOtpValues);
  
      return newOtpValues;
    });
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0) {
      //set the current element to 
      setOtpValues(prevOtpValues => {
        const newOtpValues = [...prevOtpValues];
        newOtpValues[index] = '';
         return newOtpValues;
      });

      const currentInput = document.getElementById(`digit${index-1}`);
      
      // Check if the next input element exists before focusing
      if (currentInput) {
        e.preventDefault();
        currentInput.focus();
      }
    }
  };
  

  return (
    <div className="otp-container">
      {otpValues.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={value}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          id={`digit${index}`}
        />
      ))}
    </div>
  );
};

export default OtpContainer;
