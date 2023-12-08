import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QrCodeGenerator = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <label>
        Enter text:
        <input type="text" value={text} onChange={handleInputChange} />
      </label>
      <div style={{ marginTop: '10px' }}>
        {text && <QRCode value={text} />}
      </div>
    </div>
  );
};

export default QrCodeGenerator;
