const crypto = require('crypto');
let password = '1111';

// 비밀번호 암호화
// let salt = crypto.randomBytes(64).toString('base64');
// let hashedPassword = crypto.pbkdf2Sync('password', salt, 100000, 10, 'sha512').toString('base64');
// console.log(hashedPassword); // 암호화된 비밀번호 출력

// salt 고정
let salt = 'salt';
let hashedPassword = crypto.pbkdf2Sync('password', salt, 100000, 10, 'sha512').toString('base64');
console.log(hashedPassword); // 고정된 salt로 암호화된 비밀번호 출력