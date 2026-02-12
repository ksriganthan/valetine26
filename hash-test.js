const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('08.02.2022').digest('hex');
console.log('SHA-256 von 08.02.2022:', hash);
