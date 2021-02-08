const CryptoJS = require('crypto-js');
const pass = "U2FsdGVkX19FMpQT5NGnQio326bvajW3c94C4+aUBKg=";
const key = "A secret key 123!";


const decrypted = CryptoJS.AES.decrypt(pass,key).toString(CryptoJS.enc.Utf8);

console.log(decrypted);


