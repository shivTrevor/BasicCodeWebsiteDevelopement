require('dotenv').config({ path: '.env' });

// Your nodemailer code using environment variables
// const nodemailer = require('nodemailer');
const { createTransport } = require('nodemailer');

console.log(process.env.EMAIL_USER)
console.log(process.env.EMAIL_PASSWORD)
const sendEmail = async () => {
  try {
    // Create a transporter using SMTP
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

  console.log("mailOptions starting ...")
    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.SENDER_USER,
      subject: 'Subject of the email',
      text: 'Text content of the email',
      html: '<p>HTML content of the email</p>',
    };


    // Send the email using async/await
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error.message);
    // Handle the error appropriately based on your application's needs
  }
};

// Call the function to send the email
sendEmail();

