const crypto = require('crypto');

// Your strong encryption key (keep it secure!)
const encryptionKey = 'your-strong-encryption-key';

// Sensitive information (e.g., email password)
const originalPassword = 'your-original-password';

// Encryption
const cipher = crypto.createCipher('aes-256-cbc', encryptionKey);
let encryptedPassword = cipher.update(originalPassword, 'utf-8', 'hex');
encryptedPassword += cipher.final('hex');

// Print the encrypted password (you would typically save it in a secure location)
console.log('Encrypted Password:', encryptedPassword);

// Decryption (you would perform this at runtime when needed)
const decipher = crypto.createDecipher('aes-256-cbc', encryptionKey);
let decryptedPassword = decipher.update(encryptedPassword, 'hex', 'utf-8');
decryptedPassword += decipher.final('utf-8');

// Print the decrypted password
console.log('Decrypted Password:', decryptedPassword);
