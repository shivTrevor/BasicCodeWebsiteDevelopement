import React, { useState } from 'react';
import axios from 'axios';
import './otp.css'

const TwilioOtpGenerator = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const generateOtp = async () => {
    try {
      // Generate a random 6-digit OTP (its a sample otp function and i have to generate its)
      const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setOtp(newOtp);

      // Send the OTP using Twilio's Programmable SMS API
      const response = await axios.post('/send-otp', {
        phoneNumber: phoneNumber,
        otp: newOtp,
      });

      console.log(response.data); // Handle the Twilio response as needed

      setIsOtpSent(true);
    } catch (error) {
      console.error('Error generating OTP:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateOtp();
  };

  return (
    <div className="container">
      <h1 className="title">Twilio OTP Generator</h1>
      {isOtpSent ? (
        <p className="success-message">OTP has been sent to {phoneNumber}</p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            Phone Number:
            <input
              className="input"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
          <button className="generate-button" type="submit">Generate OTP</button>
        </form>
      )}
    </div>
  );
  
};

export default TwilioOtpGenerator;
