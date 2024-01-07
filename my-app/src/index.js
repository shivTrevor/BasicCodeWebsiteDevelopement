import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EmailEntering from './basic_apps/OTP/plainHTMLCSSJS/emailEntering'
// import OTP from './basic_apps/OTP/twilioOtpGenerator.js'
import InputOTP from './basic_apps/OTP/inputOTPField'
import Router from './concepts/conceptReact/navigation/Main'
import Rough from './basic_apps/OTP/trialReact'
import SingleRef from './basic_apps/OTP/singleRef'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <EmailEntering />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
