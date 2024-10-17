const crypto = require('crypto');

const SEC_KEY = process.env.SEC_KEY || 'bcc767b315288831173a6974be7b13cbb753b196a17430d1a90abcb8b9507e61';

if (!SEC_KEY) {
    throw new Error('SEC_KEY environment variable is not set');
}

function encrypt() {
    const iv = crypto.randomBytes(16); 
    const data = crypto.randomBytes(32).toString('hex'); 

    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(SEC_KEY, 'hex'), iv);
    let encrypted = cipher.update(data, 'utf8', 'hex'); 
    encrypted += cipher.final('hex'); 

    return iv.toString('hex') + ':' + encrypted;
}

function decrypt(encryptedData) {
    const [iv, encrypted] = encryptedData.split(':'); 
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(SEC_KEY, 'hex'), Buffer.from(iv, 'hex'));
    let decrypted = decipher.update(encrypted, 'hex', 'utf8'); 
    decrypted += decipher.final('utf8'); 

    return decrypted;
}


module.exports = { encrypt, decrypt };
