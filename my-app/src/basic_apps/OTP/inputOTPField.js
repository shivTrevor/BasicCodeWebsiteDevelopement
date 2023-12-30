import React, { useState, useRef, useEffect } from 'react';
import './trialCSS.css';

const OtpContainer = () => {
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const inputRefs = useRef(Array(4).fill(null).map(() => React.createRef()));

  const handleInputChange = (index, value) => {
    setOtpValues((prevOtpValues) => {
      const newOtpValues = [...prevOtpValues];
      newOtpValues[index] = value;

      // this is for the shifting of focus...
      if (value && index < 3) {
        inputRefs.current[index + 1].current.focus();
      }

      // show the current value in the console log
      console.log(newOtpValues);

      return newOtpValues;
    });
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0) {
      // set the current element to
      setOtpValues((prevOtpValues) => {
        const newOtpValues = [...prevOtpValues];
        newOtpValues[index] = '';
        return newOtpValues;
      });

      inputRefs.current[index - 1].current.focus();
      
    }
  };

  //so bro here with respond to the global event listener bro i will kept on focusing the current index 
  const handleGlobalClick = (e) => {
    const otpContainer = document.querySelector('.otp-container');

    if (otpContainer && !otpContainer.contains(e.target)) {
      // Clicked outside the OTP container, prevent the default behavior
      e.preventDefault();
    }

    //show in the last bro 
    inputRefs.current[3].current.focus();
  };

  useEffect(() => {
    // Add a global click event listener
    document.addEventListener('click', handleGlobalClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

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
          autoFocus={index === 0} // Set autoFocus on the first input
          onMouseDown={(e) => e.preventDefault()} // Prevent focus from leaving on click
          className="otp-input"
          ref={inputRefs.current[index]}
        />
      ))}
    </div>
  );
};

export default OtpContainer;
