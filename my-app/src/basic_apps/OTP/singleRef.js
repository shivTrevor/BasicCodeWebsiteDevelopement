import React, { useState, useRef, useEffect } from 'react';
import './roughCSS.css';

const OtpContainer = () => {
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const focusedInputRef = useRef(null);

  const handleInputChange = (index, value) => {
    setOtpValues((prevOtpValues) => {
      const newOtpValues = [...prevOtpValues];
      newOtpValues[index] = value;

      if (value && index < 3) {
        // Set the ref to the currently focused input
        focusedInputRef.current = index + 1;
      }

      // Show the current value in the console log
      console.log(newOtpValues);

      return newOtpValues;
    });
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0) {
      // Clear the current element
      setOtpValues((prevOtpValues) => {
        const newOtpValues = [...prevOtpValues];
        newOtpValues[index] = '';
        return newOtpValues;
      });

      // Update the focused input to the previous one
      focusedInputRef.current = index - 1;
    }
  };

  const handleFocus = (index) => {
    // Set the ref to the currently focused input
    focusedInputRef.current = index;
  };

  useEffect(() => {
    // Manipulate the currently focused input as needed
    if (focusedInputRef.current !== null) {
      // For example, focus on the input element using the DOM API
      document.getElementById(`digit${focusedInputRef.current}`).focus();
    }
  }, [otpValues]);

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
          onFocus={() => handleFocus(index)}
          autoFocus={index === 0}
          onMouseDown={(e) => e.preventDefault()}
          className="otp-input"
        />
      ))}
    </div>
  );
};

export default OtpContainer;
