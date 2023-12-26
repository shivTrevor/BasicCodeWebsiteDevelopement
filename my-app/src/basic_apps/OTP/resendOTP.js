import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [otpSent, setOtpSent] = useState(false);

  // Function to handle OTP sending
  const sendOtp = () => {
    // Your logic to send OTP here
    setOtpSent(true);
  };

  // Function to handle OTP resend
  const resendOtp = () => {
    // Your logic to resend OTP here
    setOtpSent(false); // Reset the OTP sent state
    sendOtp(); // Trigger sending OTP again
  };

  // useEffect to simulate OTP sending on component mount
  useEffect(() => {
    sendOtp();
  }, []); // Empty dependency array ensures it runs only once on component mount

  return (
    <div>
      {otpSent ? (
        <p>OTP Sent! Check your phone.</p>
      ) : (
        <p>Waiting for OTP...</p>
      )}

      {/* Render Resend OTP button only if OTP has been sent */}
      {otpSent && (
        <button onClick={resendOtp}>
          Resend OTP
        </button>
      )}
    </div>
  );
};

export default YourComponent;
