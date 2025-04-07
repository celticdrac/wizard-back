function encryptSHA256(value: string) {
    const crypto = require('crypto');

    const hash = crypto.createHash('sha256');
    
    hash.update(value);
    
    const hashHex = hash.digest('hex');
    
    return hashHex;
}

export { encryptSHA256 };