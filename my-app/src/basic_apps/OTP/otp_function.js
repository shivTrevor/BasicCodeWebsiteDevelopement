// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Generate a unique 4-digit OTP
  function generateUnique4DigitOTP() {
    let otp ='';
    for(let i=0;i<4;i++){
        otp+=Math.floor(Math.random()*10);
    }
    const shuffledDigits = shuffleArray(otp);
    return otpString;
  }
  
  // Example usage
  const newOtp = generateUnique4DigitOTP();
  console.log(newOtp);
  